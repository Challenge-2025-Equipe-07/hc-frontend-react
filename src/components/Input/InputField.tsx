import { INPUT_VARIANTS } from "./Input.contants";
import type { InputFieldProps } from "./InputField.types";
import type { FieldValues } from "react-hook-form";

const InputField = <T extends FieldValues>({
  label,
  id,
  name,
  register,
  className,
  variant = "blue",
  ...rest
}: InputFieldProps<T>) => {
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
        className={`${base()} ${className || ""} `}
        {...rest}
        {...register(name)}
      />
    </div>
  );
};

export { InputField };
