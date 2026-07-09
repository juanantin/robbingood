"use client";

import { motion } from "framer-motion";

const quotes = [
  "Instead of rewarding the richest wallets, Robbin Good rewards the people creating the most value.",
  "No fake utility. No staking. No promises. Just memes, community, and daily rewards.",
  "The richer you make the community, the richer the community makes itself. 🏹💰",
];

export function Philosophy() {
  return (
    <section className="bg-forest-texture py-20 sm:py-28">
      <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6">
        {quotes.map((quote, i) => (
          <motion.blockquote
            key={quote}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative text-center"
          >
            <span className="font-display absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-gold-500/30">
              &ldquo;
            </span>
            <p className="font-display text-xl font-semibold text-parchment-50 sm:text-2xl">{quote}</p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
