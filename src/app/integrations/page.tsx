import Link from 'next/link';
import { MessageSquare, Ticket, ClipboardList, GitBranch, Webhook, Layers } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import SampleDefectReport from '@/components/SampleDefectReport';

export const metadata = {
  title: 'Integrations',
  description: 'Mobot integrates with Slack, Jira, and TestRail so verified defects land where your team already works.',
};

const integrations = [
  { icon: MessageSquare, name: 'Slack', body: 'Verified defects and run summaries posted to a shared channel — the same channel your Mobot contact works in with you.', status: 'Available' },
  { icon: Ticket, name: 'Jira', body: 'Every verified defect becomes a ticket with video, device and network logs, and reproduction steps attached. No retriage.', status: 'Available' },
  { icon: ClipboardList, name: 'TestRail', body: 'Test plans, runs, and results synced to your existing test management, so Mobot coverage shows up next to everything else.', status: 'Available' },
  { icon: GitBranch, name: 'CI/CD & build distribution', body: 'Submit builds through your existing distribution channel. Results are waiting in the Mobot platform by morning.', status: 'Standard distribution' },
  { icon: Webhook, name: 'Custom API integrations', body: 'Need results in a data warehouse, a dashboard, or an internal tool? Tailored integrations are available for enterprise programs.', status: 'On request' },
  { icon: Layers, name: 'The Mobot platform', body: 'Side-by-side baseline vs. actual screenshots, defect patterns across devices and builds, and run analytics for every test.', status: 'Included' },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Verified defects, delivered where your team already works"
        intro="Mobot integrates with the platforms you already use. Results flow from the robot fleet, through analyst verification, into Slack, Jira, TestRail, and the Mobot platform — same day."
        primary={{ label: 'Request a Demo', href: '/schedule-demo' }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {integrations.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.name} delay={(i % 3) * 90}>
                <div className="h-full rounded-lg border border-slate-200 bg-white p-7 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-md bg-[#e8f0fe] text-[#1d4ed8] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-slate-100 text-slate-500">{it.status}</span>
                  </div>
                  <h2 className="font-bold text-[#0a2540] text-lg mb-2">{it.name}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{it.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem] grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="What arrives"
              title="A ticket your engineer can act on immediately"
              sub="Not a red build to investigate — a verified defect with the device, OS, network conditions, video, logs, and exact reproduction steps. Ready to assign."
            />
            <Link href="/resources/defect-reports" className="inline-block mt-6 text-[#1d4ed8] font-semibold hover:text-[#1e40af]">
              See a full sample report →
            </Link>
          </Reveal>
          <SampleDefectReport />
        </div>
      </section>

      <CtaBand title="Can't find what you need?" body="We're always adding integrations. Tell us what your release process looks like and we'll fit into it." primaryLabel="Get in Touch" primaryHref="/contact" />
    </>
  );
}
