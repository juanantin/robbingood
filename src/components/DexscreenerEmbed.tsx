import { siteConfig } from "@/config/site";

function isLivePairUrl(url: string) {
  return url.startsWith("https://dexscreener.com/") || url.startsWith("https://www.dexscreener.com/");
}

export function DexscreenerEmbed() {
  const live = isLivePairUrl(siteConfig.pairUrl);

  if (!live) {
    return (
      <div className="flex h-80 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-forest-700/40 bg-forest-50 text-center sm:h-96">
        <span className="text-4xl">🌲🏹</span>
        <p className="font-display text-lg font-semibold text-forest-800">Chart goes live at launch</p>
        <p className="max-w-sm text-sm text-parchment-800">
          Set <code className="rounded bg-forest-900/10 px-1.5 py-0.5 font-mono text-xs">pairUrl</code> in{" "}
          <code className="rounded bg-forest-900/10 px-1.5 py-0.5 font-mono text-xs">src/config/site.ts</code> to a real
          Dexscreener pair link to show the live chart here.
        </p>
      </div>
    );
  }

  const embedSrc = `${siteConfig.pairUrl}${siteConfig.pairUrl.includes("?") ? "&" : "?"}embed=1&theme=dark`;

  return (
    <div className="h-80 overflow-hidden rounded-2xl border border-forest-700/30 shadow-deep sm:h-96">
      <iframe
        src={embedSrc}
        title="Dexscreener chart"
        className="h-full w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
