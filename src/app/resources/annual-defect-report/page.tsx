import Link from 'next/link';
import { BarChart3, Layers, Smartphone, Building2, FileText } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import LogoCloud from '@/components/ui/LogoCloud';
import ReportDownload from '@/components/ReportDownload';

export const metadata = {
  title: 'Mobot Annual Defect Report',
  description:
    'What real mobile bugs look like: defect categories, industry signatures, and platform patterns from a year of verified defects found by robots on real devices.',
};

const inside = [
  { icon: BarChart3, t: 'The five that find everyone', d: 'Broken navigation, missing or blank content, login and authentication failures, payment issues, and crashes account for 57% of every defect Mobot surfaced.' },
  { icon: Building2, t: 'Industry signatures', d: 'Every vertical has a signature bug type that runs 1.4× to 3.8× more common than the cross-industry baseline — Social/Dating notifications at 3.8×, Travel/Outdoor location at 3.7×.' },
  { icon: Layers, t: 'Deviation from baseline', d: 'Which categories over- or under-index for each industry, sorted by uplift multiple, so you know where to point coverage first.' },
  { icon: Smartphone, t: 'Platform patterns', d: 'Whether defect classes favor iOS or Android — and what it means for the device matrix you actually need.' },
];

export default function Page() {
  return (
    <>
      <PageHero
        dark
        bgImage="/images/lab/DSC_3353.webp"
        eyebrow="Annual Defect Report"
        badge="2026 edition · preview"
        title={
          <>
            What real mobile bugs <span className="gradient-text-dark">look like</span>
          </>
        }
        intro="A year of Mobot testing (Q3 2025 – Q2 2026) produced 6,372 unique defects across 83 mobile apps in 11 industries. Here's what the platform actually catches — and where the traps are hiding in your vertical."
        aside={<ReportDownload />}
      />

      <section className="bg-[#0a2540] border-b border-white/10">
        <div className="mx-auto max-w-[86rem] grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {[
            { v: '6,372', l: 'Real bugs caught', s: 'unique defects, 12-month window' },
            { v: '83', l: 'Mobile apps tested', s: 'venture-backed to public companies' },
            { v: '11', l: 'Industry verticals', s: 'from fintech to travel to social' },
            { v: '145K+', l: 'Automated test runs', s: 'covering 5.8M individual QA actions' },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 80} className="px-6 py-8 lg:px-10">
              <div className="text-3xl sm:text-4xl font-bold gradient-text-dark">{s.v}</div>
              <div className="text-white font-semibold text-sm mt-1">{s.l}</div>
              <div className="text-white/50 text-xs mt-0.5">{s.s}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading eyebrow="Inside the report" title="Where mobile apps actually break" center className="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {inside.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.t} delay={i * 80}>
                  <div className="h-full rounded-lg border border-slate-200 bg-white p-7 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
                    <span className={`w-10 h-10 rounded-md flex items-center justify-center text-white mb-5 ${i % 2 ? 'bg-[#6d3fe0]' : 'bg-[#1d4ed8]'}`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <h2 className="font-bold text-[#0a2540] text-lg mb-2">{c.t}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{c.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[64rem] grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <Reveal variant="left">
            <p className="eyebrow text-xs mb-3">Why this data is different</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a2540] mb-4">Every data point is a verified defect on a physical device</h2>
            <p className="text-slate-600 leading-relaxed">
              Most industry reports survey teams about the bugs they think they have. This one counts the
              bugs Mobot&apos;s robots actually found &mdash; on real iOS and Android hardware, in push,
              Bluetooth, biometrics, camera, and network flows &mdash; each reviewed by a QA analyst before it
              was counted.
            </p>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="rounded-lg border border-slate-200 bg-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-[#1d4ed8]" />
                <span className="font-bold text-[#0a2540]">Mobot Annual Defect Report</span>
                <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-[#efeafd] text-[#4f2bc2]">Preview</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                The report is a work in progress and will be updated as the full year of data is finalized.
                Download now and you&apos;ll receive the final edition when it ships.
              </p>
              <ReportDownload compact />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-[80rem]">
          <LogoCloud title="Data drawn from testing for teams like" />
          <p className="text-center mt-8 text-sm text-slate-500">
            Want your own app benchmarked against the report?{' '}
            <Link href="/schedule-demo" className="text-[#1d4ed8] font-semibold">Request a demo →</Link>
          </p>
        </div>
      </section>

      <CtaBand title="See what's breaking in your app" body="Get a verified defect report from Mobot's robots and QA analysts on your build, on real devices." />
    </>
  );
}
