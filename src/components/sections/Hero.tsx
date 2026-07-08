import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
      <div className="mx-auto max-w-[80rem] px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
        {/* Content */}
        <div>
          <p className="eyebrow text-sm mb-5">Enterprise Mobile QA</p>
          <h1 className="font-bold tracking-tight text-[#0a2540] text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-6">
            Real Robots. Real Devices. Mission-Critical Coverage.
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-[36rem] mb-9">
            Mobot combines mechanical robots, physical devices, and human QA experts to give
            enterprise mobile teams reliable, 100% device coverage&mdash;without the manual overhead.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/schedule-demo"
              className="inline-flex items-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
            >
              Request a Demo
            </Link>
            <Link
              href="/#video"
              className="inline-flex items-center px-6 py-3 rounded-md border border-slate-300 text-[#0a2540] font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm"
            >
              Watch How It Works
            </Link>
          </div>
        </div>

        {/* Product video, framed */}
        <div className="rounded-lg border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.10)] overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-200 bg-slate-50">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <video
            className="w-full aspect-video object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/mobot-optimized-transcode.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
