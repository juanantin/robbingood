"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

function isBurnDataConfigured() {
  return (
    !siteConfig.burnedAmount.startsWith("TODO_") && !siteConfig.burnedSupplyPercent.startsWith("TODO_")
  );
}

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
          <h2 className="font-display mt-3 text-3xl font-bold text-parchment-50 sm:text-4xl">Burn $GOOD</h2>

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
            Every trade on the Robin Hood chain pays a small network fee — and instead of sitting in a wallet, part
            of it is burned on the spot, permanently removed from circulation. No unlocks, no reversing it. The more
            the chain gets used, the more $GOOD disappears for good.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
