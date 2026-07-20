import Link from 'next/link';
import PricingCreditsUnlimited from '@/components/PricingCreditsUnlimited';

export const metadata = { title: 'Pricing' };

export default function Page() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[56rem] px-6 py-32 lg:py-40 text-center">
          <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-5">Pricing</p>
          <h1 className="font-bold tracking-tight text-4xl sm:text-5xl leading-[1.1] mb-6">
            Start Where You Are
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-[38rem] mx-auto">
            Two ways to work with Mobot &mdash; prove the value with a defect report, then make it
            your QA backbone. Enterprise pricing is scoped to your device coverage and test volume.
          </p>
        </div>
      </section>

      <PricingCreditsUnlimited />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[64rem] grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10 flex flex-col gap-4
                          shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]">
            <span className="text-white/40 text-xs uppercase tracking-[0.15em]">Prove It</span>
            <h2 className="text-2xl font-bold">Credits</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Buy testing actions, point us at your app, and see the defect report. Low-friction to
              start, procurement-friendly, and built to convert skeptics &mdash; the first report
              tends to sell the second.
            </p>
            <ul className="mt-2 space-y-3">
              {['Pay for testing actions as you use them', 'No long-term commitment to get started', 'The fastest path to a verified defect report'].map((b) => (
                <li key={b} className="flex gap-3 text-white/70 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3da6fc] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/schedule-demo"
              className="mt-auto inline-flex w-fit px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-sm"
            >
              Talk to Us
            </Link>
          </div>

          <div className="rounded-2xl border border-[#3da6fc]/40 bg-white/5 p-10 flex flex-col gap-4 relative
                          shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]">
            <span className="absolute -top-3 left-8 text-xs uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#2f87c8] text-white">
              Where Teams Land
            </span>
            <span className="text-white/40 text-xs uppercase tracking-[0.15em]">Make It Your Backbone</span>
            <h2 className="text-2xl font-bold">Unlimited</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              A fixed fee for unlimited testing, built for teams shipping continuously. This is the
              plan for mobile organizations that have made Mobot part of every release.
            </p>
            <ul className="mt-2 space-y-3">
              {['Unlimited testing at a predictable fixed fee', 'Built for continuous release cadence', '5x24 always-on coverage across onshore and offshore operations'].map((b) => (
                <li key={b} className="flex gap-3 text-white/70 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3da6fc] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/schedule-demo"
              className="mt-auto inline-flex w-fit px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-y border-white/10">
        <div className="mx-auto max-w-[48rem] text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            The Real Comparison Isn&apos;t Plan A vs. Plan B
          </h2>
          <p className="text-white/60 leading-relaxed">
            It&apos;s the cost of one escaped defect &mdash; a payment that fails on Face ID, a push
            that never arrives, a Bluetooth pairing that hangs &mdash; against the cost of a testing
            program that catches it first. High-signal QA gives engineering time back and keeps
            defects out of production, not just off your test dashboard.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <Link
          href="/schedule-demo"
          className="inline-flex items-center px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
        >
          Talk to Sales
        </Link>
      </section>
    </>
  );
}
