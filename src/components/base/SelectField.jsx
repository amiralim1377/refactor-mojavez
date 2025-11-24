"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext, useController } from "react-hook-form";

export default function SelectField({
  name,
  label,
  options,
  disabled,
  placeholder,
}) {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className="w-full">
      <Label htmlFor={name} className="mb-1 block">
        {label}
      </Label>

      <Select
        onValueChange={field.onChange}
        value={field.value ?? ""}
        disabled={disabled}
      >
        <SelectTrigger id={name} className="w-full flex-row-reverse">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {error && (
        <span className="text-destructive text-sm mt-1">{error.message}</span>
      )}
    </div>
  );
}
