import Link from 'next/link';
import HowItWorksStack from '@/components/HowItWorksStack';
import ProcessStrip from '@/components/sections/ProcessStrip';

export const metadata = { title: 'How It Works' };

const process = [
  {
    time: 'Submit',
    title: 'Submit a build',
    body: 'Point us at your app. Our team scopes the test cases that matter most — starting with the hardware-dependent flows emulators can\'t reach.',
  },
  {
    time: 'Test',
    title: 'Robots run the tests',
    body: 'Real robots execute real taps, swipes, and gestures on real devices — pairing real peripherals, scanning real barcodes, receiving real push notifications.',
  },
  {
    time: 'Verify & Deliver',
    title: 'Analysts verify every result',
    body: 'Every failure is triaged by a Mobot QA analyst before it reaches you. What you get is a real, reproducible defect — with video, logs, and reproduction steps, ready to hand straight to an engineer.',
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
        <div className="mx-auto max-w-[64rem] px-6 py-20 lg:py-28">
          <p className="eyebrow text-sm mb-5">How It Works</p>
          <h1 className="font-bold tracking-tight text-[#0a2540] text-4xl sm:text-5xl leading-[1.1] mb-6">
            Robots, Real Devices, Expert Analysts, and a Platform to Run It All
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-[40rem]">
            Mobot isn&apos;t a device farm and it isn&apos;t a body shop with robots attached &mdash;
            it&apos;s a platform that makes physical, expert-verified testing repeatable, fast, and
            consistent at scale.
          </p>
        </div>
      </section>

      <HowItWorksStack />

      <section id="robots" className="py-20 px-6">
        <div className="mx-auto max-w-[64rem] grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-xs mb-4">The Robots</p>
            <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Physical actuation, not simulated input</h2>
            <p className="text-slate-600 leading-relaxed">
              Mobot&apos;s robots physically tap glass, present real barcodes to a real camera, and
              pair with real Bluetooth peripherals. This is not software-injected touch events or
              mocked sensor data &mdash; the inputs are as real as the hardware under test.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-[0_8px_20px_rgba(15,23,42,0.10)]">
            <video className="w-full aspect-video object-cover" autoPlay muted loop playsInline>
              <source src="/videos/mobot-optimized-transcode.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section id="platform" className="py-20 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[64rem]">
          <p className="eyebrow text-xs mb-4">The Platform</p>
          <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Built for repeatability, not one-off runs</h2>
          <p className="text-slate-600 leading-relaxed max-w-[40rem]">
            Mobot&apos;s software authors test cases, executes massively in parallel across the robot
            fleet, and delivers deep defect forensics on every run. It&apos;s what makes the service
            consistent from one release to the next &mdash; and it&apos;s the foundation of Mobot Labs.
          </p>
        </div>
      </section>

      <section id="team" className="py-20 px-6">
        <div className="mx-auto max-w-[64rem]">
          <p className="eyebrow text-xs mb-4">The Team</p>
          <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Every result, verified by a human</h2>
          <p className="text-slate-600 leading-relaxed max-w-[40rem]">
            Mobot&apos;s QA analysts triage and verify every defect before it reaches your team. The
            noise never makes it to your backlog &mdash; what you see is a real, reproducible issue,
            with forensic evidence attached.
          </p>
        </div>
      </section>

      <section id="process" className="py-20 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[64rem]">
          <p className="eyebrow text-xs mb-4 text-center">The Process</p>
          <h2 className="text-3xl font-bold text-[#0a2540] mb-12 text-center">From Build to Verified Defect</h2>
          <ProcessStrip
            stops={process}
            timelineLabels={['End of Day — Build Submitted', 'Morning — Defects Delivered']}
          />
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <Link
          href="/resources/defect-reports"
          className="inline-flex items-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
        >
          Get a Sample Report
        </Link>
      </section>
    </>
  );
}
