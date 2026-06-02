export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/mobot-optimized-transcode.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/30 to-[#050505]" />

      {/* Content */}
      <div className="relative z-10 max-w-[64rem] mx-auto px-6 text-center pt-36 pb-24">
        <h1 className="font-bold tracking-tight mb-10 flex flex-col gap-4">
          <span className="block text-7xl sm:text-8xl lg:text-9xl leading-none">REAL ROBOTS</span>
          <span className="block text-7xl sm:text-8xl lg:text-9xl leading-none">REAL DEVICES</span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl leading-none gradient-text">MISSION CRITICAL USE CASES</span>
        </h1>
      </div>
    </section>
  );
}
