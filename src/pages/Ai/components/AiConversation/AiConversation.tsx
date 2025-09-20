import { forwardRef } from "react";
import type { AiConversationProps } from "./AiConversation.types";
import IMREAColor from "@/assets/LogomarcaColor.svg";
import { MESSAGE_VARIANTS } from "./AiConversation.constants";

const AiConversation = forwardRef<HTMLDivElement, AiConversationProps>(
  ({ messages }, ref) => {
    return (
      <div
        ref={ref}
        className="grid h-full flex-1 auto-rows-max gap-y-4 overflow-y-auto p-6"
      >
        {messages.map((msg, index) => {
          const { wrapper, message } = MESSAGE_VARIANTS({ theme: msg.sender });
          const isAssiatant = msg.sender === "assistant";
          return (
            <div className={wrapper()}>
              {isAssiatant && (
                <img
                  src={IMREAColor}
                  className="h-fit max-w-6"
                  alt=""
                  aria-hidden="true"
                  height={24}
                />
              )}
              <div className={message()} key={index}>
                <p>{msg.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);

AiConversation.displayName = "AiConversation";

export { AiConversation };
