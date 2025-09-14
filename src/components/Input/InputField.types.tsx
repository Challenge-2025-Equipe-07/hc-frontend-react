import React from "react";
import { INPUT_VARIANTS } from "./Input.contants";
import type { VariantProps } from "tailwind-variants/lite";

type InputVariantProps = VariantProps<typeof INPUT_VARIANTS>;

export type InputFieldProps = {
  label: string;
  id: string;
  name: string;
  error?: string;
} & Omit<React.ComponentProps<"input">, "name"> &
  InputVariantProps;
