import { Button } from "@/components/Button/Button";
import { useVoiceTranscript } from "@/hooks/useVoiceTranscript";
import { useState, useEffect } from "react";

const SearchComponent = () => {
  const {
    transcript,
    isListening,
    startListening,
    stopListening,
    isSupported,
  } = useVoiceTranscript();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchTerm(transcript);
  }, [transcript]);

  const handleListen = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const iconToShow = () => {
    if (!isSupported) return "microphoneOff";
    if (isListening) return "ear";
    return "microphone";
  };

  return (
    <>
      <form
        className="flex max-w-2xl items-center justify-center gap-2 rounded-4xl border-1 border-gray-200 bg-white px-4 py-2 shadow-2xl transition-shadow focus-within:ring-1 focus-within:ring-blue-500"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="search"
          placeholder="Como criar meu RG do HC?"
          aria-label="Busque sobre sua dúvida"
          value={searchTerm}
          id="search-form"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="body w-full py-2 transition outline-none"
        />
        <Button
          type="button"
          aria-label="Enviar por audio"
          onClick={handleListen}
          icon={iconToShow()}
          disabled={!isSupported || isListening}
        />
        <Button type="submit">Buscar</Button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        {isListening
          ? "Fale agora. A gravação parará automaticamente."
          : "Clique em 'Gravar' para buscar por voz."}
      </p>
    </>
  );
};

export { SearchComponent };
