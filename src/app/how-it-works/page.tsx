import Link from 'next/link';
import { Video, Upload, Wand2, Bot, ClipboardCheck, Rocket } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import PlatformStack from '@/components/PlatformStack';
import ProcessStrip from '@/components/sections/ProcessStrip';
import SampleDefectReport from '@/components/SampleDefectReport';

export const metadata = {
  title: 'How It Works',
  description: 'Robots, real devices, expert analysts, and a platform to run it all — from build to verified defect.',
};

const process = [
  {
    time: 'Submit',
    title: 'Submit a build',
    body: 'Point us at your app. AI-assisted authoring explores the build and proposes the test cases that matter most — starting with the hardware-dependent flows emulators can\'t reach.',
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

const steps = [
  { icon: Video, title: 'Show us the flow', body: 'Record a quick video, share a test plan, or just share the build. AI-assisted authoring does the rest.' },
  { icon: Upload, title: 'Choose devices & OS', body: 'Pick the iOS and Android devices and versions that match your users. Change them any time.' },
  { icon: Wand2, title: 'Mobot builds the tests', body: 'Scripts are generated, validated, and optimized for coverage and stability — no code on your side.' },
  { icon: Bot, title: 'Robots test overnight', body: 'The fleet executes in parallel on real devices. Every step is captured: screenshots, video, device and network logs.' },
  { icon: ClipboardCheck, title: 'Analysts verify results', body: 'Side-by-side baseline vs. actual, pass/fail flags, and analyst notes. Noise never reaches your backlog.' },
  { icon: Rocket, title: 'Fix and release with confidence', body: 'Verified defects land in Slack, Jira, or TestRail with everything an engineer needs to reproduce and fix.' },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="Robots, Real Devices, Expert Analysts, and a Platform to Run It All"
        intro="Mobot isn't a device farm and it isn't a body shop with robots attached — it's a platform that makes physical, expert-verified testing repeatable, fast, and consistent at scale."
        primary={{ label: 'Request a Demo', href: '/schedule-demo' }}
        secondary={{ label: 'Explore the Platform', href: '/platform' }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem]">
          <PlatformStack />
        </div>
      </section>

      <section id="robots" className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem] grid md:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <p className="eyebrow text-xs mb-4">The Robots</p>
            <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Physical actuation, not simulated input</h2>
            <p className="text-slate-600 leading-relaxed">
              Mobot&apos;s robots physically tap glass, present real barcodes to a real camera, and
              pair with real Bluetooth peripherals. This is not software-injected touch events or
              mocked sensor data &mdash; the inputs are as real as the hardware under test.
            </p>
            <Link href="/why-real-devices" className="inline-block mt-6 text-[#1d4ed8] font-semibold hover:text-[#1e40af] transition-colors">
              Why real devices matter →
            </Link>
          </Reveal>
          <Reveal variant="right">
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-[0_8px_20px_rgba(15,23,42,0.10)]">
              <video className="w-full aspect-video object-cover" autoPlay muted loop playsInline>
                <source src="/videos/mobot-optimized-transcode.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="platform" className="py-24 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="From build to verified defect"
            title="Six steps. Zero scripts on your side."
            sub="With Mobot, robots are testing your app within 24–48 hours of kickoff."
            center
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="h-full rounded-lg border border-slate-200 bg-white p-7 shadow-[0_1px_3px_rgba(15,23,42,0.08)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.10)] transition-shadow">
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-10 h-10 rounded-md bg-[#e8f0fe] text-[#1d4ed8] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-3xl font-bold text-[#1d4ed8]/25">0{i + 1}</span>
                    </div>
                    <h3 className="font-bold text-[#0a2540] text-lg mb-2">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="team" className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem] grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <p className="eyebrow text-xs mb-4">The Team</p>
            <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Every result, verified by a human</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Mobot&apos;s QA analysts triage and verify every defect before it reaches your team. The
              noise never makes it to your backlog &mdash; what you see is a real, reproducible issue,
              with forensic evidence attached.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Onshore and offshore operations deliver 5&times;24 coverage. Submit a build at end of
              day and verified results are waiting by morning.
            </p>
          </Reveal>
          <SampleDefectReport />
        </div>
      </section>

      <section id="process" className="py-24 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading eyebrow="The Process" title="From Build to Verified Defect" center className="mb-12" />
          <ProcessStrip stops={process} timelineLabels={['End of Day — Build Submitted', 'Morning — Defects Delivered']} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
