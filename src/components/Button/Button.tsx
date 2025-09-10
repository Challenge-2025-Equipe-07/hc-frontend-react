// Button.tsx
import { Link } from "react-router";
import { ICON_STRINGS, BUTTON_VARIANTS } from "./Button.constants";
import type { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const { asLink, variant = "primary", icon, children, to, className } = props;
  const IconComponent = ICON_STRINGS[icon || "redirect"];
  const selectedVariant = BUTTON_VARIANTS({ color: variant });

  if (asLink) {
    return (
      <Link to={to} className={`${className || " "} ${selectedVariant}`}>
        {children} {icon && <IconComponent size={24} color="currentColor" />}
      </Link>
    );
  }

  return (
    <button className={`${className || " "} ${selectedVariant}`}>
      {children} {icon && <IconComponent size={24} color="currentColor" />}
    </button>
  );
};

export { Button };
