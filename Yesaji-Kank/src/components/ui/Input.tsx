import type { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm text-white/70">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
