import type { InputFieldProps } from "./InputField.types";
import type { FieldValues } from "react-hook-form";

const InputField = <T extends FieldValues>({
  label,
  id,
  name,
  register,
  className,
  ...rest
}: InputFieldProps<T>) => {
  return (
    <div className="w-full max-w-xs">
      <label htmlFor={id} className="mb-2 block font-bold text-blue-600">
        {label}
      </label>
      <input
        id={id}
        className={`w-full rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none ${className || ""} `}
        {...rest}
        {...register(name)}
      />
    </div>
  );
};

export { InputField };
