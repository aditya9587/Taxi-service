import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({ className, hoverEffect = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-brand-card border border-brand-border rounded-xl p-6 transition-all duration-300 relative overflow-hidden",
        hoverEffect && "hover:border-brand-border/80 hover:bg-brand-card-hover hover:shadow-xl hover:shadow-black/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
