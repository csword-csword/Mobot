import Link from 'next/link';
import { CheckCircle2, AlertTriangle, Zap, Wallet, Trophy } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import FaqAccordion from '@/components/ui/FaqAccordion';
import LogoCloud from '@/components/ui/LogoCloud';
import FeatureMatrix from '@/components/compare/FeatureMatrix';
import TestDebtChart from '@/components/compare/TestDebtChart';
import ScriptCostCalculator from '@/components/compare/ScriptCostCalculator';
import CvAuthoringVisual from '@/components/compare/CvAuthoringVisual';
import type { CompetitorProfile } from '@/data/compare';

const pillarIcons = [Trophy, Wallet, Zap];

export default function ComparePage({ profile }: { profile: CompetitorProfile }) {
  return (
    <>
      <PageHero
        eyebrow={`Mobot vs. ${profile.name}`}
        badge={profile.category}
        title={profile.headline}
        intro={profile.intro}
        primary={{ label: 'Request a Demo', href: '/schedule-demo' }}
        secondary={{ label: 'Get a Sample Report', href: '/resources/defect-reports' }}
      />

      {/* What is */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem] grid md:grid-cols-2 gap-5">
          <Reveal variant="left">
            <div className="h-full rounded-lg border border-slate-200 bg-white p-8">
              <p className="eyebrow text-xs mb-3 !text-slate-400">What is {profile.name}?</p>
              <h2 className="text-2xl font-bold text-[#0a2540] mb-3">{profile.name}</h2>
              <p className="text-slate-600 leading-relaxed">{profile.what}</p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="h-full rounded-lg border-2 border-[#1d4ed8] bg-white p-8 shadow-[0_8px_20px_rgba(29,78,216,0.12)]">
              <p className="eyebrow text-xs mb-3">What is Mobot?</p>
              <h2 className="text-2xl font-bold text-[#0a2540] mb-3">Mobot</h2>
              <p className="text-slate-600 leading-relaxed">
                Human-supervised mechanical robots that automate mobile app testing on 300+ real
                iOS and Android devices. AI-assisted authoring generates the tests, computer vision
                drives the robots, and QA analysts verify every failure before it reaches you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Honest strengths + limitations */}
      <section className="py-20 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem] grid lg:grid-cols-[1fr_1.4fr] gap-10">
          <Reveal>
            <p className="eyebrow text-xs mb-3 !text-slate-400">Credit where it&apos;s due</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2540] mb-4">Where {profile.name} is strong</h2>
            <ul className="space-y-3">
              {profile.strengths.map((s) => (
                <li key={s} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-xs mb-3">Where it stops</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2540] mb-6">The ceiling every scripted approach shares</h2>
            </Reveal>
            <div className="grid gap-4">
              {profile.limitations.map((l, i) => (
                <Reveal key={l.title} delay={i * 90}>
                  <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-6">
                    <span className="w-9 h-9 rounded-md bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="font-bold text-[#0a2540] mb-1">{l.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{l.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="Why teams switch"
            title={<>Better. Cheaper. Faster.</>}
            sub="Real devices instead of simulators. No scripts to build or maintain. Computer-vision authoring that lands coverage in hours."
            center
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {profile.pillars.map((p, i) => {
              const Icon = pillarIcons[i] ?? Trophy;
              return (
                <Reveal key={p.title} delay={i * 100}>
                  <div className="h-full rounded-lg border border-slate-200 bg-white p-8 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
                    <div className="w-11 h-11 rounded-md bg-[#1d4ed8] text-white flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#0a2540] text-lg mb-2">{p.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Matrix */}
      <section className="py-20 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading eyebrow="Feature by feature" title={`Mobot vs. ${profile.name}`} center className="mb-10" />
          <FeatureMatrix columns={['mobot', profile.key]} />
        </div>
      </section>

      {/* Faster */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="Faster"
            title="Computer vision doesn't have selectors to break"
            sub="Scripted frameworks describe the UI. Mobot's AI Driver looks at it. When the design changes, the script fails and the robot keeps going."
            center
            className="mb-12"
          />
          <CvAuthoringVisual />
        </div>
      </section>

      {/* Cheaper */}
      <section className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="Cheaper"
            title="Free to download. Expensive to keep green."
            sub="At AI-assisted release cadence, the cost of a scripted suite is dominated by maintenance — engineering hours spent repairing tests that found no defect. Model it with your own numbers."
            center
            className="mb-12"
          />
          <TestDebtChart />
          <div className="mt-8">
            <ScriptCostCalculator />
          </div>
        </div>
      </section>

      {/* Together */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-[64rem]">
          <Reveal>
            <div className="rounded-lg bg-[#0a2540] p-10 sm:p-14">
              <p className="eyebrow text-xs mb-3 !text-[#86b6ef]">Better together</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
                You don&apos;t have to rip anything out
              </h2>
              <p className="text-white/70 leading-relaxed">{profile.together}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/schedule-demo" className="inline-flex px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm">
                  Request a Demo
                </Link>
                <Link href="/why-real-devices" className="inline-flex px-6 py-3 rounded-md border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors text-sm">
                  Why Real Devices
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <LogoCloud title="Mobile teams that made the switch" />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[56rem]">
          <SectionHeading eyebrow="FAQ" title={`Switching from ${profile.name}`} center className="mb-10" />
          <FaqAccordion items={profile.faqs} />
        </div>
      </section>

      <CtaBand
        title={`See what ${profile.name} is missing on your app`}
        body="Get a verified defect report from Mobot's robots and QA analysts — on your build, on real devices, with no scripts to write."
      />
    </>
  );
}
