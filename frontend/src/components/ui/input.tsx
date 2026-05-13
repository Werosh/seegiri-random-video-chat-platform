import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export type InputProps = ComponentProps<"input">;

export function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-zinc-50 shadow-inner shadow-black/30 transition placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
