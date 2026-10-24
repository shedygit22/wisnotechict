"use client";

import * as React from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className = "", maxTilt = 6 }: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const frame = React.useRef<number | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const element = ref.current;
    if (!element) return;

    if (frame.current) cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      element.style.transform = `perspective(1200px) rotateX(${
        -y * maxTilt
      }deg) rotateY(${x * maxTilt}deg)`;
    });
  };

  const handleMouseLeave = () => {
    const element = ref.current;
    if (!element) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    element.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  };

  React.useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export default TiltCard;
