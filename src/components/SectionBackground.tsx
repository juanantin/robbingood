import Image from "next/image";

export function SectionBackground({ tone }: { tone: "light" | "dark" }) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <Image src="/forest-path-bg.webp" alt="" fill className="object-cover" />
      <div className={tone === "light" ? "absolute inset-0 bg-parchment-100/88" : "absolute inset-0 bg-forest-950/80"} />
    </div>
  );
}
