import { tv } from "tailwind-variants/lite";
import {
  ListIcon,
  QuestionIcon,
  ArrowUpRightIcon,
  MicrophoneIcon,
  MicrophoneSlashIcon,
  EarIcon,
  CopyIcon,
} from "@phosphor-icons/react";

export const ICON_STRINGS = {
  hamburger: ListIcon,
  question: QuestionIcon,
  redirect: ArrowUpRightIcon,
  microphone: MicrophoneIcon,
  microphoneOff: MicrophoneSlashIcon,
  ear: EarIcon,
  copy: CopyIcon,
};

export const BUTTON_VARIANTS = tv({
  base: "w-fit flex gap-2 h-fit body px-3 py-2 rounded-3xl focus:ring-2 ring-blue-500 disabled:pointer-events-none border-1 transition-colors duration-300 ease-in-out",
  variants: {
    color: {
      primary:
        "border-transparent bg-blue-500 text-gray-50 active:border-transparent hover:border-transparent active:bg-sky-800 hover:bg-sky-800 active:text-gray-50 hover:text-gray-50",
      secondary:
        "border-blue-500 bg-transparent text-blue-500 active:border-transparent hover:border-transparent active:bg-sky-200 hover:bg-sky-200 active:text-sky-800 hover:text-sky-800 disabled:border-gray-600",
      tertiary:
        "border-gray-50 bg-gray-50 text-blue-500 active:border-transparent hover:border-transparent active:bg-sky-800 hover:bg-sky-800 active:text-gray-50 hover:text-gray-50",
    },
  },
  defaultVariants: {
    color: "primary",
  },
  compoundVariants: [
    {
      color: ["primary", "secondary", "tertiary"],
      class: "disabled:text-gray-600 disabled:opacity-75",
    },
    {
      color: ["primary", "tertiary"],
      class: "disabled:bg-gray-300 disabled:border-transparent",
    },
  ],
});
