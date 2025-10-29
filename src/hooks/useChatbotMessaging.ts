import type { Message, useChatbotMessagingType } from "@/types/AiChat.types";
import { useState, useEffect } from "react";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const useChatbotMessaging = (): useChatbotMessagingType => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá! Como eu posso te ajudar?", sender: "assistant" },
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isSessionReady, setIsSessionReady] = useState<boolean>(false);

  useEffect(() => {
    const createSession = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/api/session`);
        if (!response.ok) {
          throw new Error("Falha ao criar a sessão");
        }
        const data = await response.json();
        console.log("Sessão iniciada:", data.sessionId);
        setIsSessionReady(true);
      } catch (error) {
        console.error("Erro de inicialização:", error);
        setMessages((prev) => [
          ...prev,
          {
            text: "Desculpe, estou com problemas para me conectar. Por favor, tente novamente mais tarde.",
            sender: "assistant",
          },
        ]);
      }
    };

    createSession();
  }, []);

  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim() || isLoading || !isSessionReady) return;

    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${SERVER_URL}/api/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("A resposta da rede não foi bem-sucedida");
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
      console.error("Erro ao enviar mensagem:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Oops! Algo deu errado. Por favor, tente novamente.",
          sender: "assistant",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, isSessionReady, sendMessage };
};
