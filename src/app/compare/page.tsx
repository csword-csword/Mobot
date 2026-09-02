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
        intro="There's no shortage of ways to test a mobile app. Most of them drive the app through software on a simulated or software-driven device. Here's an honest look at where each approach stops — and where Mobot starts."
        primary={{ label: 'Request a Demo', href: '/schedule-demo' }}
        secondary={{ label: 'Why Real Devices', href: '/why-real-devices' }}
      />

      {/* Competitor cards */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading eyebrow="Head to head" title="Pick your current stack" center className="mb-10" />
          <div className="grid md:grid-cols-3 gap-5">
            {competitorProfiles.map((p, i) => (
              <Reveal key={p.key} delay={i * 90}>
                <Link
                  href={`/compare/${p.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-8 hover:border-[#1d4ed8]/50 hover:shadow-[0_8px_20px_rgba(29,78,216,0.12)] transition-all"
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
            title="Five ways to test a mobile app. One touches the phone."
            sub="Emulators are cheap and wrong. Device farms rent you a phone and drive it through software. Scripts need engineers. Offshore manual needs headcount. Mobot is a service that puts a robot on real glass."
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
            sub="Credit where it's due: scripts are fast per run and device clouds are broad. Then look at the physical layer."
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
            Device clouds, no-code recorders, and crowdtesting share the same physical-layer gap: the
            app is driven through software, or by a person who can&apos;t run it 300 times overnight.{' '}
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
