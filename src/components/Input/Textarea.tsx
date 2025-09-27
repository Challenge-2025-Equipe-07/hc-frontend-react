import { INPUT_VARIANTS } from "./Input.contants";
import type { TextareaProps } from "./Textarea.types";

const Textarea = ({
  label,
  id,
  name,
  className,
  maxLength = 500,
  color = "blue",
  error,
  charCount,
  ...rest
}: TextareaProps) => {
  const { base, wrapper, label: labelStyle } = INPUT_VARIANTS({ color });

  const isValidChar = !isNaN(charCount || 0);

  return (
    <div className={wrapper()}>
      <label htmlFor={id} className={labelStyle()}>
        {label}
      </label>
      <div className="relative">
        <textarea
          id={id}
          name={name}
          maxLength={maxLength}
          className={`${base()} ${className || ""} `}
          {...rest}
        />
        {isValidChar && (
          <span className="absolute right-3 bottom-2 text-sm text-gray-800">
            {charCount}/{maxLength}
          </span>
        )}
      </div>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export { Textarea };
