export type Message = {
  text: string;
  sender: "user" | "assistant";
};

export type useChatbotMessagingType = {
  messages: Message[];
  isLoading: boolean;
  isSessionReady: boolean;
  sendMessage: (userMessage: string) => Promise<void>;
};
