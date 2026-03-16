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
    <div className="relative w-full max-w-lg">
      <video
        ref={videoRef}
        muted
        playsInline
        className="w-full mix-blend-multiply"
      >
        <source src="/images/hero-forklift-sq.mp4" type="video/mp4" />
      </video>
      {/* White gradient edges to mask vignette */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  );
}
