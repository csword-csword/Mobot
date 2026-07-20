import Link from 'next/link';

const steps = [
  {
    step: '01',
    title: 'Submit a Build',
    body: 'Point us at your app. Our team scopes the test cases that matter most.',
  },
  {
    step: '02',
    title: 'Tests Run on Real Devices',
    body: 'Robots execute your test suite on real hardware, in parallel, across the fleet.',
  },
  {
    step: '03',
    title: 'Verified Defects Delivered',
    body: 'A QA analyst verifies every failure before it reaches you—with video, logs, and reproduction steps.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[80rem]">
        <p className="eyebrow text-xs mb-4 text-center">How It Works</p>
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-[42rem] mx-auto mb-16 text-center text-[#0a2540]">
          From Build to Verified Defect
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.step} className="rounded-lg border border-slate-200 bg-white p-8">
              <div className="text-4xl font-bold text-[#1d4ed8]/40 mb-4">{s.step}</div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/how-it-works"
            className="inline-flex px-6 py-3 rounded-md border border-slate-300 text-[#0a2540] font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm"
          >
            See the Full Process
          </Link>
        </div>
      </div>
    </section>
  );
}
