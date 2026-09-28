"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark disabled:opacity-50 disabled:cursor-not-allowed select-none min-h-[44px] touch-manipulation cursor-pointer";

    const variants = {
      primary:
        "bg-brand-yellow text-brand-dark hover:bg-brand-yellow-hover active:scale-[0.98] shadow-md shadow-brand-yellow/10 font-semibold",
      secondary:
        "bg-white/10 text-white hover:bg-white/15 active:scale-[0.98] border border-white/10 backdrop-blur-sm",
      outline:
        "border border-brand-border text-white hover:border-brand-yellow hover:text-brand-yellow active:scale-[0.98] bg-brand-card/50",
      ghost:
        "text-brand-muted hover:text-white hover:bg-white/5 active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-3.5 py-2 text-xs gap-1.5 min-h-[44px]",
      md: "px-5 py-2.5 text-sm gap-2 min-h-[44px]",
      lg: "px-7 py-3.5 text-base gap-2.5 min-h-[48px]",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        <span>{children}</span>
        {!isLoading && rightIcon ? <span className="shrink-0">{rightIcon}</span> : null}
      </button>
    );
  }
);

Button.displayName = "Button";
