// Button.tsx
import { Link } from "react-router";
import { ICON_STRINGS, BUTTON_VARIANTS } from "./Button.constants";
import type { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const IconComponent = ICON_STRINGS[props.icon || "redirect"];
  const selectedVariant = BUTTON_VARIANTS({ color: props.variant });

  if (props.asLink) {
    return (
      <Link
        to={props.to}
        className={`${props.className || " "} ${selectedVariant}`}
      >
        {props.children}{" "}
        {props.icon && <IconComponent size={24} color="currentColor" />}
      </Link>
    );
  }

  const {
    icon,
    children,
    className,
    onClick,
    ...rest
  } = props;
  return (
    <button
      className={`${className || ""} ${selectedVariant}`}
      onClick={onClick}
      {...rest}
    >
      {children} {icon && <IconComponent size={24} color="currentColor" />}
    </button>
  );
};

export { Button };
