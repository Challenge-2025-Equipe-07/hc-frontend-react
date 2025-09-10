import { tv } from "tailwind-variants/lite";

export const INPUT_VARIANTS = tv({
  slots: {
    wrapper: "grid w-full max-w-xs gap-y-1",
    base: "w-fit flex gap-2 body px-3 py-2 rounded-3xl focus:ring-2 ring-blue-500 border-1 transition-colors duration-300 ease-in-out",
    label: "text-blue-600",
  },
  variants: {
    color: {
      light: {
        label: "text-blue-600",
        base: "w-full rounded-md border border-gray-50 px-4 py-2 placeholder-blue-600 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none",
      },
      blue: {
        label: "text-blue-600",
        base: "w-full rounded-md border border-gray-50 px-4 py-2 placeholder-blue-500 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none",
      },
    },
  },
});
