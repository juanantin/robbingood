"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";

const cards = [
  { emoji: "🏹", title: "0% Buy Tax", body: "No hidden fees on the way in." },
  { emoji: "🏹", title: "0% Sell Tax", body: "No hidden fees on the way out." },
  { emoji: "📜", title: "Simple, transparent tokenomics", body: "Nothing to decode, nothing to hide." },
  {
    emoji: "💰",
    title: "Public community/dev wallet",
    body: "Used exclusively for rewards, marketing, and community growth.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-parchment-texture py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="No fine print"
          title="How It Works"
          subtitle="Instead of promising yield or fake utility, the project rewards the community for helping it grow."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-forest-700/15 bg-parchment-50 p-6 text-center shadow-deep"
            >
              <span className="text-4xl">{card.emoji}</span>
              <h3 className="font-display mt-4 text-lg font-bold text-forest-900">{card.title}</h3>
              <p className="mt-2 text-sm text-parchment-800">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
