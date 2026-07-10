"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionBackground } from "./SectionBackground";

const bounties = [
  { reward: "10 GOOD", desc: "A crypto KOL likes your post" },
  { reward: "25 GOOD", desc: "A KOL replies to your post" },
  { reward: "50 GOOD", desc: "Your meme reaches a target number of likes" },
  { reward: "100 GOOD", desc: "Best community meme of the day" },
  { reward: "Bonus GOOD", desc: "Bring verified new holders or win special weekly quests" },
];

const questTypes = [
  "Create the best meme",
  "Make a viral post on X",
  "Raid important tweets",
  "Bring in new holders",
  "Produce videos/content about Robbin Good",
];

export function QuestBoard() {
  return (
    <section id="quests" className="relative overflow-hidden py-20 sm:py-28">
      <SectionBackground tone="light" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="Pin your bounty" title="The Quest Board" subtitle="$GOOD Rewards" />

        {/* wooden board */}
        <div
          className="mt-14 rounded-3xl border-8 border-parchment-800 p-4 shadow-deep sm:p-8"
          style={{
            backgroundImage: "url(/quest-wood.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bounties.map((b, i) => (
              <motion.div
                key={b.reward}
                initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rotate-[-1deg] rounded-lg border border-parchment-500/40 p-5 shadow-deep even:rotate-[1deg]"
                style={{
                  backgroundImage: "url(/quest-parchment.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Image
                  src="/quest-nail.png"
                  alt=""
                  width={28}
                  height={28}
                  className="absolute -top-3.5 left-1/2 h-7 w-7 -translate-x-1/2 drop-shadow-md"
                />
                <div className="font-display inline-block rounded-full bg-gold-400 px-3 py-1 text-xs font-bold tracking-wide text-forest-950 uppercase">
                  🪙 {b.reward}
                </div>
                <p className="mt-3 text-sm font-medium text-forest-900">{b.desc}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: bounties.length * 0.08 }}
              className="flex flex-col justify-center rounded-lg border border-gold-500/50 bg-forest-900 p-5 text-parchment-100 shadow-deep"
            >
              <p className="font-display text-sm font-bold tracking-wide text-gold-300 uppercase">Quest Types</p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {questTypes.map((q) => (
                  <li key={q} className="flex items-start gap-2">
                    <span className="text-gold-400">🏹</span>
                    {q}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <p className="font-display mt-10 text-center text-lg font-semibold text-forest-800">
          The harder the quest and the bigger the impact, the bigger the reward.
        </p>
      </div>
    </section>
  );
}
