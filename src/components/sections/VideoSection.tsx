import Link from 'next/link';

export default function VideoSection() {
  return (
    <section id="video" className="py-28 px-6 section-alt border-y border-slate-200">
      <div className="mx-auto max-w-[80rem]">
        <div className="text-center mb-12">
          <p className="eyebrow text-xs mb-5">How Mobot Works</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-[46rem] mx-auto text-[#0a2540]">
            See How Our AI-Powered Mechanical Robots Eliminate Bugs and Speed Up Releases
          </h2>
        </div>

        <div className="rounded-lg overflow-hidden border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.10)]">
          <video
            className="w-full aspect-video"
            controls
            muted
            loop
            playsInline
          >
            <source src="/videos/mobot-optimized-transcode.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/schedule-demo"
            className="inline-flex px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
