import Link from 'next/link';

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
        <p className="hero-line hero-line-1 text-white/50 text-xs uppercase tracking-[0.2em] mb-6">Physical Mobile Testing</p>
        <h1 className="font-bold tracking-tight mb-10 flex flex-col gap-4">
          <span className="hero-line hero-line-2 block text-7xl sm:text-8xl lg:text-9xl leading-none">REAL ROBOTS</span>
          <span className="hero-line hero-line-3 block text-7xl sm:text-8xl lg:text-9xl leading-none">REAL DEVICES</span>
          <span className="hero-line hero-line-4 block text-4xl sm:text-5xl lg:text-6xl leading-none gradient-text">REAL DEFECTS</span>
        </h1>
        <p className="hero-line hero-line-5 max-w-[36rem] mx-auto text-white/60 text-lg leading-relaxed mb-10">
          Mobot catches the bugs emulators can&apos;t see&mdash;and filters out the noise scripted
          automation creates. Every defect we report is real, verified by a QA analyst.
        </p>
        <div className="hero-line hero-line-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/resources/defect-reports"
            className="inline-block px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
          >
            Get a Sample Report →
          </Link>
          <Link
            href="/schedule-demo"
            className="inline-block px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-sm"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
