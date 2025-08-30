import { ICON_STRINGS, BUTTON_VARIANTS } from "./Button.constants";
import type { ButtonProps } from "./Button.types";

const Button = ({
  children,
  icon,
  variant = "primary",
  ...props
}: ButtonProps & React.ComponentProps<"button">) => {
  const IconComponent = ICON_STRINGS[icon || "redirect"];
  const selectedVariant = BUTTON_VARIANTS({ color: variant });

  return (
    <button className={selectedVariant} {...props}>
      {children} {icon && <IconComponent size={24} color="currentColor" />}
    </button>
  );
};

export { Button };
