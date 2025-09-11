import type { ReactNode } from "react";
import type { LinkProps } from "react-router";
import { ICON_STRINGS, BUTTON_VARIANTS } from "./Button.constants";

type BaseButtonProps = {
  children?: ReactNode;
  icon?: keyof typeof ICON_STRINGS;
  variant?: keyof typeof BUTTON_VARIANTS.variants.color;
  to?: string;
};

type ButtonAsButton = BaseButtonProps & {
  asLink?: false;
} & React.ComponentProps<"button">;

type ButtonAsLink = BaseButtonProps & {
  asLink: true;
} & LinkProps;

export type ButtonProps = ButtonAsButton | ButtonAsLink;
