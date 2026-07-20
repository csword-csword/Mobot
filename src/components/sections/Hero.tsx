import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
      <div className="mx-auto max-w-[80rem] px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
        {/* Content */}
        <div>
          <p className="eyebrow text-sm mb-5">Physical Mobile Testing</p>
          <h1 className="font-bold tracking-tight text-[#0a2540] text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-6">
            Real Robots. Real Devices. Real Defects.
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-[36rem] mb-9">
            Mobot catches the bugs emulators can&apos;t see&mdash;and filters out the noise scripted
            automation creates. Every defect we report is real, verified by a QA analyst, on real
            hardware.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/resources/defect-reports"
              className="inline-flex items-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
            >
              Get a Sample Report
            </Link>
            <Link
              href="/schedule-demo"
              className="inline-flex items-center px-6 py-3 rounded-md border border-slate-300 text-[#0a2540] font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm"
            >
              Request a Demo
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
