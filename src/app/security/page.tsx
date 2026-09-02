import { ShieldCheck, Lock, Network, FileLock2, Eye, Building2 } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';

export const metadata = {
  title: 'Security & Compliance',
  description: 'How Mobot handles your builds, your data, and your test results — built for enterprise mobile teams.',
};

const controls = [
  { icon: ShieldCheck, t: 'SOC 2 Type II', d: 'Details and reports available under NDA for enterprise procurement. Request security documentation and we’ll walk your team through it.' },
  { icon: Lock, t: 'Build handling', d: 'Apps are installed through standard distribution channels on test devices. Access to every build submitted for testing is governed by defined access controls.' },
  { icon: Network, t: 'Network isolation', d: 'Test devices reach your APIs through secured, internal Mobot networks — never the open internet from an unmanaged device.' },
  { icon: FileLock2, t: 'Artifacts secured end to end', d: 'Reports, screenshots, video, and logs are secured from capture through delivery to the Mobot platform and your integrations.' },
  { icon: Eye, t: 'Human-in-the-loop, access-controlled', d: 'QA analysts operate under defined roles across onshore and offshore operations, with access scoped to the accounts they support.' },
  { icon: Building2, t: 'On-premises path', d: 'If your builds can’t be shared externally long-term, Mobot Labs (2027) puts a certified robot lab inside your own walls.' },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Security & Compliance"
        title="Built for enterprise mobile teams"
        intro="That starts with how we handle your builds, your data, and your test results. Here's how Mobot keeps the physical testing program as controlled as the software one."
        primary={{ label: 'Request Security Documentation', href: '/contact' }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {controls.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.t} delay={(i % 3) * 90}>
                <div className="h-full rounded-lg border border-slate-200 bg-white p-7 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
                  <span className="w-10 h-10 rounded-md bg-[#e8f0fe] text-[#1d4ed8] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </span>
                  <h2 className="font-bold text-[#0a2540] text-lg mb-2">{c.t}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[64rem]">
          <SectionHeading
            eyebrow="Regulated industries"
            title="Extensive testing is a compliance requirement, not a nice-to-have"
            sub="Fintech, health, and other regulated apps need accurate, evidenced testing of the flows regulators care about — identity, payments, authentication, data capture. Mobot's verified reports come with the video, logs, and reproduction steps auditors and engineers both need."
            center
          />
        </div>
      </section>

      <CtaBand title="Need the documentation for procurement?" body="Request our security package and we'll schedule time with your security and compliance team." primaryLabel="Request Security Documentation" primaryHref="/contact" secondaryLabel="Ask about Mobot Labs" secondaryHref="/labs" />
    </>
  );
}
