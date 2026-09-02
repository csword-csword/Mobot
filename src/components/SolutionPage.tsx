import Link from 'next/link';
import { EyeOff, Bot, AlertOctagon, Users } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import FaqAccordion from '@/components/ui/FaqAccordion';
import ScenarioPath from '@/components/ScenarioPath';
import { capabilities } from '@/data/content';
import { solutions, type Solution } from '@/data/solutions';

export default function SolutionPage({ solution }: { solution: Solution }) {
  const related = capabilities.filter((c) => solution.capabilities.includes(c.name));
  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.headline}
        intro={solution.intro}
        primary={{ label: 'Get a Sample Report', href: '/resources/defect-reports' }}
        secondary={{ label: 'Request a Demo', href: '/schedule-demo' }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem]">
          <ScenarioPath title={solution.path.title} hops={solution.path.hops} />
        </div>
      </section>

      <section className="py-20 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem] grid md:grid-cols-2 gap-5">
          <Reveal variant="left">
            <div className="h-full rounded-lg border border-slate-200 bg-white p-8">
              <div className="w-10 h-10 rounded-md bg-red-50 text-red-600 flex items-center justify-center mb-5">
                <EyeOff className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#0a2540] mb-3">Why it escapes simulators and scripts</h2>
              <p className="text-slate-600 leading-relaxed text-sm">{solution.escapes}</p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="h-full rounded-lg border-2 border-[#1d4ed8] bg-white p-8 shadow-[0_8px_20px_rgba(29,78,216,0.12)]">
              <div className="w-10 h-10 rounded-md bg-[#1d4ed8] text-white flex items-center justify-center mb-5">
                <Bot className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#0a2540] mb-3">How Mobot catches it</h2>
              <p className="text-slate-600 leading-relaxed text-sm">{solution.catches}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[80rem] grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-md bg-red-50 text-red-600 flex items-center justify-center">
                <AlertOctagon className="w-4 h-4" />
              </span>
              <p className="eyebrow text-xs">What ships broken without it</p>
            </div>
            <ul className="space-y-3">
              {solution.broken.map((b) => (
                <li key={b} className="flex gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-md bg-[#e8f0fe] text-[#1d4ed8] flex items-center justify-center">
                <Users className="w-4 h-4" />
              </span>
              <p className="eyebrow text-xs">Who this matters most for</p>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">{solution.audience}</p>
            <p className="eyebrow text-xs mb-4">Related capabilities</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {related.map((c) => (
                <div key={c.name} className="rounded-md border border-slate-200 bg-white p-4">
                  <div className="font-bold text-[#0a2540] text-sm">{c.name}</div>
                  <div className="text-slate-500 text-xs leading-relaxed mt-1">{c.detail}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[56rem]">
          <SectionHeading eyebrow="FAQ" title={`${solution.title}: common questions`} center className="mb-10" />
          <FaqAccordion items={solution.faqs} />
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-[80rem]">
          <p className="eyebrow text-xs mb-4 text-center">More solutions</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {others.map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="group rounded-md border border-slate-200 bg-white p-4 hover:border-[#1d4ed8]/50 transition-colors">
                <div className="font-bold text-[#0a2540] text-sm group-hover:text-[#1d4ed8]">{s.title}</div>
                <div className="text-slate-500 text-xs mt-1">{s.short}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`See ${solution.title.toLowerCase()} tested on your app`} body="Get a verified defect report from Mobot's robots and QA analysts — on your build, on real devices." />
    </>
  );
}
