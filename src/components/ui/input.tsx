import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helper, className = "", id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    return (
      <div className="w-full" style={{ display: "contents" }}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-semibold text-[#0A1930] mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full px-4 py-3 text-base font-normal text-[#344054] bg-white border border-[#E3E8EF] rounded-md transition-all duration-200 focus:border-[#102A56] focus:outline-none focus:ring-1 focus:ring-[#102A56]/20 ${
            error ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : ""
          } ${className}`}
          {...(error ? { "aria-invalid": true } : {})}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-500">{error}</p>
        )}
        {helper && !error && (
          <p className="mt-1.5 text-xs text-[#64748B]">{helper}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helper?: string;
  className?: string;
  rows?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helper, className = "", id, rows = 5, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    return (
      <div className="w-full" style={{ display: "contents" }}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-semibold text-[#0A1930] mb-1.5"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={`w-full px-4 py-3 text-base font-normal text-[#344054] bg-white border border-[#E3E8EF] rounded-md transition-all duration-200 focus:border-[#102A56] focus:outline-none focus:ring-1 focus:ring-[#102A56]/20 ${
            error ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : ""
          } ${className}`}
          {...(error ? { "aria-invalid": true } : {})}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-500">{error}</p>
        )}
        {helper && !error && (
          <p className="mt-1.5 text-xs text-[#64748B]">{helper}</p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helper?: string;
  className?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helper, className = "", id, options, ...props }, ref) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;
    return (
      <div className="w-full" style={{ display: "contents" }}>
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-semibold text-[#0A1930] mb-1.5"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={`w-full px-4 py-3 text-base font-normal text-[#344054] bg-white border border-[#E3E8EF] rounded-md transition-all duration-200 focus:border-[#102A56] focus:outline-none focus:ring-1 focus:ring-[#102A56]/20 cursor-pointer ${
            error ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : ""
          } ${className}`}
          {...(error ? { "aria-invalid": true } : {})}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1.5 text-xs text-red-500">{error}</p>
        )}
        {helper && !error && (
          <p className="mt-1.5 text-xs text-[#64748B]">{helper}</p>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";