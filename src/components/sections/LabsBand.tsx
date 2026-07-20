import Link from 'next/link';

export default function LabsBand() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[80rem]">
        <div className="rounded-lg bg-[#0a2540] px-8 py-16 sm:px-16 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md bg-white/10 text-white/80 mb-6">
            Mobot Labs &middot; Early access begins 2027
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-[36rem] mx-auto mb-4">
            Own Your Robotic Testing Lab
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-[34rem] mx-auto mb-8">
            Start today on Mobot Managed. Migrate to your own robotic lab&mdash;Mobot robots, Mobot
            platform, your team&mdash;when Labs ships.
          </p>
          <Link
            href="/labs"
            className="inline-flex items-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
          >
            Apply for Early Access
          </Link>
        </div>
      </div>
    </section>
  );
}
