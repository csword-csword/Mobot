import Link from 'next/link';
import { ArrowRight, FileText, BookOpen, Video } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ReportFeature from '@/components/report/ReportFeature';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';

export const metadata = {
  title: 'Resources',
  description:
    'Annual Defect Report, sample defect reports, guides, and webinars from Mobot — real devices, real robots, verified defects.',
};

const secondary = [
  {
    icon: FileText,
    title: 'Sample defect report',
    body: 'A sanitized, forensic report from a real run — steps, evidence, and a verified P0.',
    href: '/resources/defect-reports',
    label: 'View sample',
  },
  {
    icon: BookOpen,
    title: 'Blog & reports',
    body: 'Test debt, deep linking, Pass/Fail features, and how-tos for the flows that break most.',
    href: '/resources/blog',
    label: 'Browse posts',
  },
  {
    icon: Video,
    title: 'Webinars & events',
    body: 'Live sessions on mobile QA with the team that tests on real devices every night.',
    href: '/resources/webinars-events',
    label: 'See events',
  },
];

export default function ResourcesHubPage() {
  return (
    <>
      <PageHero
        center
        eyebrow="Resources"
        title="Reports, guides, and proof from the lab"
        intro="Start with the Annual Defect Report — what actually breaks across industries — then dig into sample reports, guides, and events."
        primary={{ label: 'Get the Annual Defect Report', href: '/resources/annual-defect-report' }}
        secondary={{ label: 'Request a Demo', href: '/schedule-demo' }}
      />

      <section className="py-16 px-6" aria-label="Annual Defect Report">
        <div className="mx-auto max-w-[80rem]">
          <Reveal>
            <ReportFeature />
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem] grid sm:grid-cols-3 gap-5">
          {secondary.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.href} delay={i * 80}>
                <Link
                  href={c.href}
                  className="group h-full flex flex-col rounded-lg border border-slate-200 bg-white p-7 shadow-[0_1px_3px_rgba(15,23,42,0.08)] hover:border-[#1d4ed8]/40 transition-colors"
                >
                  <span className="w-10 h-10 rounded-md flex items-center justify-center bg-[#e8f0fe] text-[#1d4ed8] mb-5">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h2 className="font-bold text-[#0a2540] text-lg mb-2 group-hover:text-[#1d4ed8] transition-colors">
                    {c.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{c.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[#1d4ed8] font-semibold text-sm">
                    {c.label} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Want this data on your app?"
        body="Get a verified defect report from Mobot’s robots and QA analysts on your build, on real devices."
        primaryLabel="Request a Demo"
        primaryHref="/schedule-demo"
        secondaryLabel="Get the Annual Defect Report"
        secondaryHref="/resources/annual-defect-report"
      />
    </>
  );
}
