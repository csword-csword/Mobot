import { Video, FileText, Smartphone, UserCheck, GitCompare, ListChecks } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import SampleDefectReport from '@/components/SampleDefectReport';

export const metadata = {
  title: 'Sample Defect Report',
  description: 'See what a verified, forensic defect report from Mobot looks like — video, device and network logs, reproduction steps, and an analyst’s verdict.',
};

const anatomy = [
  { icon: UserCheck, t: 'Analyst verdict', d: 'A QA analyst reproduced the failure and confirmed it is a real defect — not a flaky run, not a copy change.' },
  { icon: ListChecks, t: 'Step-by-step reproduction', d: 'Every action the robot took, with pass/fail per step, so an engineer can reproduce it the first time.' },
  { icon: Video, t: 'Video of the failure', d: 'Captured on the physical device at the moment it happened, alongside screenshots for each step.' },
  { icon: FileText, t: 'Device & network logs', d: 'Timestamped logs from the device and the network at the point of failure, attached to the report.' },
  { icon: Smartphone, t: 'Exact configuration', d: 'Device, OS version, network conditions, build, and app state (cold start, backgrounded, foreground).' },
  { icon: GitCompare, t: 'Baseline vs. actual', d: 'Side-by-side comparison against the established baseline for every step, in the Mobot platform.' },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="See what a verified defect report looks like"
        intro="Every defect Mobot reports is triaged and verified by a QA analyst before it reaches your team, with video, logs, and reproduction steps attached — so a red result is never something your engineers have to chase down first."
        primary={{ label: 'Request the Sample Report', href: '/schedule-demo' }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[64rem]">
          <SampleDefectReport />
          <p className="text-center text-xs text-slate-400 mt-4">Illustrative report. Request the sample to see a complete report on a real app.</p>
        </div>
      </section>

      <section className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="Anatomy of a report"
            title="Forensic detail your team can hand straight to an engineer"
            sub="No retriage required. Everything needed to reproduce, assign, and fix is in the report the moment it lands in Slack, Jira, or TestRail."
            center
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {anatomy.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={a.t} delay={(i % 3) * 90}>
                  <div className="h-full rounded-lg border border-slate-200 bg-white p-7">
                    <Icon className="w-5 h-5 text-[#1d4ed8] mb-4" />
                    <h2 className="font-bold text-[#0a2540] mb-2">{a.t}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{a.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title="Get a report on your own app" body="Tell us about your build. We'll run it on real devices and send back a verified defect report you can review with your team." primaryLabel="Request the Sample Report" />
    </>
  );
}
