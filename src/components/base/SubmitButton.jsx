"use client";
import React from "react";
import { useFormContext, useFormState } from "react-hook-form";

export default function SubmitButton({
  className = "btn-light",
  label = "ارسال",
  ...other
}) {
  const { control } = useFormContext();
  const { isSubmitting } = useFormState({ control });

  return (
    <button
      type="submit"
      className={`btn ${className}`}
      disabled={!!isSubmitting}
      aria-busy={isSubmitting}
      {...other}
    >
      {isSubmitting ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
          <span role="status" className="ms-1">
            {label}
          </span>
        </>
      ) : (
        label
      )}
    </button>
  );
}
