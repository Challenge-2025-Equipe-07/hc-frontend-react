import React, { useState } from "react";
import type { FieldValues } from "react-hook-form";
import type { TextareaProps } from "./Textarea.types";

const Textarea = <T extends FieldValues>({
  label,
  id,
  name,
  register,
  className,
  maxLength = 500,
  ...rest
}: TextareaProps<T>) => {
  const [charCount, setCharCount] = useState(0);

  const { onChange, ...registerProps } = register(name);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    setCharCount(e.target.value.length);
  };

  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-2 block font-bold text-blue-600">
        {label}
      </label>
      <div className="relative">
        <textarea
          id={id}
          maxLength={maxLength}
          className={`w-full resize-y rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none ${className || ""} `}
          {...rest}
          {...registerProps}
          onChange={handleTextareaChange}
        />
        <span className="absolute right-3 bottom-2 text-sm text-gray-500">
          {charCount}/{maxLength}
        </span>
      </div>
    </div>
  );
};

export { Textarea };
