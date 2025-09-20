import { tv } from "tailwind-variants/lite";

export const MESSAGE_VARIANTS = tv({
  slots: {
    wrapper: "flex h-fit gap-x-1",
    message: "body flex h-fit max-w-md rounded-lg p-3 text-gray-800",
  },
  variants: {
    theme: {
      user: {
        wrapper: "justify-self-end",
        message: "bg-gray-200 text-gray-800",
      },
      assistant: {
        wrapper: "justify-self-start",
        message: "bg-amber-100 text-gray-800",
      },
    },
  },
  defaultVariants: {
    theme: "assistant",
  },
});
