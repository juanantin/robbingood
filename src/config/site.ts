// Central place for everything you need to fill in before launch.
// Search this repo for "TODO" to find every placeholder.
export const siteConfig = {
  name: "Robbin Good",
  ticker: "$GOOD",
  tagline: "Steal from the rich. Gib to the poor. 🏹",
  pitch:
    "A 0/0 tax meme coin that rewards the community for helping it grow — no yield, no fake utility, just memes, community, and daily rewards.",

  chain: "Robin Hood",

  supply: "1,000,000,000",
  buyTax: "0%",
  sellTax: "0%",

  contractAddress: "0xc11db44f485040c7dc2c6df1fdf001ec180b88e1",

  dexUrl:
    "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0xc11db44f485040c7dc2c6df1fdf001ec180b88e1",

  pairUrl: "https://dexscreener.com/robinhood/0xc11db44f485040c7dc2c6df1fdf001ec180b88e1",

  // TODO: replace with the live burnt $GOOD amount and % of total supply burned.
  burnedAmount: "TODO_BURNED_AMOUNT",
  burnedSupplyPercent: "TODO_BURNED_PERCENT",

  socials: {
    twitter: "https://x.com/RobbinGoodX",
    telegram: "https://t.me/robbingood_portal",
  },
} as const;
