import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import LogoCloud from '@/components/ui/LogoCloud';
import TestimonialCards from '@/components/ui/TestimonialCards';
import { customerNames } from '@/data/content';
import { allCaseStudies } from '@/data/caseStudies';

export const metadata = {
  title: 'Customers & Case Studies',
  description: 'See how mobile teams use Mobot to deliver world-class products on time — with real results on real devices.',
};

const proof = [
  { value: '300+', label: 'Real devices', sub: 'iOS and Android phones and tablets, current and legacy OS versions' },
  { value: '5×', label: 'Test efficiency', sub: 'Robots do in one day what takes a human tester five' },
  { value: '100%', label: 'Coverage', sub: 'Including the hardware-dependent scenarios other tools skip' },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Customers"
        title="Success starts with Mobot."
        intro="See how teams are using Mobot to deliver world-class products under budget and on time — with defects caught on real devices before they reach users."
        primary={{ label: 'Request a Demo', href: '/schedule-demo' }}
        secondary={{ label: 'Get a Sample Report', href: '/resources/defect-reports' }}
      />

      <section className="py-16 px-6 border-b border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <LogoCloud title="" />
          <p className="mt-8 text-center text-xs text-slate-400">
            {customerNames.join(' · ')}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 section-alt border-b border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading eyebrow="Why mobile teams choose Mobot" title="Real results that speak for themselves" center className="mb-12" />
          <div className="grid md:grid-cols-3 gap-5">
            {proof.map((p, i) => (
              <Reveal key={p.label} delay={i * 90}>
                <div className="h-full rounded-lg border border-slate-200 bg-white p-8 text-center">
                  <div className="text-5xl font-bold gradient-text">{p.value}</div>
                  <div className="font-bold text-[#0a2540] text-lg mt-2">{p.label}</div>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">{p.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6" id="case-studies">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading eyebrow="Case studies" title="The numbers don't lie" center className="mb-12" />
          <div className="grid md:grid-cols-2 gap-5">
            {allCaseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 2) * 90}>
                <Link
                  href={`/customers/${c.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-8 card-lift"
                >
                  <div className="flex items-center justify-between mb-4">
                    {c.logo ? (
                      <div className="relative h-6 w-28">
                        <Image src={c.logo} alt={c.company} fill className="object-contain object-left brightness-0 opacity-60" />
                      </div>
                    ) : (
                      <span className="eyebrow text-xs">{c.company}</span>
                    )}
                    <span className="text-[11px] text-slate-400">{c.industry}</span>
                  </div>
                  <div className="text-5xl font-bold gradient-text">{c.stat}</div>
                  <div className="text-[#0a2540] font-bold text-lg leading-snug mt-1">{c.label}</div>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">{c.detail}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {c.bullets.map((b) => (
                      <li key={b} className="text-[11px] font-semibold px-2 py-1 rounded bg-slate-100 text-slate-600">{b}</li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-5 inline-flex items-center gap-1 text-[#1d4ed8] text-sm font-semibold">
                    Read the case study <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading eyebrow="In their words" title="Robot-powered testing drives results" center className="mb-12" />
          <TestimonialCards limit={4} />
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <p className="text-slate-600">
          Looking for a customer reference in your industry?{' '}
          <Link href="/contact" className="text-[#1d4ed8] font-semibold">Ask us — we&apos;ll connect you.</Link>
        </p>
      </section>

      <CtaBand title="Ready to say goodbye to manual mobile testing?" body="Contact us today to get a demo of the robots in action testing your app." />
    </>
  );
}
