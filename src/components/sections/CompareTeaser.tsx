import Link from 'next/link';
import { ArrowRight, Trophy, Wallet, Zap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { competitorProfiles } from '@/data/compare';

const pillars = [
  { icon: Trophy, t: 'Better', d: 'Real devices and real inputs instead of simulators. Every hardware path an emulator stubs is a path Mobot actually tests.' },
  { icon: Wallet, t: 'Cheaper', d: 'No scripts to build, no selectors to repair after every release, no flaky failures to triage. One program, one predictable cost.' },
  { icon: Zap, t: 'Faster', d: 'AI generates coverage from your build; computer vision executes it on the robot. New tests in hours, and they survive the refactor.' },
];

export default function CompareTeaser() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[80rem]">
        <SectionHeading
          eyebrow="Switching from scripted automation?"
          title="Better than Appium. Cheaper than maintaining it. Faster than writing it."
          sub="Scripted suites drive your app through software and break every time the UI moves. Mobot puts a robot on real glass and takes the scripts off your team."
          center
          className="mb-12"
        />
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.t} delay={i * 90}>
                <div className="h-full rounded-lg border border-slate-200 bg-white p-8 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
                  <div className="w-11 h-11 rounded-md bg-[#1d4ed8] text-white flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a2540] mb-2">{p.t}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {competitorProfiles.map((c) => (
              <Link
                key={c.key}
                href={`/compare/${c.slug}`}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-200 bg-white text-sm font-semibold text-[#0a2540] hover:border-[#1d4ed8]/50 hover:text-[#1d4ed8] transition-colors"
              >
                Mobot vs. {c.name}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
            <Link href="/compare" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#1d4ed8] hover:text-[#1e40af]">
              All comparisons →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
