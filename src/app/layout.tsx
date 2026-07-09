import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Robbin Good ($GOOD) — Steal from the rich. Gib to the poor.";
const description =
  "A 0/0 tax meme coin that rewards the community for helping it grow — no yield, no fake utility, just memes, community, and daily rewards.";

export const metadata: Metadata = {
  // TODO: set NEXT_PUBLIC_SITE_URL (or hardcode) to your real production domain once deployed
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    // TODO: crop/resize to the standard 1200x630 OG ratio for best rendering on all platforms
    images: ["/hero-bg.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/hero-bg.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-parchment-100">{children}</body>
    </html>
  );
}
