import Link from 'next/link';
import {
  Infinity as InfinityIcon, Smartphone, BadgeDollarSign, Clock, LayoutGrid, Gauge, Repeat, UserCog,
  Users, Mic, FlaskConical, CircleDollarSign, CheckCircle2, Star,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import ScriptCostCalculator from '@/components/compare/ScriptCostCalculator';

export const metadata = {
  title: 'Mobot Unlimited — Unlimited Mobile Testing. One Flat Rate.',
  description:
    'Mobot Unlimited gives your team an always-on robot fleet — run as many tests as you need across 300+ real devices, with no per-test fees and no test-suite caps.',
};

const stats = [
  { icon: InfinityIcon, value: 'Unlimited', label: 'Test runs every month' },
  { icon: Smartphone, value: '300+', label: 'Real iOS & Android devices' },
  { icon: BadgeDollarSign, value: 'Flat', label: 'Predictable annual rate' },
  { icon: Clock, value: 'Same-day', label: 'Expert-reviewed reports' },
];

const included = [
  { icon: LayoutGrid, t: 'Unlimited applications', d: 'Cover every app and brand in your portfolio under one plan.' },
  { icon: Gauge, t: 'No credit-based metering', d: 'Unlike our standard model, runs are never deducted from a credit balance.' },
  { icon: Repeat, t: 'High-frequency regression', d: 'Run as often as you like on the latest devices and OS releases.' },
  { icon: UserCog, t: 'Dedicated Technical Account Manager', d: 'A named TAM owns your suite, strategy, and verified results.' },
  { icon: Users, t: 'Customer Advisory Board seat', d: 'Help shape the platform roadmap with quarterly input.' },
  { icon: Mic, t: 'Conference speaking slot', d: 'A speaking opportunity at the 2027 Mobot User Conference.' },
  { icon: FlaskConical, t: 'Mobot Labs early access', d: 'First in line for the on-prem lab and certification program. Q1 2027.', badge: 'Q1 2027' },
  { icon: CircleDollarSign, t: 'One predictable rate', d: 'A single flat annual fee — forecast QA spend with no overages.' },
];

const programs = [
  {
    eyebrow: 'Customer Advisory Board',
    icon: Users,
    title: 'Mobot Customer Advisory Board',
    body: 'A traditional CAB model: a select group of Unlimited customers meets quarterly with Mobot’s product leadership to provide feedback and guidance on the platform roadmap — directly influencing what we build next.',
    facts: ['Meets quarterly', 'Roadmap influence', 'By invitation'],
  },
  {
    eyebrow: 'New program',
    icon: FlaskConical,
    title: 'Mobot Labs',
    badge: 'Launching Q1 2027',
    body: 'A new service that lets customers build an on-premises Mobot Lab — your own robot fleet on-site — paired with a training and certification program so your employees can manage and run the robots for their own testing. Unlimited members get early access.',
    facts: ['On-prem robot lab', 'Training & certification', 'Early access included'],
    href: '/labs',
  },
  {
    eyebrow: '2027 event',
    icon: Mic,
    title: 'Mobot Annual User Conference 2027',
    badge: 'May 2027',
    body: 'Our first-ever in-person annual user conference, held in New York City in May 2027. Unlimited members receive a guaranteed speaking opportunity to share their testing story on the main stage.',
    facts: ['New York City', 'May 2027', 'Member speaking slot'],
  },
];

const trusted = ['Rappi', 'Citizen', 'Persona', 'Sandboxx', 'Step', 'KOHO'];

export default function Page() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Introducing Mobot Unlimited"
        badge="Flagship plan"
        title={
          <>
            Unlimited Mobile Testing.
            <br />
            One flat rate.
          </>
        }
        intro="Mobot Unlimited gives your team an always-on robot fleet — run as many tests as you need across 300+ real devices, with no per-test fees and no test-suite caps."
        primary={{ label: 'Request an Invitation', href: '/schedule-demo' }}
        secondary={{ label: 'Compare Plans', href: '/pricing' }}
      />

      {/* Stats band */}
      <section className="bg-[#0a2540] border-b border-white/10">
        <div className="mx-auto max-w-[86rem] grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 80} className="px-6 py-8 lg:px-10">
                <Icon className="w-5 h-5 text-[#86b6ef] mb-3" />
                <div className="text-3xl sm:text-4xl font-bold text-white">{s.value}</div>
                <div className="text-white/55 text-sm mt-1">{s.label}</div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Why + included */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-[86rem] grid lg:grid-cols-[1.6fr_1fr] gap-12">
          <div>
            <Reveal>
              <p className="eyebrow text-xs mb-3">Why Unlimited</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] leading-tight mb-4">
                Test as much as you ship &mdash; without watching the meter
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-[42rem]">
                Per-test pricing forces teams to ration coverage right when they need it most: big
                releases, holiday peaks, new device launches. Mobot Unlimited removes the ceiling
                &mdash; run every regression, every release candidate, every edge case across the full
                fleet for one predictable rate.
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <p className="eyebrow text-xs mb-3">What&apos;s included</p>
              <h3 className="text-2xl font-bold text-[#0a2540] mb-6">Everything in Mobot, with no limits.</h3>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.t} delay={(i % 4) * 70}>
                    <div className="h-full flex gap-4 rounded-lg border border-slate-200 bg-white p-5">
                      <span className="w-10 h-10 rounded-md bg-[#e8f0fe] text-[#1d4ed8] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 font-bold text-[#0a2540] text-sm">
                          {item.t}
                          {item.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-[#e8f0fe] text-[#1d4ed8]">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed mt-1">{item.d}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="mt-8 rounded-md border-l-4 border-[#1d4ed8] bg-[#e8f0fe] p-5">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1d4ed8] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0a2540] text-sm">Not a credit-based system</div>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1">
                    Mobot Unlimited replaces per-run credits with all-you-can-test access &mdash; so
                    coverage decisions are driven by your release needs, never a balance.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal className="mt-4 rounded-md border-l-4 border-[#b8860b] bg-amber-50 p-5">
              <div className="flex gap-3">
                <Star className="w-5 h-5 text-[#b8860b] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0a2540] text-sm">By invitation &mdash; a limited cohort</div>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1">
                    Mobot Unlimited is offered to only a small, select group of Mobot clients.
                    Membership and program seats are capped to keep the partnership high-touch.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right rail */}
          <aside className="space-y-5">
            <Reveal delay={100}>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <p className="eyebrow text-xs mb-4">Trusted by mobile teams</p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-slate-500">
                  {trusted.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-lg bg-[#0a2540] p-8 text-white">
                <div className="text-5xl font-bold text-[#86b6ef]">3.4&times;</div>
                <p className="text-white/70 text-sm leading-relaxed mt-3">
                  More test runs per release on average after teams move to an Unlimited plan &mdash;
                  with no added cost.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="rounded-lg border border-slate-200 bg-white p-6">
                <p className="eyebrow text-xs mb-4">Membership perks</p>
                <ul className="space-y-4">
                  {[
                    { icon: Users, t: 'Advisory Board seat', d: 'Shape the roadmap quarterly.' },
                    { icon: Mic, t: 'Speak at the User Conference', d: '2027 stage time for your team.' },
                    { icon: FlaskConical, t: 'Mobot Labs early access', d: 'On-prem lab + certification.' },
                  ].map((p) => {
                    const Icon = p.icon;
                    return (
                      <li key={p.t} className="flex gap-3">
                        <span className="w-8 h-8 rounded-md bg-[#e8f0fe] text-[#1d4ed8] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </span>
                        <div>
                          <div className="font-bold text-[#0a2540] text-sm">{p.t}</div>
                          <div className="text-slate-500 text-xs">{p.d}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <figure className="rounded-lg border border-slate-200 bg-white p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-[#b8860b] text-[#b8860b]" />
                  ))}
                </div>
                <blockquote className="text-[#0a2540] font-semibold leading-relaxed">
                  &ldquo;We stopped rationing test coverage. Now every release gets the full matrix
                  &mdash; and our QA bill didn&apos;t move.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <div className="font-bold text-[#0a2540]">Lewis C.</div>
                  <div className="text-slate-500">Engineering Manager, Persona</div>
                </figcaption>
              </figure>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 px-6 bg-[#0a2540]">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            dark
            eyebrow="Exclusive to Unlimited · A select few"
            title={
              <>
                More than testing &mdash; <span className="text-[#86b6ef]">an Unlimited partnership.</span>
              </>
            }
            sub="Mobot Unlimited is reserved for a small group of clients. Every membership includes a seat in the programs that shape Mobot’s future and level up your own team."
          />
          <div className="mt-12 grid lg:grid-cols-3 gap-5">
            {programs.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 100}>
                  <div className="h-full rounded-lg bg-white border-l-4 border-[#1d4ed8] p-7 flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="w-11 h-11 rounded-md bg-gradient-to-br from-[#9085e9] to-[#1d4ed8] text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </span>
                      {p.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded bg-[#1d4ed8] text-white">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <p className="eyebrow text-xs mb-1">{p.eyebrow}</p>
                    <h3 className="font-bold text-[#0a2540] text-xl mb-3">{p.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{p.body}</p>
                    <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-[#0a2540]">
                      {p.facts.map((f) => (
                        <span key={f} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1d4ed8]" /> {f}
                        </span>
                      ))}
                    </div>
                    {p.href && (
                      <Link href={p.href} className="mt-4 text-sm font-semibold text-[#1d4ed8] hover:text-[#1e40af]">
                        Learn more →
                      </Link>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Economics */}
      <section className="py-24 px-6 section-alt border-b border-slate-200">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="The economics"
            title="Unlimited coverage costs less than a scripted suite you have to keep alive"
            sub="A flat rate replaces the three line items scripted automation never puts on the invoice: authoring, maintenance after every release, and the hours spent triaging failures that weren’t bugs."
            center
            className="mb-12"
          />
          <ScriptCostCalculator />
        </div>
      </section>

      {/* Invitation CTA */}
      <section className="py-24 px-6">
        <Reveal variant="scale" className="mx-auto max-w-[80rem]">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-[#9085e9] via-[#3987e5] to-[#1d4ed8] p-10 sm:p-14 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Request an invitation</h2>
              <p className="text-white/85 mt-3 max-w-[36rem]">
                Seats are limited to a select group of clients. Talk to us about Unlimited for your team.
              </p>
            </div>
            <Link
              href="/schedule-demo"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-white text-[#1d4ed8] font-bold hover:bg-[#e8f0fe] transition-colors"
            >
              Request an invite →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
