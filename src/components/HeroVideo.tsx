"use client";

import { useRef, useEffect, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => {
      setReady(true);
      video.play().catch(() => {});
    };

    if (video.readyState >= 3) {
      onCanPlay();
    } else {
      video.addEventListener("canplay", onCanPlay, { once: true });
      return () => video.removeEventListener("canplay", onCanPlay);
    }
  }, []);

  return (
    <div className="w-full max-w-2xl aspect-square">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className={`w-full h-full object-contain mix-blend-multiply transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/images/hero-forklift-sq-loop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
