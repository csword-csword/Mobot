import Link from 'next/link';

export default function VideoSection() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[77rem]">
        <div className="text-center mb-12">
          <p className="eyebrow text-black/40 text-xs uppercase mb-5">How Mobot Works</p>
          <h2 className="text-5xl font-bold leading-tight max-w-[46rem] mx-auto">
            See How Our{' '}
            <span className="gradient-text">AI-Powered Mechanical Robots</span>
            {' '}Eliminate Bugs and Speed Up Releases
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-black/10 bg-black/[0.03] shadow-[0_20px_40px_rgba(10,10,10,0.12)]">
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
            className="inline-flex px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
          >
            Schedule a Demo →
          </Link>
        </div>
      </div>
    </section>
  );
}
