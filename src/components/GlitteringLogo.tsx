"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sparkles = [
  { top: "6%", left: "20%", size: 16, delay: 0 },
  { top: "72%", left: "84%", size: 12, delay: 1.1 },
  { top: "18%", left: "80%", size: 13, delay: 2.2 },
  { top: "78%", left: "10%", size: 11, delay: 3.3 },
];

export function GlitteringLogo() {
  return (
    <div className="relative">
      <Image
        src="/logo-wordmark.png"
        alt="Robbin Good ($GOOD)"
        width={1536}
        height={1024}
        priority
        className="h-auto w-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)]"
      />
      <div
        aria-hidden
        className="logo-shine pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.85) 49%, rgba(255,255,255,0.85) 51%, transparent 60%)",
          backgroundSize: "250% 250%",
          mixBlendMode: "screen",
          WebkitMaskImage: "url(/logo-wordmark.png)",
          maskImage: "url(/logo-wordmark.png)",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
      {sparkles.map((s, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute text-gold-100"
          style={{ top: s.top, left: s.left, fontSize: s.size }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1.15, 0.4] }}
          transition={{ duration: 1.6, delay: s.delay, repeat: Infinity, repeatDelay: 3 }}
        >
          ✨
        </motion.span>
      ))}
    </div>
  );
}
