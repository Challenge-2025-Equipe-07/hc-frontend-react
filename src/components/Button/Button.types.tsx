import type { ReactNode } from "react";
import { ICON_STRINGS } from "./Button.constants";

export type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  icon?: keyof typeof ICON_STRINGS;
};
