"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "./icons";

export function CopyAddressPill({ address }: { address: string }) {
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
    <div className="relative inline-flex w-full max-w-xl items-center gap-3 rounded-full border border-forest-700/30 bg-parchment-50 px-3 py-2 shadow-inner sm:px-5 sm:py-3">
      <code className="flex-1 truncate font-mono text-xs text-forest-900 sm:text-sm">{address}</code>
      <button
        onClick={handleCopy}
        className="font-display flex shrink-0 items-center gap-1.5 rounded-full bg-forest-800 px-3 py-1.5 text-xs font-semibold text-parchment-50 uppercase transition-colors hover:bg-forest-700 sm:px-4 sm:py-2"
      >
        {copied ? <CheckIcon className="h-3.5 w-3.5" /> : <CopyIcon className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>

      {copied ? (
        <div className="font-display absolute -top-11 left-1/2 -translate-x-1/2 rounded-full bg-forest-900 px-4 py-2 text-xs font-semibold text-gold-300 shadow-deep">
          Copied! 🏹
        </div>
      ) : null}
    </div>
  );
}
