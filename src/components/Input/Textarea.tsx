import React, { useState } from "react";
import { INPUT_VARIANTS } from "./Input.contants";
import type { TextareaProps } from "./Textarea.types";

const Textarea = ({
  label,
  id,
  name,
  className,
  maxLength = 500,
  variant = "blue",
  ...rest
}: TextareaProps) => {
  const [charCount, setCharCount] = useState(0);

  const { onChange } = rest;

  const {
    base,
    wrapper,
    label: labelStyle,
  } = INPUT_VARIANTS({ color: variant });

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e);
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
          name={name}
          maxLength={maxLength}
          className={`${base()} ${className || ""} `}
          onChange={handleTextareaChange}
          {...rest}
        />
        <span className="absolute right-3 bottom-2 text-sm text-gray-800">
          {charCount}/{maxLength}
        </span>
      </div>
    </div>
  );
};

export { Textarea };
