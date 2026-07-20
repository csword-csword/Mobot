import Link from 'next/link';

export default function LabsBand() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[77rem]">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-16 sm:px-16 text-center
                        shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]">
          <span className="inline-block text-xs uppercase tracking-[0.15em] px-2.5 py-1 rounded-full bg-white/10 text-white/70 mb-6">
            Mobot Labs &middot; Early access begins 2027
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-[36rem] mx-auto mb-4">
            <span className="gradient-text">Own Your Robotic Testing Lab</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-[34rem] mx-auto mb-8">
            Start today on Mobot Managed. Migrate to your own robotic lab&mdash;Mobot robots, Mobot
            platform, your team&mdash;when Labs ships.
          </p>
          <Link
            href="/labs"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
          >
            Apply for Early Access
          </Link>
        </div>
      </div>
    </section>
  );
}
