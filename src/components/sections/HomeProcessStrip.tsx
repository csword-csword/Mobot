import Link from 'next/link';
import ProcessStrip from '@/components/sections/ProcessStrip';

const stops = [
  {
    time: '6:00 PM',
    title: 'Submit a Build',
    body: 'Point us at your app. Our team scopes the test cases that matter most.',
  },
  {
    time: 'Overnight',
    title: 'Robots Test on Real Devices',
    body: 'Robots execute your test suite on real hardware, in parallel, across the fleet.',
  },
  {
    time: '9:00 AM',
    title: 'Verified Defects by Morning',
    body: 'A QA analyst verifies every failure before it reaches you—with video, logs, and reproduction steps.',
  },
];

export default function HomeProcessStrip() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[77rem]">
        <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4 text-center">How It Works</p>
        <h2 className="text-5xl font-bold leading-tight max-w-[42rem] mx-auto mb-16 text-center">
          From Build to Verified Defect
        </h2>

        <ProcessStrip
          stops={stops}
          timelineLabels={['6:00 PM — Build Submitted', '9:00 AM — Defects Delivered']}
        />

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
