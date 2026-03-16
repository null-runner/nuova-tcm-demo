interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: "video" | "square" | "wide" | "tall";
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  tall: "aspect-[3/4]",
};

export default function ImagePlaceholder({
  label,
  className = "",
  aspect = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 ${aspectClasses[aspect]} flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,166,35,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Label */}
      <div className="relative text-center px-6">
        <div className="w-12 h-12 mx-auto mb-3 rounded-full border-2 border-dashed border-navy-600 flex items-center justify-center">
          <svg className="w-6 h-6 text-navy-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>
        <p className="text-navy-400 text-sm font-medium">{label}</p>
        <p className="text-navy-600 text-xs mt-1">Foto da inserire</p>
      </div>
    </div>
  );
}
