import React from "react";

export type TextareaProps = {
  label: string;
  id: string;
  name: string;
  variant?: "blue" | "light";
} & React.ComponentProps<"textarea">;
