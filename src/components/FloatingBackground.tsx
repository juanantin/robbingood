"use client";

import { motion } from "framer-motion";
import { ArrowIcon, CoinIcon } from "./icons";

const floaters = [
  { Icon: CoinIcon, top: "12%", left: "8%", size: 46, delay: 0, duration: 7, rotate: -10 },
  { Icon: CoinIcon, top: "70%", left: "5%", size: 34, delay: 1.2, duration: 9, rotate: 12 },
  { Icon: CoinIcon, top: "22%", left: "88%", size: 40, delay: 0.6, duration: 8, rotate: 8 },
  { Icon: CoinIcon, top: "78%", left: "90%", size: 30, delay: 2, duration: 6.5, rotate: -6 },
  { Icon: ArrowIcon, top: "40%", left: "82%", size: 70, delay: 0.3, duration: 10, rotate: -18 },
  { Icon: ArrowIcon, top: "60%", left: "12%", size: 60, delay: 1.6, duration: 9, rotate: 20 },
];

export function FloatingBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {floaters.map(({ Icon, top, left, size, delay, duration, rotate }, i) => (
        <motion.div
          key={i}
          className="absolute text-gold-400/80"
          style={{ top, left, width: size, height: size }}
          animate={{ y: [0, -20, 0], rotate: [0, rotate, 0] }}
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="h-full w-full drop-shadow-lg" />
        </motion.div>
      ))}
    </div>
  );
}
