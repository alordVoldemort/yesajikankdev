import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-orange-600 text-white hover:bg-orange-500 border-transparent",
  outline:
    "bg-transparent text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white",
  ghost:
    "bg-transparent text-white/70 border-transparent hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg border font-medium transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
