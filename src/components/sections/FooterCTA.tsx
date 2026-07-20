import Link from 'next/link';

export default function FooterCTA() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[80rem]">
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Main CTA */}
          <div className="lg:col-span-1 rounded-lg bg-[#0a2540] p-10 flex flex-col gap-6">
            <h3 className="text-2xl font-bold leading-snug text-white">
              See What Your Emulators Are Missing
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Get a real, verified defect report from Mobot&apos;s robots and QA analysts&mdash;on
              your app, on real devices.
            </p>
            <Link
              href="/resources/defect-reports"
              className="mt-auto inline-flex w-fit px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
            >
              Get a Sample Report
            </Link>
          </div>

          {/* Secondary panels */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            <div className="rounded-lg border border-slate-200 bg-white p-8 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-[#0a2540]">Explore Solutions</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                See where Mobot catches the defects that emulators and scripted automation
                structurally can&apos;t&mdash;push, Bluetooth, biometrics, camera, and release
                regression.
              </p>
              <Link
                href="/solutions"
                className="mt-auto text-[#1d4ed8] text-sm font-semibold hover:text-[#1e40af] transition-colors"
              >
                Explore Solutions →
              </Link>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-8 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-[#0a2540]">Explore Case Studies</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Learn how teams have reduced escaped defects, sped up releases, and gotten
                engineering hours back with Mobot.
              </p>
              <Link
                href="/resources/case-studies"
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
