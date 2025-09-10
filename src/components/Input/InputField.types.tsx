
import React from "react";

export type InputFieldProps = {
  label: string;
  id: string;
  name: string;
  variant?: "blue" | "light";
} & Omit<React.ComponentProps<"input">, "name">;
