import { tv } from "tailwind-variants/lite";

export const FEATURE_CARD_VARIANTS = tv({
  slots: {
    base: "before:-z-1 gap-4 relative grid min-h-72 w-fit max-w-[300px] grid-rows-[max-content_1fr_max-content] rounded-2xl p-4 shadow-2xl before:absolute before:inset-0 before:rounded-2xl before:blur-xl [&>*:not(img)]:relative",
    img: "absolute right-0 bottom-0 max-md:hidden",
  },
  variants: {
    theme: {
      cold: {
        base: "gradient-blue",
        img: "translate-y-5 translate-x-[55%]",
      },
      warm: {
        base: "gradient-red",
        img: "translate-x-[30%]",
      },
    },
  },
});
