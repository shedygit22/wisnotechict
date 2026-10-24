"use client";

import * as React from "react";
import Link from "next/link";

export interface LogoProps {
  className?: string;
  inverted?: boolean;
  href?: string;
}

export const Logo = React.forwardRef<HTMLSpanElement, LogoProps>(
  ({ className = "", inverted = false, href, ...props }, ref) => {
    const textColor = inverted ? "text-white" : "text-black";

    const renderLogo = () => (
      <>
        <img
          src={inverted ? "/images/brand-logo.png" : "/images/brand-logo-navy.png"}
          alt="Wisnotech logo"
          className="h-8 w-auto"
          width={444}
          height={293}
          aria-label="Wisnotech logomark"
        />
        <span className={`ml-2 font-bold text-xl tracking-tight uppercase ${textColor}`}>
          Wisnotech
        </span>
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={`flex items-center gap-2 ${className}`}
          {...props}
        >
          {renderLogo()}
        </Link>
      );
    }

    return (
      <span
        ref={ref}
        className={`flex items-center gap-2 ${className}`}
        {...props}
      >
        {renderLogo()}
      </span>
    );
  },
);

Logo.displayName = "Logo";
export default Logo;