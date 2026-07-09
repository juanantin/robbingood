"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionBackground } from "./SectionBackground";

const contributions = [
  { emoji: "🎨", label: "Creating memes" },
  { emoji: "📢", label: "Raiding on X" },
  { emoji: "🤝", label: "Bringing new holders" },
  { emoji: "⭐", label: "Likes/replies from major KOLs" },
  { emoji: "🎬", label: "Producing viral content" },
];

export function CommunityRewards() {
  return (
    <section id="rewards" className="relative overflow-hidden py-20 sm:py-28">
      <SectionBackground tone="dark" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          light
          eyebrow="Every single day"
          title="Community Rewards"
          subtitle="Every day, the treasury (the public DEV WALLET) distributes tokens to community members who complete quests."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {contributions.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2 rounded-full border border-gold-500/30 bg-parchment-50/5 px-4 py-2 text-sm font-medium text-parchment-100 backdrop-blur"
            >
              <span>{item.emoji}</span>
              {item.label}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display mx-auto mt-12 max-w-2xl text-center text-lg font-semibold text-gold-300"
        >
          Even people who can&apos;t afford a big bag can earn tokens by contributing.
        </motion.p>
      </div>
    </section>
  );
}
