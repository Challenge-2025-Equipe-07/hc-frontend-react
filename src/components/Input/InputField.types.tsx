import type { UseFormRegister, Path, FieldValues } from "react-hook-form";
import React from "react";

export type InputFieldProps<T extends FieldValues> = {
  label: string;
  id: string;
  name: Path<T>;
  register: UseFormRegister<T>;
} & Omit<React.ComponentProps<"input">, "name">;
