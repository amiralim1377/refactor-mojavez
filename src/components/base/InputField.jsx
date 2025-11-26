"use client";
import { useController, useFormContext } from "react-hook-form";

export default function InputField({
  name,
  label,
  placeholder,
  type = "text",
}) {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
  });

  return (
    <div className="form-item">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...field}
        className={`border border-gray-200 rounded-xl w-full p-2  ${
          invalid ? "form-input-error" : ""
        }`}
      />
      {invalid && (
        <span className="text-red-500 text-xs">{error?.message}</span>
      )}
    </div>
  );
}
