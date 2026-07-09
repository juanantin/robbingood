"use client";

import { useRef, useState } from "react";
import { SpeakerOnIcon, SpeakerOffIcon } from "./icons";

export function VideoCard({
  webmSrc,
  mp4Src,
  poster,
  caption,
  className = "",
}: {
  webmSrc: string;
  mp4Src: string;
  poster: string;
  caption: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-gold-500/40 bg-forest-950/60 shadow-deep backdrop-blur ${className}`}
    >
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
        </video>
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-forest-950/80 text-parchment-100 transition-colors hover:text-gold-300"
        >
          {muted ? <SpeakerOffIcon className="h-4 w-4" /> : <SpeakerOnIcon className="h-4 w-4" />}
        </button>
      </div>
      <p className="font-display px-4 py-3 text-sm font-semibold tracking-wide text-gold-300 uppercase">{caption}</p>
    </div>
  );
}
