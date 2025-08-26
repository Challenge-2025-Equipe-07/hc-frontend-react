import { useState, useEffect, useRef } from "react";

import type { FormEvent } from "react";

interface Message {
  text: string;
  sender: "user" | "assistant";
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá! Como eu posso te ajudar?", sender: "assistant" },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSessionReady, setIsSessionReady] = useState<boolean>(false);

  const chatMessagesRef = useRef<HTMLDivElement>(null);

  const SERVER_URL = "http://localhost:3000";

  useEffect(() => {
    const createSession = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/api/session`);
        if (!response.ok) {
          throw new Error("Failed to create session");
        }
        const data = await response.json();
        console.log("Session started:", data.sessionId);
        setIsSessionReady(true);
      } catch (error) {
        console.error("Initialization Error:", error);
        setMessages((prev) => [
          ...prev,
          {
            text: "Sorry, I am having trouble connecting. Please try again later.",
            sender: "assistant",
          },
        ]);
      }
    };

    createSession();
  }, []);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userMessage = inputValue.trim();

    if (!userMessage || isLoading || !isSessionReady) return;

    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch(`${SERVER_URL}/api/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.generic && data.generic.length > 0) {
        data.generic.forEach((res: { response_type: string; text: string }) => {
          if (res.response_type === "text") {
            setMessages((prev) => [
              ...prev,
              { text: res.text, sender: "assistant" },
            ]);
          }
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Oops! Something went wrong. Please try again.",
          sender: "assistant",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 font-sans">
      <div className="flex h-full w-full max-w-2xl flex-col rounded-lg bg-white shadow-2xl md:h-[90vh]">
        {/* Header */}
        <div className="flex items-center rounded-t-lg bg-blue-600 p-4 text-white">
          <h1 className="text-xl font-bold">My Watson Assistant</h1>
        </div>

        {/* Chat Messages */}
        <div ref={chatMessagesRef} className="flex-1 overflow-y-auto p-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "items-start gap-3"}`}
            >
              <div
                className={`max-w-md rounded-lg p-3 ${msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
              >
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="rounded-b-lg border-t border-gray-200 bg-gray-50 p-4">
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                isSessionReady
                  ? "Type your message..."
                  : "Connecting to assistant..."
              }
              className="flex-1 rounded-lg border border-gray-300 p-3 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
              autoComplete="off"
              disabled={isLoading || !isSessionReady}
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95 disabled:bg-blue-300"
              disabled={isLoading || !isSessionReady}
            >
              {isLoading ? "..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { ChatPage };
