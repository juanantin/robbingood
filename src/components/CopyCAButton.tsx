"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "./icons";

function truncate(address: string) {
  if (address.length <= 14) return address;
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function CopyCAButton({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable; silently ignore
    }
  }

  return (
    <div className="relative inline-flex">
      <button
        onClick={handleCopy}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-parchment-100/40 bg-transparent px-6 py-3 font-display text-sm font-semibold tracking-wide text-parchment-100 uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-300 active:translate-y-0"
      >
        {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
        CA: {truncate(address)}
      </button>

      {copied ? (
        <div className="font-display absolute -top-11 left-1/2 -translate-x-1/2 rounded-full bg-forest-900 px-4 py-2 text-xs font-semibold whitespace-nowrap text-gold-300 shadow-deep">
          Copied! 🏹
        </div>
      ) : null}
    </div>
  );
}
