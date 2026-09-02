import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import CapabilityGrid from '@/components/ui/CapabilityGrid';
import AnatomyOfAnEscapedDefect from '@/components/AnatomyOfAnEscapedDefect';
import { solutions } from '@/data/solutions';

export const metadata = {
  title: 'Solutions',
  description: 'Every defect class emulators can’t see — push, Bluetooth, biometrics, camera, and release regression — tested on real devices by robots.',
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Every Defect Class Emulators Can't See"
        intro="Hardware-dependent scenarios are where user trust dies. Here's where Mobot catches what scripted automation and simulators structurally can't."
        primary={{ label: 'Request a Demo', href: '/schedule-demo' }}
        secondary={{ label: 'Get a Sample Report', href: '/resources/defect-reports' }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem] grid md:grid-cols-2 gap-5">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 90}>
              <Link
                href={`/solutions/${s.slug}`}
                className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-8 hover:border-[#1d4ed8]/50 hover:shadow-[0_8px_20px_rgba(29,78,216,0.12)] transition-all"
              >
                <span className="eyebrow text-xs !text-slate-400 mb-2">{s.short}</span>
                <h2 className="text-2xl font-bold text-[#0a2540] mb-3">{s.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{s.intro}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[#1d4ed8] font-semibold text-sm">
                  How Mobot tests it <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="section-alt border-y border-slate-200">
        <AnatomyOfAnEscapedDefect />
      </div>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="What we test"
            title="Mobot tests and validates the difficult scenarios with real mechanical robots"
            sub="If a person can do it on a phone, a robot can do it on 300 of them — and an analyst will tell you what actually broke."
            center
            className="mb-12"
          />
          <CapabilityGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
