"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";

export function WhyItWorks() {
  return (
    <section id="community" className="bg-parchment-texture py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <SectionHeading eyebrow="The unfair advantage" title="Why It Works" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-8 space-y-4 text-base text-parchment-900 sm:text-lg"
        >
          <p>
            Most projects spend thousands paying influencers upfront. Robbin Good rewards the community instead.
          </p>
          <p>
            Anyone — even someone who can&apos;t afford a large bag — can earn $GOOD by making the project more
            visible.
          </p>
          <p>
            The goal: turn every holder into a marketer, every meme into an advertisement, every viral post into new
            exposure.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display mt-10 inline-block rounded-2xl border border-gold-500/40 bg-forest-900 px-8 py-5 text-xl font-bold text-gold-300 shadow-deep"
        >
          Don&apos;t buy influence. Build an army that earns it. 🏹
        </motion.p>
      </div>
    </section>
  );
}
