"use client";

import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "whatsapp" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      className = "",
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const base =
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none";

    const variants: Record<string, string> = {
      primary:
        "bg-[linear-gradient(135deg,#102A56_0%,#0A1930_100%)] text-white shadow-[0_14px_30px_-18px_rgba(10,25,48,0.8)] hover:shadow-[0_22px_42px_-20px_rgba(10,25,48,0.9)] focus-visible:outline-[#102A56]",
      accent:
        "bg-[linear-gradient(135deg,#D8B878_0%,#C9A25B_55%,#A87E34_100%)] text-[#0A1930] shadow-[0_14px_30px_-18px_rgba(168,126,52,0.7)] hover:shadow-[0_22px_42px_-20px_rgba(168,126,52,0.8)] focus-visible:outline-[#A87E34]",
      outline:
        "bg-white/80 text-[#0A1930] border-2 border-[#E3E8EF] hover:border-[#102A56]/40 hover:bg-white hover:shadow-[0_16px_30px_-24px_rgba(10,25,48,0.55)] focus-visible:outline-[#102A56]",
      whatsapp:
        "bg-[#0A1930] text-white hover:bg-[#102A56] shadow-[0_14px_30px_-20px_rgba(10,25,48,0.8)] focus-visible:outline-[#102A56]",
      ghost:
        "text-[#0A1930] hover:bg-[#102A56]/[0.06] focus-visible:outline-[#102A56]",
    };

    const sizes: Record<string, string> = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-[0.95rem]",
      lg: "px-8 py-4 text-[1rem]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${base} ${variants[variant]} ${sizes[size]} ${
          fullWidth ? "w-full" : ""
        } ${className}`}
        {...props}
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.18)_50%,transparent_75%)] transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {isLoading && (
            <svg
              className="w-4 h-4 animate-spin text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          {children}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
