import Link from 'next/link';

export default function VideoSection() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[77rem]">
        <div className="text-center mb-12">
          <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-5">How Mobot Works</p>
          <h2 className="text-5xl font-bold leading-tight max-w-[46rem] mx-auto">
            See How Our{' '}
            <span className="gradient-text">AI-Powered Mechanical Robots</span>
            {' '}Eliminate Bugs and Speed Up Releases
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_32px_48px_rgba(0,0,0,0.4)]">
          <video
            className="w-full aspect-video"
            controls
            muted
            loop
            playsInline
          >
            <source src="/videos/explainer.mp4" type="video/mp4" />
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
