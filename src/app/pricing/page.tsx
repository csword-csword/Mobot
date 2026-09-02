import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import FaqAccordion from '@/components/ui/FaqAccordion';
import PricingCreditsUnlimited from '@/components/PricingCreditsUnlimited';
import ScriptCostCalculator from '@/components/compare/ScriptCostCalculator';
import { faqGroups } from '@/data/faq';

export const metadata = {
  title: 'Pricing',
  description: 'Start with Credits to prove the value. Move to Mobot Unlimited for all-you-can-test coverage at one flat annual rate.',
};

const plans = [
  {
    eyebrow: 'Prove it',
    name: 'Credits',
    tagline: 'Buy testing actions, point us at your app, and see the defect report.',
    body: 'Low-friction to start, procurement-friendly, and built to convert skeptics — the first report tends to sell the second. An action is a robot tap, swipe, or drag on a physical device.',
    bullets: [
      'Pay for testing actions as you use them',
      'Access to the full 300+ device fleet',
      'AI-assisted authoring, robots, and analyst verification included',
      'Reports in the Mobot platform, Slack, Jira, and TestRail',
      'No long-term commitment to get started',
    ],
    cta: { label: 'Talk to Us', href: '/schedule-demo' },
    featured: false,
  },
  {
    eyebrow: 'Make it your backbone',
    name: 'Mobot Unlimited',
    tagline: 'Unlimited testing across unlimited applications for one flat annual rate.',
    body: 'Built for teams shipping continuously. Run every regression, every release candidate, every edge case across the full fleet — with no per-test fees, no credit metering, and no test-suite caps. Offered to a limited cohort by invitation.',
    bullets: [
      'Unlimited test runs every month, unlimited applications',
      'Dedicated Technical Account Manager',
      'High-frequency regression on the latest devices and OS releases',
      'Customer Advisory Board seat and 2027 User Conference speaking slot',
      'Mobot Labs early access (Q1 2027)',
      'One predictable rate — forecast QA spend with no overages',
    ],
    cta: { label: 'Request an Invitation', href: '/schedule-demo' },
    secondary: { label: 'Explore Unlimited', href: '/unlimited' },
    featured: true,
  },
];

export default function Page() {
  const pricingFaq = faqGroups.find((g) => g.id === 'pricing')?.items ?? [];

  return (
    <>
      <PageHero
        center
        eyebrow="Pricing"
        title="Start Where You Are"
        intro="Two ways to work with Mobot — prove the value with a defect report, then make it your QA backbone. Enterprise pricing is scoped to your device coverage and test volume; no dollar figures on this page, by design."
      />

      <PricingCreditsUnlimited />

      <section className="py-16 px-6">
        <div className="mx-auto max-w-[80rem] grid md:grid-cols-2 gap-6 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div
                className={`relative h-full rounded-lg bg-white p-10 flex flex-col gap-4 ${
                  p.featured ? 'border-2 border-[#1d4ed8] shadow-[0_10px_24px_rgba(29,78,216,0.16)]' : 'border border-slate-200'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md bg-[#1d4ed8] text-white">
                    Flagship · Where teams land
                  </span>
                )}
                <span className="eyebrow text-xs w-fit">{p.eyebrow}</span>
                <h2 className="text-3xl font-bold text-[#0a2540]">{p.name}</h2>
                <p className="text-[#0a2540] font-semibold">{p.tagline}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{p.body}</p>
                <ul className="mt-2 space-y-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 flex flex-wrap gap-3">
                  <Link
                    href={p.cta.href}
                    className={`inline-flex px-6 py-3 rounded-md font-semibold transition-colors text-sm ${
                      p.featured
                        ? 'bg-[#1d4ed8] text-white hover:bg-[#1e40af]'
                        : 'border border-slate-300 text-[#0a2540] hover:border-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    {p.cta.label}
                  </Link>
                  {p.secondary && (
                    <Link href={p.secondary.href} className="inline-flex px-6 py-3 rounded-md border border-slate-300 text-[#0a2540] font-semibold hover:bg-slate-50 transition-colors text-sm">
                      {p.secondary.label}
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="The real comparison"
            title="It isn't Plan A vs. Plan B"
            sub="It's the cost of one escaped defect — a payment that fails on Face ID, a push that never arrives, a Bluetooth pairing that hangs — plus the engineering hours a scripted suite quietly consumes, against a program that catches the defect first and asks nothing of your engineers."
            center
            className="mb-12"
          />
          <ScriptCostCalculator />
          <p className="text-center mt-8">
            <Link href="/compare" className="text-[#1d4ed8] font-semibold hover:text-[#1e40af] transition-colors">
              See how Mobot compares to Appium, Maestro, and QA Wolf →
            </Link>
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[56rem]">
          <SectionHeading eyebrow="Pricing FAQ" title="Questions teams ask before they start" center className="mb-10" />
          <FaqAccordion items={pricingFaq} />
          <p className="text-center mt-6 text-sm text-slate-500">
            More questions? <Link href="/faq" className="text-[#1d4ed8] font-semibold">Read the full FAQ →</Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="Talk to sales"
        body="Tell us about your app, device coverage, and release cadence. We'll scope the right plan and show you a verified defect report on your build."
        primaryLabel="Talk to Sales"
        secondaryLabel="Get a Sample Report"
      />
    </>
  );
}
