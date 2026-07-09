import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p
          className={`font-display text-xs font-semibold tracking-[0.3em] uppercase ${
            light ? "text-gold-300" : "text-forest-600"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display mt-3 text-3xl font-bold sm:text-4xl ${
          light ? "text-parchment-50" : "text-forest-900"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base ${light ? "text-parchment-200" : "text-parchment-800"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
