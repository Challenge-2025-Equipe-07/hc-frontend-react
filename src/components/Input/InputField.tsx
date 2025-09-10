import { INPUT_VARIANTS } from "./Input.contants";
import type { InputFieldProps } from "./InputField.types";

const InputField = ({
  label,
  id,
  name,
  className,
  variant = "blue",
  ...rest
}: InputFieldProps) => {
  const {
    base,
    wrapper,
    label: labelStyle,
  } = INPUT_VARIANTS({ color: variant });
  return (
    <div className={wrapper()}>
      <label htmlFor={id} className={labelStyle()}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={`${base()} ${className || ""} `}
        {...rest}
      />
    </div>
  );
};

export { InputField };
