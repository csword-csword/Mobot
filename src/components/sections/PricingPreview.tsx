import Link from 'next/link';

export default function PricingPreview() {
  return (
    <section className="py-24 px-6 border-y border-black/10 bg-black/[0.015]">
      <div className="mx-auto max-w-[77rem]">
        <div className="text-center mb-14">
          <p className="eyebrow text-black/40 text-xs uppercase mb-5">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-[42rem] mx-auto">
            Start Where You Are
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-[56rem] mx-auto">
          <div className="rounded-2xl border border-black/10 bg-white p-8">
            <span className="eyebrow text-black/40 text-xs uppercase">Prove It</span>
            <h3 className="text-xl font-bold mt-2 mb-2">Credits</h3>
            <p className="text-black/60 text-sm leading-relaxed">
              Buy testing actions, point us at your app, see the defect report. Low-friction to
              start.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-[#2f87c8] bg-white p-8">
            <span className="eyebrow text-black/40 text-xs uppercase">Make It Your Backbone</span>
            <h3 className="text-xl font-bold mt-2 mb-2">Unlimited</h3>
            <p className="text-black/60 text-sm leading-relaxed">
              Fixed fee, unlimited testing, built for teams shipping continuously.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="inline-flex px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
          >
            See Pricing Structure
          </Link>
        </div>
      </div>
    </section>
  );
}
