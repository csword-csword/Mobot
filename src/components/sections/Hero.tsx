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
      <div className="relative z-10 max-w-[52rem] mx-auto px-6 text-center pt-36 pb-24">
        <h1 className="text-6xl font-bold leading-[1.05] mb-6 tracking-tight">
          <span className="gradient-text">Hire a Robot Fleet</span>
          {' '}for Manual Testing
        </h1>
        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-[36rem] mx-auto">
          Scale your mobile coverage with a new type of AI-enabled service that combines real
          mechanical robots, physical devices, and quality experts.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/schedule-demo"
            className="px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
          >
            Schedule a Demo →
          </Link>
          <Link
            href="/#use-cases"
            className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-sm"
          >
            Explore Use Cases →
          </Link>
        </div>
      </div>
    </section>
  );
}
