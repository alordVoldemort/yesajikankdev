import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
