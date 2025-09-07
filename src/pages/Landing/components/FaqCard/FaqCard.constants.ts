import { tv } from "tailwind-variants/lite";

export const FAQ_CARD_VARIANTS = tv({
  base: "relative overflow-hidden flex min-h-60 min-w-70 py-4 pl-6 pr-10 flex-col justify-between rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out",
  variants: {
    color: {
      yellow: "bg-amber-400 hover:bg-amber-300 text-grey-900",
      blue: "bg-cyan-500 hover:bg-cyan-400 text-cyan-900",
      pink: "bg-red-300 hover:bg-red-200 text-red-900",
    },
  },
});
