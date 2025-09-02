import { useState, useEffect, useRef, useCallback } from "react";
import type { CustomSpeechRecognition } from "./useVoiceTranscript.types";

export const useVoiceTranscript = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  const recognitionRef = useRef<CustomSpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      console.warn(
        "A API de Reconhecimento de Fala não é suportada neste navegador.",
      );
      return;
    }

    const recognition = new SpeechRecognitionAPI() as CustomSpeechRecognition;

    recognition.continuous = false;
    recognition.lang = "pt-BR";
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Erro no reconhecimento de fala:", event.error);
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const currentTranscript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      setTranscript(currentTranscript);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  const startListening = useCallback(() => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  }, [isListening]);

  return {
    transcript,
    isListening,
    startListening,
    stopListening,
    isSupported: !!(window.SpeechRecognition || window.webkitSpeechRecognition),
  };
};
