import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import LogoCloud from '@/components/ui/LogoCloud';
import ApproachMatrix from '@/components/compare/ApproachMatrix';
import FeatureMatrix from '@/components/compare/FeatureMatrix';
import TestDebtChart from '@/components/compare/TestDebtChart';
import ScriptCostCalculator from '@/components/compare/ScriptCostCalculator';
import CvAuthoringVisual from '@/components/compare/CvAuthoringVisual';
import { competitorProfiles } from '@/data/compare';

export const metadata = {
  title: 'How Mobot Stacks Up',
  description:
    'Mobot vs. Appium, Maestro, QA Wolf, emulators, device farms, and offshore manual testing — feature by feature, cost by cost.',
};

const legacy = ['Kobiton', 'Waldo', 'Rainforest QA', 'Sauce Labs', 'Testlio', 'BrowserStack', 'Detox', 'XCUITest'];

export default function Page() {
  return (
    <>
      <PageHero
        center
        eyebrow="Compare"
        title="How Mobot Stacks Up"
        intro="Plenty of tools will run your mobile app. The question worth asking is what they run it on, and how much of the device is real when they do — because that is where the differences actually live. Here is an honest read on each approach, including the parts where they beat us."
        primary={{ label: 'Request a Demo', href: '/schedule-demo' }}
        secondary={{ label: 'Why Real Devices', href: '/why-real-devices' }}
      />

      {/* The question that separates them */}
      <section className="py-20 px-6 border-b border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="How to read this"
            title="Four questions that separate mobile testing tools"
            sub="Most comparison tables argue about features. These are the questions that determine which defects a tool can find at all."
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { q: 'Is it a real phone?', d: 'Emulators and simulators are models of a device. Some vendors run real hardware for one platform and emulate the other.' },
              { q: 'Is it your real build?', d: 'Some approaches re-sign or instrument your binary to control it. What ships is then not quite what was tested.' },
              { q: 'Are the inputs real?', d: 'A mocked camera feed proves your handler works. A real lens proves the capture does.' },
              { q: 'Who decides a failure is a bug?', d: 'A red build is not a defect until someone reproduces it. If that someone is your engineer, that is a cost.' },
            ].map((c, i) => (
              <Reveal key={c.q} delay={i * 80}>
                <div className="h-full rounded-lg border border-slate-200 bg-white p-6">
                  <div className="text-[11px] font-bold text-[#1d4ed8] mb-2">0{i + 1}</div>
                  <h3 className="font-bold text-[#0a2540] mb-2 leading-snug">{c.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor cards */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading eyebrow="Head to head" title="Pick your current stack" center className="mb-10" />
          <div className="grid md:grid-cols-3 gap-5">
            {competitorProfiles.map((p, i) => (
              <Reveal key={p.key} delay={i * 90}>
                <Link
                  href={`/compare/${p.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-8 card-lift"
                >
                  <span className="eyebrow text-xs !text-slate-400 mb-2">{p.category}</span>
                  <h2 className="text-2xl font-bold text-[#0a2540] mb-3">Mobot vs. {p.name}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{p.what}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[#1d4ed8] font-semibold text-sm">
                    Read the comparison <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach matrix */}
      <section className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="The landscape"
            title={<>Five ways to test a mobile app. <span className="gradient-text">One touches the phone.</span></>}
            sub="Emulators are cheap and blind to hardware. Device farms rent you a real phone but drive it through software. Scripted frameworks need engineers to keep them alive. Offshore manual needs headcount and can't run overnight. Mobot is a managed service that puts a robot on real glass."
            center
            className="mb-12"
          />
          <ApproachMatrix />
        </div>
      </section>

      {/* Feature matrix */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="Feature by feature"
            title="Mobot vs. Appium, Maestro, and QA Wolf"
            sub="Credit where it's due: scripts run fast, device clouds are broad, and a managed service takes real work off your plate. Then look at the physical layer."
            center
            className="mb-12"
          />
          <FeatureMatrix />
        </div>
      </section>

      {/* Faster */}
      <section className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="Faster"
            title="Superior test authoring, aided by computer vision"
            sub="AI explores your build and generates the tests. Robots execute them by reading the screen, not a selector. New coverage lands in hours and survives the refactor."
            center
            className="mb-12"
          />
          <CvAuthoringVisual />
        </div>
      </section>

      {/* Cheaper */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="Cheaper"
            title="Your test automation creates costly test debt"
            sub="Scripted suites are free to start and expensive to keep alive — and the bill scales with how fast you ship. At AI-assisted release velocity, maintenance is the whole cost."
            center
            className="mb-12"
          />
          <TestDebtChart />
          <div className="mt-8">
            <ScriptCostCalculator />
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="py-16 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[64rem] text-center">
          <p className="eyebrow text-xs mb-3 !text-slate-400">Also evaluating</p>
          <p className="text-slate-600 leading-relaxed">
            <span className="font-semibold text-[#0a2540]">{legacy.join(' · ')}</span>
            <br />
            Device clouds, no-code recorders, managed QA services, and crowdtesting land in different
            places on the four questions above — but they share a physical-layer gap: the app is driven
            through software, or by a person who can&apos;t run it 300 times overnight.{' '}
            <Link href="/schedule-demo" className="text-[#1d4ed8] font-semibold">Ask us for a side-by-side on your stack →</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-[80rem]">
          <LogoCloud title="Mobile teams that made the switch" />
        </div>
      </section>

      <CtaBand
        title="See the difference on your own app"
        body="Get a verified defect report from Mobot's robots and QA analysts on your build — and compare it to what your current stack found."
      />
    </>
  );
}
