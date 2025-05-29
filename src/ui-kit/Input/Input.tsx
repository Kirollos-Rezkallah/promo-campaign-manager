import React from "react";
import "./Input.css";

type InputSize = "sm" | "md" | "lg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  inputSize?: InputSize;
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  id,
  inputSize = "md",
  error = false,
  ...props
}) => {
  return (
    <div
      className={`input-wrapper input--${inputSize} ${
        error ? "input--error" : ""
      }`}>
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <input
        id={id}
        className="input-field"
        aria-invalid={error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <span className="input-error" id={`${id}-error`}>
          This field is required.
        </span>
      )}
    </div>
  );
};
