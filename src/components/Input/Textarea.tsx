import React, { useState } from "react";
import type { FieldValues } from "react-hook-form";
import { INPUT_VARIANTS } from "./Input.contants";
import type { TextareaProps } from "./Textarea.types";

const Textarea = <T extends FieldValues>({
  label,
  id,
  name,
  register,
  className,
  maxLength = 500,
  variant = "blue",
  ...rest
}: TextareaProps<T>) => {
  const [charCount, setCharCount] = useState(0);

  const { onChange, ...registerProps } = register(name);

  const {
    base,
    wrapper,
    label: labelStyle,
  } = INPUT_VARIANTS({ color: variant });

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    setCharCount(e.target.value.length);
  };

  return (
    <div className={wrapper()}>
      <label htmlFor={id} className={labelStyle()}>
        {label}
      </label>
      <div className="relative">
        <textarea
          id={id}
          maxLength={maxLength}
          className={`${base()} ${className || ""} `}
          {...rest}
          {...registerProps}
          onChange={handleTextareaChange}
        />
        <span className="absolute right-3 bottom-2 text-sm text-gray-800">
          {charCount}/{maxLength}
        </span>
      </div>
    </div>
  );
};

export { Textarea };
