import { useState, useEffect } from "react";

const useCopyToClipboard = (options?: { timeout?: number }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { timeout = 2000 } = options ?? {};

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy text to clipboard:", err);
    }
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, timeout);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isCopied, timeout]);

  return [isCopied, copyToClipboard] as const;
};

export { useCopyToClipboard };
