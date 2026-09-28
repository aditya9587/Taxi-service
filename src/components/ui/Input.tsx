import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id || React.useId();

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-semibold uppercase tracking-wider text-brand-muted">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && <span className="absolute left-3 text-brand-muted pointer-events-none">{leftIcon}</span>}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full bg-brand-dark/80 border border-brand-border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-brand-subtle focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all min-h-[44px]",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-rose-500 focus:ring-rose-500",
              className
            )}
            {...props}
          />
          {rightIcon && <span className="absolute right-3 text-brand-muted">{rightIcon}</span>}
        </div>
        {error && <p className="text-xs text-rose-400 font-medium">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
