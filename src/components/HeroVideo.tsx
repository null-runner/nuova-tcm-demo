"use client";

import { useRef, useEffect } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      className="w-full max-w-lg mix-blend-multiply"
    >
      <source src="/images/hero-forklift.mp4" type="video/mp4" />
    </video>
  );
}
