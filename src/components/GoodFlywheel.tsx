"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionBackground } from "./SectionBackground";

const steps = [
  {
    title: "Trading Generates Fees",
    body: "Every trade generates protocol fees that fuel the ecosystem.",
  },
  {
    title: "The Dev Wallet Buys Back $GOOD",
    body: "Instead of extracting value, the protocol uses those fees to continuously buy back $GOOD from the open market.",
  },
  {
    title: "Rich → Poor",
    body: "The accumulated $GOOD doesn&apos;t stay in the dev wallet. It flows back to the community through daily airdrops.",
  },
  {
    title: "Daily Rewards for the Hood",
    body: "The most active holders earn the biggest share. The more you contribute, engage, and build your bag, the more $GOOD you can receive.",
    footnote: "No insiders. No KOL allocations. No hidden advantages.",
  },
  {
    title: "Stronger Community. Stronger Demand.",
    body: "As activity grows, more fees are generated. More fees mean more buybacks. More buybacks mean more $GOOD distributed to the community. More rewarded holders create a stronger network, bringing in even more activity.",
  },
];

const loopStages = ["Fees", "Buybacks", "Daily Airdrops", "Community Growth", "More Activity", "More Fees"];

export function GoodFlywheel() {
  return (
    <section id="flywheel" className="relative overflow-hidden py-20 sm:py-28">
      <SectionBackground tone="dark" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          light
          eyebrow="Rob the Rich. Reward the Village."
          title="The $GOOD Flywheel"
          subtitle="$GOOD is built around a simple idea: value should flow back to the people who believe, contribute, and stay active."
        />

        <div className="mt-14 flex flex-col items-stretch">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full rounded-2xl border border-gold-500/30 bg-parchment-50/5 p-6 shadow-deep backdrop-blur"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-400 text-sm font-bold text-forest-950">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-parchment-50">{step.title}</h3>
                    <p className="mt-2 text-sm text-parchment-200">{step.body}</p>
                    {step.footnote ? (
                      <p className="font-display mt-3 text-xs font-semibold tracking-wide text-gold-300 uppercase">
                        {step.footnote}
                      </p>
                    ) : null}
                  </div>
                </div>
              </motion.div>

              {i < steps.length - 1 ? (
                <span aria-hidden className="my-3 text-2xl text-gold-400">
                  ⬇️
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-gold-500/40 bg-forest-950/60 p-6 text-center shadow-deep sm:p-8"
        >
          <p className="font-display text-xs font-semibold tracking-[0.3em] text-gold-300 uppercase">
            The @RobbinGoodX Economy
          </p>
          <p className="font-display mt-4 text-base font-semibold text-parchment-50 sm:text-lg">
            {loopStages.join(" → ")}
          </p>
          <p className="mt-4 text-sm text-parchment-200 sm:text-base">
            A self-reinforcing flywheel where value flows from the protocol back to the people.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
