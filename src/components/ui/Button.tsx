import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "gold" | "forest" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  gold:
    "bg-linear-to-b from-gold-300 to-gold-500 text-forest-950 border border-gold-600 hover:from-gold-200 hover:to-gold-400 shadow-deep",
  forest:
    "bg-forest-800 text-parchment-100 border border-forest-600 hover:bg-forest-700 shadow-deep",
  ghost:
    "bg-transparent text-parchment-100 border border-parchment-100/40 hover:border-gold-400 hover:text-gold-300",
};

export function Button({ variant = "gold", className = "", children, ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
