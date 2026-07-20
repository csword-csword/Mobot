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
      <div className="mx-auto max-w-[77rem]">
        <p className="eyebrow text-black/40 text-xs uppercase mb-4 text-center">How It Works</p>
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-[42rem] mx-auto mb-16 text-center">
          From Build to Verified Defect
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-black/10 bg-black/[0.02] p-8">
              <div className="text-4xl font-bold text-blue-ink/30 mb-4">{s.step}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-black/60 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/how-it-works"
            className="inline-flex px-6 py-3 rounded-full border border-black/15 hover:bg-black/5 transition-colors text-sm font-medium"
          >
            See the Full Process
          </Link>
        </div>
      </div>
    </section>
  );
}
