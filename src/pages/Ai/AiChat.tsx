import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Bili from "@/assets/Bili.svg";

import { Button } from "@/components/Button/Button";
import { useVoiceTranscript } from "@/hooks/useVoiceTranscript";
import { useChatbotMessaging } from "@/hooks/useChatbotMessaging";
import { AiConversation } from "./components/AiConversation/AiConversation";
import type { FormValues } from "./AiChat.types";

const AiChat = () => {
  const { messages, isLoading, isSessionReady, sendMessage } =
    useChatbotMessaging();

  const {
    transcript,
    isListening,
    startListening,
    stopListening,
    isSupported,
  } = useVoiceTranscript({
    onTranscriptionEnd: (finalTranscript) => {
      if (finalTranscript) {
        setValue("message", finalTranscript);
        handleSubmit(onSubmit)();
      }
    },
  });

  const { register, handleSubmit, reset, setValue } = useForm<FormValues>({
    defaultValues: {
      message: "",
    },
  });

  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: FormValues) => {
    sendMessage(data.message);
    reset();
  };

  useEffect(() => {
    if (transcript) {
      setValue("message", transcript);
    }
  }, [transcript, setValue]);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleListen = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const iconToShow = () => {
    if (!isSupported) return "microphoneOff";
    if (isListening) return "ear";
    return "microphone";
  };

  return (
    <aside className="animate-appear grid min-h-135 lg:min-h-110 max-w-80 auto-rows-[max-content_1fr_max-content] items-center justify-center gap-y-4 rounded-lg bg-gray-50 p-2 shadow-2xl">
      <header className="flex gap-x-4 rounded-2xl bg-[linear-gradient(102deg,rgba(231,127,92,0.6)_10.2%,#f36279_30.11%,rgba(247,191,105,0.8)_76.45%,rgba(255,255,255,0.5)_119.15%)] px-4 py-2 text-gray-50">
        <img src={Bili} alt="Assistente de IA" width={29} height={32} />
        <h2 className="subtitle">Bili</h2>
      </header>

      <AiConversation ref={chatMessagesRef} messages={messages} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-3"
        ref={formRef}
      >
        <input
          {...register("message")}
          placeholder={
            isSessionReady
              ? "Converse com Bili, nosso assistente"
              : "Chamando o assistente Bili..."
          }
          className="flex-1 rounded-lg border border-gray-300 p-3 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
          autoComplete="off"
          disabled={isLoading || !isSessionReady}
        />
        <Button
          type="button"
          aria-label="Enviar por audio"
          onClick={handleListen}
          icon={iconToShow()}
          disabled={!isSupported || isListening}
        />
      </form>
    </aside>
  );
};

export { AiChat };
