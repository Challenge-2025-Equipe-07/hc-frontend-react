import { tv } from "tailwind-variants/lite";

export const FEATURE_CARD_VARIANTS = tv({
  base: "before:-z-1] gap- relative grid min-h-72 w-fit max-w-[300px] grid-rows-[max-content_1fr_max-content] rounded-2xl p-4 shadow-2xl before:absolute before:inset-0 before:rounded-2xl before:blur-xl [&>*:not(img)]:relative",
  variants: {
    theme: {
      cold: "gradient-blue [&>img]:translate-y-3.5 [&>img]:translate-x-[55%]",
      warm: "gradient-red [&>img]:translate-x-[30%]",
    },
  },
});
