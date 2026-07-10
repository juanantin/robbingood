"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "./ui/Button";
import { XIcon, TelegramIcon } from "./icons";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Rewards", href: "#rewards" },
  { label: "Quests", href: "#quests" },
  { label: "Burn", href: "#burn" },
  { label: "Flywheel", href: "#flywheel" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-800/60 bg-forest-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="font-display flex items-center gap-2 text-lg font-bold text-gold-300">
          <Image src="/icon.png" alt="" width={32} height={32} className="h-8 w-8" />
          Robbin Good
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-xs font-semibold tracking-wide text-parchment-200 uppercase transition-colors hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="X / Twitter"
            className="text-parchment-200 transition-colors hover:text-gold-300"
          >
            <XIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.socials.telegram}
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="text-parchment-200 transition-colors hover:text-gold-300"
          >
            <TelegramIcon className="h-5 w-5" />
          </a>
          <Button
            href={siteConfig.dexUrl}
            target="_blank"
            rel="noreferrer"
            variant="gold"
            className="px-5 py-2 text-xs"
          >
            Buy $GOOD
          </Button>
        </div>

        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-parchment-100" />
          <span className="h-0.5 w-6 bg-parchment-100" />
          <span className="h-0.5 w-6 bg-parchment-100" />
        </button>
      </div>

      {open ? (
        <div className="border-t border-forest-800/60 bg-forest-950 px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-sm font-semibold text-parchment-200 uppercase"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href={siteConfig.socials.twitter} target="_blank" rel="noreferrer" className="text-parchment-200">
                <XIcon className="h-5 w-5" />
              </a>
              <a href={siteConfig.socials.telegram} target="_blank" rel="noreferrer" className="text-parchment-200">
                <TelegramIcon className="h-5 w-5" />
              </a>
            </div>
            <Button
              href={siteConfig.dexUrl}
              target="_blank"
              rel="noreferrer"
              variant="gold"
              onClick={() => setOpen(false)}
              className="mt-2"
            >
              Buy $GOOD
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
