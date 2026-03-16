"use client";

export default function HeroVideo() {
  return (
    <div className="w-full max-w-2xl aspect-square">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-contain mix-blend-multiply"
      >
        <source src="/images/hero-forklift-sq-loop-sm.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
