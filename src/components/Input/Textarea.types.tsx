import React from "react";
import { INPUT_VARIANTS } from "./Input.contants";
import type { VariantProps } from "tailwind-variants/lite";

type TextareaVariantProps = VariantProps<typeof INPUT_VARIANTS>;

export type TextareaProps = {
  label: string;
  id: string;
  name: string;
  variant?: "blue" | "light";
} & React.ComponentProps<"textarea"> &
  TextareaVariantProps;
