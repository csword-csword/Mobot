import Link from 'next/link';

export default function PricingPreview() {
  return (
    <section className="py-24 px-6 section-alt border-y border-slate-200">
      <div className="mx-auto max-w-[80rem]">
        <div className="text-center mb-14">
          <p className="eyebrow text-xs mb-5">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-[42rem] mx-auto text-[#0a2540]">
            Start Where You Are
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-[56rem] mx-auto">
          <div className="rounded-lg border border-slate-200 bg-white p-8">
            <span className="eyebrow text-xs">Prove It</span>
            <h3 className="text-xl font-bold text-[#0a2540] mt-2 mb-2">Credits</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Buy testing actions, point us at your app, see the defect report. Low-friction to
              start.
            </p>
          </div>
          <div className="rounded-lg border-2 border-[#1d4ed8] bg-white p-8">
            <span className="eyebrow text-xs">Make It Your Backbone</span>
            <h3 className="text-xl font-bold text-[#0a2540] mt-2 mb-2">Unlimited</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fixed fee, unlimited testing, built for teams shipping continuously.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="inline-flex px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
          >
            See Pricing Structure
          </Link>
        </div>
      </div>
    </section>
  );
}
