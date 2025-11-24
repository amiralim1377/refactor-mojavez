"use client";

import { Slider } from "../ui/slider";
import { useController, useFormContext } from "react-hook-form";

export default function SliderField({
  name,
  label,
  min = 0,
  max = 100,
  step = 1,
}) {
  const { control } = useFormContext();

  const {
    field: { value, onChange },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    defaultValue: min,
  });

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label className="block text-right mb-2 text-gray-700">{label}</label>
      )}

      {/* Slider RTL */}
      <div dir="rtl">
        <Slider
          value={[value]}
          min={min}
          max={max}
          step={step}
          onValueChange={(v) => onChange(v[0])}
          className={`w-full ${invalid ? "border-red-500" : ""}`}
        />
      </div>

      {/* Min / Current / Max */}
      <div
        className="flex justify-between text-sm text-gray-500 mt-2"
        dir="ltr"
      >
        <span>{min}</span>
        <span>{value}</span>
        <span>{max}</span>
      </div>

      {/* Error */}
      {invalid && <p className="text-red-500 text-xs mt-1">{error?.message}</p>}
    </div>
  );
}
