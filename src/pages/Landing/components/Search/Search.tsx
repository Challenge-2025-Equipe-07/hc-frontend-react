import { Button } from "@/components/Button/Button";
import { useVoiceTranscript } from "@/hooks/useVoiceTranscript";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { SearchForm, SearchComponentProps } from "./Search.types";

const SearchComponent = ({ onSearch }: SearchComponentProps) => {
  const {
    transcript,
    isListening,
    startListening,
    stopListening,
    isSupported,
  } = useVoiceTranscript();
  const { register, handleSubmit, setValue, watch } = useForm<SearchForm>();
  const searchValue = watch("search");

  useEffect(() => {
    setValue("search", transcript);
  }, [transcript, setValue]);

  useEffect(() => {
    if (searchValue === "") {
      onSearch({ search: "" });
    }
  }, [searchValue, onSearch]);

  const handleListen = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const onSubmit: SubmitHandler<SearchForm> = (data) => {
    onSearch(data);
  };

  const iconToShow = () => {
    if (!isSupported) return "microphoneOff";
    if (isListening) return "ear";
    return "microphone";
  };

  return (
    <>
      <form
        className="flex w-full max-w-124 items-center gap-2 rounded-4xl border-1 border-gray-200 bg-white px-4 py-2 shadow-2xl transition-shadow focus-within:ring-1 focus-within:ring-blue-500"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="search"
          placeholder="Como criar meu RG do HC?"
          aria-label="Busque sobre sua dúvida"
          id="search-form"
          {...register("search")}
          className="body flex-2 py-2 transition outline-none"
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
