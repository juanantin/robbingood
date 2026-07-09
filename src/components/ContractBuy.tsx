import { siteConfig } from "@/config/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { CopyAddressPill } from "./CopyAddressPill";
import { DexscreenerEmbed } from "./DexscreenerEmbed";

export function ContractBuy() {
  return (
    <section id="buy" className="bg-parchment-texture py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Get in the band" title="Contract & Buy" />

        <div className="mt-10 flex flex-col items-center gap-6">
          <CopyAddressPill address={siteConfig.contractAddress} />

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={siteConfig.dexUrl} target="_blank" rel="noreferrer" variant="gold">
              Buy on DEX
            </Button>
            <Button
              href={
                isDexscreenerConfigured() ? siteConfig.pairUrl : "https://dexscreener.com"
              }
              target="_blank"
              rel="noreferrer"
              variant="forest"
            >
              View Chart
            </Button>
          </div>

          <div className="w-full">
            <DexscreenerEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}

function isDexscreenerConfigured() {
  return (
    siteConfig.pairUrl.startsWith("https://dexscreener.com/") ||
    siteConfig.pairUrl.startsWith("https://www.dexscreener.com/")
  );
}
