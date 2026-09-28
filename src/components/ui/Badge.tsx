import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "yellow" | "dark" | "outline" | "success";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "yellow",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const base = "inline-flex items-center font-semibold rounded-full uppercase tracking-wider transition-colors";
  
  const variants = {
    yellow: "bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30",
    dark: "bg-brand-card-hover text-brand-muted border border-brand-border",
    outline: "border border-white/20 text-white/90",
    success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
}
