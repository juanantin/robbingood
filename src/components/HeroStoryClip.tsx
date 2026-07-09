"use client";

import { useRef, useState } from "react";
import { SpeakerOnIcon, SpeakerOffIcon } from "./icons";

export function HeroStoryClip() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <div className="mt-10 w-full max-w-xs overflow-hidden rounded-2xl border border-gold-500/40 bg-forest-950/60 shadow-deep backdrop-blur sm:max-w-sm">
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          poster="/hero-story-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero-story.webm" type="video/webm" />
          <source src="/hero-story.mp4" type="video/mp4" />
        </video>
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute right-2 bottom-2 flex h-8 w-8 items-center justify-center rounded-full bg-forest-950/80 text-parchment-100 transition-colors hover:text-gold-300"
        >
          {muted ? <SpeakerOffIcon className="h-4 w-4" /> : <SpeakerOnIcon className="h-4 w-4" />}
        </button>
      </div>
      <p className="font-display px-4 py-3 text-xs font-semibold tracking-wide text-gold-300 uppercase">
        The Legend of Robbin Good 🏹
      </p>
    </div>
  );
}
