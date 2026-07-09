# Robbin Good ($GOOD)

> "Steal from the rich. Gib to the poor." 🏹

A single-page, production-ready marketing site for the **$GOOD** meme coin. Pure frontend — no backend, no wallet connection, no on-chain interaction. Built with Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # eslint
```

## Before you launch: fill in the TODOs

Everything you need to customize lives in **one file**: [`src/config/site.ts`](./src/config/site.ts).

| Field | What it is | Where it shows up |
| --- | --- | --- |
| `contractAddress` | The deployed token contract address | Hero "CA" copy button, footer (copy-to-clipboard pill) |
| `dexUrl` | Your DEX swap link (Uniswap, Raydium, etc.) | "Buy $GOOD" buttons (header, hero) |
| `pairUrl` | A real `https://dexscreener.com/...` pair URL | "View Chart" buttons link here once set; otherwise they fall back to `dexscreener.com` |
| `socials.twitter` / `socials.telegram` | Your social links | Header, footer |

`chain` is already set to "Robin Hood" — change it in `src/config/site.ts` if you deploy to a different network.

Search the repo for `TODO` to find every remaining placeholder.

## Project structure

```
src/
  app/
    layout.tsx       # fonts, metadata, Open Graph/Twitter tags
    page.tsx         # assembles all sections in order
    globals.css      # Tailwind v4 theme tokens (forest/gold/parchment palette)
  config/
    site.ts          # all TODO placeholders in one place
  components/
    Header.tsx            # sticky nav, smooth-scroll links, Buy CTA, socials
    Hero.tsx               # logo wordmark w/ scroll parallax, tagline, CTAs, stat chips
    FloatingBackground.tsx # floating coins/arrows
    CopyAddressPill.tsx    # one-click copy with "Copied!" toast (footer)
    CopyCAButton.tsx       # one-click copy CA button (hero)
    HowItWorks.tsx
    CommunityRewards.tsx
    QuestBoard.tsx         # RPG bounty-board styled quest list
    Philosophy.tsx         # pull-quote section
    WhyItWorks.tsx
    Footer.tsx
    icons.tsx              # hand-rolled SVG icon set (arrows, coins, bow, socials, etc.)
```

One component per section, as requested — easy to reorder, restyle, or swap out.

## Deploy to Vercel

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy. Every push to your default branch will trigger a new deployment.

## Disclaimer

$GOOD is a meme coin with no intrinsic value or expectation of financial return. For entertainment and community purposes only. DYOR.
