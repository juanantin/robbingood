"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/Button";
import { FloatingBackground } from "./FloatingBackground";

const stats = [
  { label: "Ticker", value: siteConfig.ticker },
  { label: "Supply", value: siteConfig.supply },
  { label: "Chain", value: siteConfig.chain },
  { label: "Buy Tax", value: siteConfig.buyTax },
  { label: "Sell Tax", value: siteConfig.sellTax },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-forest-texture pt-20 pb-28 sm:pt-28 sm:pb-36">
      <FloatingBackground />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display inline-block rounded-full border border-gold-500/50 bg-gold-500/10 px-4 py-1 text-xs font-semibold tracking-[0.25em] text-gold-300 uppercase"
        >
          Sherwood is calling
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-6 text-4xl font-bold text-parchment-50 sm:text-6xl"
        >
          Robbin Good <span className="text-gold-300">($GOOD)</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display mt-4 text-xl font-semibold text-gold-300 sm:text-2xl"
        >
          &ldquo;Steal from the rich. Gib to the poors.&rdquo; 🏹
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base text-parchment-200 sm:text-lg"
        >
          {siteConfig.pitch}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#buy" variant="gold">
            Buy $GOOD
          </Button>
          <Button href="#buy" variant="ghost">
            View Chart
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-full border border-parchment-100/15 bg-parchment-50/5 px-4 py-2 text-xs font-semibold text-parchment-100 backdrop-blur"
            >
              <span className="text-gold-300">{stat.label}:</span> {stat.value}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
