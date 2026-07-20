import Link from 'next/link';

export const metadata = { title: 'Pricing' };

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
        <div className="mx-auto max-w-[56rem] px-6 py-20 lg:py-28 text-center">
          <p className="eyebrow text-sm mb-5">Pricing</p>
          <h1 className="font-bold tracking-tight text-[#0a2540] text-4xl sm:text-5xl leading-[1.1] mb-6">
            Start Where You Are
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-[38rem] mx-auto">
            Two ways to work with Mobot &mdash; prove the value with a defect report, then make it
            your QA backbone. Enterprise pricing is scoped to your device coverage and test volume.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[64rem] grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-slate-200 bg-white p-10 flex flex-col gap-4">
            <span className="eyebrow text-xs w-fit">Prove It</span>
            <h2 className="text-2xl font-bold text-[#0a2540]">Credits</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Buy testing actions, point us at your app, and see the defect report. Low-friction to
              start, procurement-friendly, and built to convert skeptics &mdash; the first report
              tends to sell the second.
            </p>
            <ul className="mt-2 space-y-3">
              {['Pay for testing actions as you use them', 'No long-term commitment to get started', 'The fastest path to a verified defect report'].map((b) => (
                <li key={b} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1d4ed8] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/schedule-demo"
              className="mt-auto inline-flex w-fit px-6 py-3 rounded-md border border-slate-300 text-[#0a2540] font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm"
            >
              Talk to Us
            </Link>
          </div>

          <div className="rounded-lg border-2 border-[#1d4ed8] bg-white p-10 flex flex-col gap-4 relative">
            <span className="absolute -top-3 left-8 text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md bg-[#1d4ed8] text-white">
              Where Teams Land
            </span>
            <span className="eyebrow text-xs w-fit">Make It Your Backbone</span>
            <h2 className="text-2xl font-bold text-[#0a2540]">Unlimited</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              A fixed fee for unlimited testing, built for teams shipping continuously. This is the
              plan for mobile organizations that have made Mobot part of every release.
            </p>
            <ul className="mt-2 space-y-3">
              {['Unlimited testing at a predictable fixed fee', 'Built for continuous release cadence', '5x24 always-on coverage across onshore and offshore operations'].map((b) => (
                <li key={b} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1d4ed8] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/schedule-demo"
              className="mt-auto inline-flex w-fit px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[48rem] text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2540] mb-4">
            The Real Comparison Isn&apos;t Plan A vs. Plan B
          </h2>
          <p className="text-slate-600 leading-relaxed">
            It&apos;s the cost of one escaped defect &mdash; a payment that fails on Face ID, a push
            that never arrives, a Bluetooth pairing that hangs &mdash; against the cost of a testing
            program that catches it first. High-signal QA gives engineering time back and keeps
            defects out of production, not just off your test dashboard.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <Link
          href="/schedule-demo"
          className="inline-flex items-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
        >
          Talk to Sales
        </Link>
      </section>
    </>
  );
}
