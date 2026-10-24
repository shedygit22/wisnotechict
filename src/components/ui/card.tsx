"use client";

import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { children, className = "", hoverable = false, onMouseMove, ...props },
    ref,
  ) => {
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      element.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      onMouseMove?.(event);
    };

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={`card-base spotlight-card ${
          hoverable ? "card-hoverable" : ""
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
export default Card;

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div ref={ref} className={`mb-4 ${className}`} {...props}>
        {children}
      </div>
    );
  },
);

CardHeader.displayName = "CardHeader";

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={`text-[#0A1930] text-xl font-semibold leading-tight mb-2 ${className}`}
        {...props}
      >
        {children}
      </h3>
    );
  },
);

CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ children, className = "", ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={`text-[#344054] leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  );
});

CardDescription.displayName = "CardDescription";
