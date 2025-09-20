import { useState, useEffect, useRef } from "react";
import Bili from "@/assets/Bili.svg";

import type { FormEvent } from "react";
import type { Message } from "./AiChat.types";

const AiChat = () => {
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
    <aside className="grid max-w-80 items-center justify-center gap-y-4 rounded-lg bg-gray-50 p-2">
      <header className="flex gap-x-4 rounded-2xl bg-[linear-gradient(102deg,rgba(231,127,92,0.6)_10.2%,#f36279_30.11%,rgba(247,191,105,0.8)_76.45%,rgba(255,255,255,0.5)_119.15%)] px-4 py-2 text-gray-50">
        <img src={Bili} alt="Assistente de IA" width={29} height={32} />
        <h1 className="subtitle">Bili</h1>
      </header>

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
    </aside>
  );
};

export { AiChat };
