import type { SVGProps } from "react";

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M2 12h50M52 12l-10-9M52 12l-10 9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 12l6-3v6l-6-3Z" fill="currentColor" />
    </svg>
  );
}

export function CoinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="24" r="21" fill="var(--color-gold-400)" stroke="var(--color-gold-700)" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="15" fill="none" stroke="var(--color-gold-700)" strokeWidth="1.5" strokeDasharray="2 3" />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontSize="16"
        fontWeight="700"
        fill="var(--color-gold-800)"
        fontFamily="Cinzel, serif"
      >
        G
      </text>
    </svg>
  );
}

export function BowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14 4c-6 6-6 34 0 40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M14 4v40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M6 24h34M40 24l-8-7M40 24l-8 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="24" r="20" fill="var(--color-parchment-100)" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
    </svg>
  );
}

export function FeatherIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M34 6C18 10 10 26 10 42c16 0 32-8 36-24-6 2-11 6-14 11 1-8 3-16-2-23Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M12 40 34 8" stroke="var(--color-parchment-100)" strokeWidth="1.2" opacity="0.6" />
    </svg>
  );
}

export function ScrollIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="8" y="10" width="32" height="28" rx="2" fill="var(--color-parchment-100)" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="10" r="4" fill="var(--color-parchment-200)" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="38" r="4" fill="var(--color-parchment-200)" stroke="currentColor" strokeWidth="2" />
      <circle cx="40" cy="10" r="4" fill="var(--color-parchment-200)" stroke="currentColor" strokeWidth="2" />
      <circle cx="40" cy="38" r="4" fill="var(--color-parchment-200)" stroke="currentColor" strokeWidth="2" />
      <path d="M15 18h18M15 24h18M15 30h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18 10h12l4 8c4 4 4 12 0 18-3 4-7 6-10 6s-7-2-10-6c-4-6-4-14 0-18l4-8Z"
        fill="var(--color-parchment-400)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M18 10c0-3 2-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="2" />
      <path d="M16 28h16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

export function CopyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.24 2H21l-6.55 7.49L22 22h-6.9l-5.4-7.06L3.5 22H0.72l7.02-8.02L0 2h7.06l4.88 6.46L18.24 2Zm-1.2 18h1.9L6.98 3.9H4.95L17.04 20Z" />
    </svg>
  );
}

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21.9 3.36 18.6 20.1c-.25 1.1-.9 1.37-1.83.85l-5.06-3.73-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.16 9.4-8.5c.41-.36-.09-.56-.63-.2L6.3 13.02.98 11.35c-1.16-.36-1.18-1.16.24-1.72L20.4 2.24c.97-.36 1.82.23 1.5 1.12Z" />
    </svg>
  );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 5v14l11-7Z" />
    </svg>
  );
}

export function SpeakerOnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
      <path
        d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SpeakerOffIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
      <path d="m16 9 5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
