import type { UseFormRegister, Path, FieldValues } from "react-hook-form";
import React from "react";

export type TextareaProps<T extends FieldValues> = {
  label: string;
  id: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  variant?: "blue" | "light";
} & React.ComponentProps<"textarea">;
