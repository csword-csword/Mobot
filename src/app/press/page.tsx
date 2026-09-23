import Link from 'next/link';
import { Newspaper, FileText, Mail } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';

export const metadata = {
  title: 'Press',
  description: 'Press room for Team Mobot Inc. — news, Annual Defect Report, Series A, and media contact.',
};

const releases = [
  {
    date: 'September 23, 2026',
    title:
      'Mobot Annual Defect Report: 6,372 Real-Device Bugs Show Most Critical Mobile Failures Are Single-Platform',
    href: '/press/annual-defect-report-2026',
    blurb:
      'Across a sampling of 83 customer apps, 83% of defects appeared on only one platform Mobot tested. Full report gated on mobot.io.',
  },
  {
    date: 'August 18, 2022',
    title: 'Mobot launches robot-powered QA-as-a-Service with $12.5M Series A',
    href: '/press/mobot-series-a-announce',
    blurb:
      'Mobot publicly launched its QA-as-a-service platform and announced $12.5 million in Series A funding led by Cota Capital, with participation from Heavybit, Uncorrelated Ventures, and others.',
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Press"
        title="Mobot Press Room"
        intro="News and announcements from Team Mobot Inc. For media inquiries, email press@mobot.io — a person answers."
        primary={{ label: 'Email press@mobot.io', href: 'mailto:press@mobot.io' }}
        secondary={{ label: 'Company overview', href: '/about' }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[64rem] space-y-5">
          {releases.map((r, i) => (
            <Reveal key={r.href} delay={i * 80}>
              <Link
                href={r.href}
                className="block rounded-lg border border-slate-200 bg-white p-7 shadow-[0_1px_3px_rgba(15,23,42,0.08)] hover:border-[#1d4ed8]/40 transition-colors"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">{r.date}</p>
                <h2 className="font-bold text-[#0a2540] text-xl mb-2">{r.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{r.blurb}</p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#1d4ed8]">
                  <FileText className="w-4 h-4" /> Read release →
                </span>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={120}>
            <div className="rounded-lg border border-slate-200 bg-[#f8fafc] p-7 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
              <div className="flex gap-3 items-start">
                <Newspaper className="w-5 h-5 text-[#1d4ed8] mt-0.5" />
                <div>
                  <h2 className="font-bold text-[#0a2540]">Media kit & interviews</h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Logos, founder bios, and product briefings available on request.
                  </p>
                </div>
              </div>
              <a
                href="mailto:press@mobot.io"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#1d4ed8] text-white text-sm font-semibold hover:bg-[#1e40af] whitespace-nowrap"
              >
                <Mail className="w-4 h-4" /> Contact press
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="See Mobot in action"
        body="Request a demo to watch robots test on real devices and review a verified defect report."
      />
    </>
  );
}
