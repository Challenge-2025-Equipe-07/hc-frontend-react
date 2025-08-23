import { useState, useEffect, useRef } from "react";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false; // Stop listening after the user stops speaking
    recognition.lang = "pt-BR"; // Set language to Brazilian Portuguese
    recognition.interimResults = true; // Show results as they are being spoken

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      // Update the input field with the live transcript
      setSearchTerm(transcript);
    };

    // Store the recognition instance in a ref
    recognitionRef.current = recognition;

    // Cleanup function to stop recognition if the component unmounts
    return () => {
      recognition.stop();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // 2. Handle the button click to start/stop listening
  const handleListen = () => {
    const recognition = recognitionRef.current;
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
    } else {
      // Clear the search term before starting a new recording
      setSearchTerm("");
      recognition.start();
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    alert(`Buscando por: "${searchTerm}"`);
  };

  return (
    <section className="py-16 text-center md:py-24">
      <h1 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl">
        Qual a sua dúvida?
      </h1>
      <form
        className="mx-auto flex max-w-2xl items-center justify-center gap-2"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="search"
          placeholder="Como criar meu RG do HC?"
          aria-label="Busque sobre sua dúvida"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-5 py-3 transition focus:border-red-500 focus:ring-red-500"
        />
        <button
          type="button"
          aria-label="Enviar por audio"
          onClick={handleListen}
          // 3. Dynamically change button style and text
          className={`rounded-md p-4 font-semibold text-white transition ${
            isListening
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-gray-500 hover:bg-gray-600"
          }`}
        >
          {isListening ? "Ouvindo..." : "Gravar"}
        </button>
        <button
          type="submit"
          className="rounded-md bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          Buscar
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        {isListening
          ? "Fale agora. A gravação parará automaticamente."
          : "Clique em 'Gravar' para buscar por voz."}
      </p>
    </section>
  );
};

export { SearchComponent };
