"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

function isBurnDataConfigured() {
  return (
    !siteConfig.burnedAmount.startsWith("TODO_") && !siteConfig.burnedSupplyPercent.startsWith("TODO_")
  );
}

const embers = [
  { left: "4%", bottom: "6%", size: 6, delay: 0, duration: 4.5 },
  { left: "9%", bottom: "3%", size: 4, delay: 1.2, duration: 5.5 },
  { left: "14%", bottom: "9%", size: 5, delay: 2.4, duration: 5 },
  { left: "6%", bottom: "13%", size: 3, delay: 0.6, duration: 6.5 },
  { left: "18%", bottom: "5%", size: 4, delay: 3, duration: 6 },
  { left: "2%", bottom: "16%", size: 3, delay: 1.8, duration: 5.8 },
];

export function BurnGood() {
  const configured = isBurnDataConfigured();

  return (
    <section id="burn" className="relative overflow-hidden bg-forest-950 py-20 sm:py-28">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/burn-bg-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/burn-bg.mp4" type="video/mp4" />
        </video>
      </div>
      {/* Darken the empty wall on the right, where the text sits, and leave Robin on the left untouched */}
      <div className="absolute inset-0 bg-gradient-to-l from-forest-950/90 via-forest-950/55 to-transparent sm:from-forest-950/92 sm:via-forest-950/25 sm:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/60 via-transparent to-forest-950/95" />

      {/* Embers drifting up from the fireplace */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {embers.map((ember, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold-400 shadow-[0_0_8px_3px_rgba(255,170,50,0.6)]"
            style={{ left: ember.left, bottom: ember.bottom, width: ember.size, height: ember.size }}
            animate={{ y: [0, -240], x: [0, 14, -10, 0], opacity: [0, 1, 1, 0] }}
            transition={{ duration: ember.duration, delay: ember.delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-md text-center sm:mr-0 sm:ml-auto sm:text-right"
        >
          <p className="font-display text-xs font-semibold tracking-[0.3em] text-gold-300 uppercase">
            Deflationary by Design
          </p>
          <h2 className="text-fire font-display mt-3 text-3xl font-bold sm:text-4xl">Burn $GOOD</h2>

          {configured ? (
            <div className="mt-8 space-y-6 sm:space-y-8">
              <div>
                <p className="font-display text-5xl font-extrabold text-gold-300 sm:text-6xl">
                  {siteConfig.burnedAmount}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-parchment-200 uppercase">
                  $GOOD burnt forever
                </p>
              </div>

              <div>
                <p className="font-display text-3xl font-extrabold text-gold-300 sm:text-4xl">
                  {siteConfig.burnedSupplyPercent}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-parchment-200 uppercase">
                  of total supply
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-gold-500/30 bg-forest-950/50 px-6 py-8 backdrop-blur">
              <p className="font-display text-2xl font-bold text-gold-300 sm:text-3xl">Live burn tracker coming soon</p>
              <p className="mt-2 text-sm text-parchment-200">
                The running total and % of supply burnt will show up here once fees start burning $GOOD.
              </p>
            </div>
          )}

          <p className="mt-8 text-sm text-parchment-200 sm:text-base">
            On Robin Hood Chain, every trade pays a 1% fee, and a part of that is burned, permanently removed from
            circulation. No unlocks, no reversing it. The more $GOOD trades, the more it disappears for good.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
