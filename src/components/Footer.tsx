import Image from "next/image";
import { siteConfig } from "@/config/site";
import { CopyAddressPill } from "./CopyAddressPill";
import { XIcon, TelegramIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-forest-950 py-14 text-parchment-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#top" className="font-display flex items-center gap-2 text-lg font-bold text-gold-300">
            <Image src="/icon.png" alt="" width={32} height={32} className="h-8 w-8" />
            Robbin Good
          </a>

          <div className="flex items-center gap-5">
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="X / Twitter"
              className="transition-colors hover:text-gold-300"
            >
              <XIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socials.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="transition-colors hover:text-gold-300"
            >
              <TelegramIcon className="h-5 w-5" />
            </a>
          </div>

          <CopyAddressPill address={siteConfig.contractAddress} />

          <p className="max-w-xl text-xs text-parchment-400">
            $GOOD is a meme coin with no intrinsic value or expectation of financial return. For entertainment and
            community purposes only. DYOR.
          </p>

          <p className="text-xs text-parchment-500">
            © {new Date().getFullYear()} Robbin Good. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
