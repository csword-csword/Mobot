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
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[77rem]">
        <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4 text-center">How It Works</p>
        <h2 className="text-5xl font-bold leading-tight max-w-[42rem] mx-auto mb-16 text-center">
          From Build to Verified Defect
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-white/10 bg-white/5 p-8
                         shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]"
            >
              <div className="text-4xl font-bold gradient-text opacity-60 mb-4">{s.step}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/how-it-works"
            className="inline-flex px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-sm"
          >
            See the Full Process
          </Link>
        </div>
      </div>
    </section>
  );
}
