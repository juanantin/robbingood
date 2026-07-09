// Central place for everything you need to fill in before launch.
// Search this repo for "TODO" to find every placeholder.
export const siteConfig = {
  name: "Robbin Good",
  ticker: "$GOOD",
  tagline: "Steal from the rich. Gib to the poors. 🏹",
  pitch:
    "A 0/0 tax meme coin that rewards the community for helping it grow — no yield, no fake utility, just memes, community, and daily rewards.",

  // TODO: set the deployed chain, e.g. "Ethereum", "Base", "Solana", "BSC"
  chain: "TODO — set the blockchain",

  supply: "1,000,000,000",
  buyTax: "0%",
  sellTax: "0%",

  // TODO: replace with the real deployed contract address
  contractAddress: "TODO_CONTRACT_ADDRESS",

  // TODO: replace with the real DEX swap link (Uniswap / Raydium / etc.)
  dexUrl: "https://TODO-set-your-dex-swap-link.example",

  // TODO: replace with the real Dexscreener (or other chart) pair URL.
  // Until this is a real dexscreener.com/... pair URL, the site shows a
  // "Chart goes live at launch" fallback instead of the iframe embed.
  pairUrl: "TODO_PAIR_URL",

  // TODO: replace with real social links
  socials: {
    twitter: "https://x.com/TODO_ROBBINGOOD",
    telegram: "https://t.me/TODO_ROBBINGOOD",
  },
} as const;
