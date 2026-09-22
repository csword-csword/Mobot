import Link from 'next/link';

export default function FooterCTA() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[80rem]">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-1 rounded-lg bg-[#0a2540] p-10 flex flex-col gap-6">
            <h3 className="text-2xl font-bold leading-snug text-white">
              See What Your Emulators Are Missing
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Get a real, verified defect report from Mobot&apos;s robots and QA analysts&mdash;on
              your app, on real devices.
            </p>
            <Link
              href="/schedule-demo"
              className="mt-auto inline-flex w-fit px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
            >
              Request a Demo
            </Link>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            <div className="rounded-lg border border-[#6d3fe0]/30 bg-[#efeafd]/40 p-8 flex flex-col gap-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#4f2bc2]">Lead magnet</p>
              <h3 className="text-xl font-bold text-[#0a2540]">Annual Defect Report 2026</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                6,372 real bugs across 83 apps and 11 industries. See what actually breaks in your
                vertical — free, gated with a work email.
              </p>
              <Link
                href="/resources/annual-defect-report"
                className="mt-auto text-[#1d4ed8] text-sm font-semibold hover:text-[#1e40af] transition-colors"
              >
                Download the report →
              </Link>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-8 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-[#0a2540]">Explore Case Studies</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Learn how teams have reduced escaped defects, sped up releases, and gotten
                engineering hours back with Mobot.
              </p>
              <Link
                href="/customers"
                className="mt-auto text-[#1d4ed8] text-sm font-semibold hover:text-[#1e40af] transition-colors"
              >
                Explore Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
