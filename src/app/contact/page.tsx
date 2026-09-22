import Link from 'next/link';
import { Mail, MapPin, Calendar, FileText, Briefcase, Newspaper } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/forms/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Talk to Mobot about a demo, a sample defect report, Mobot Unlimited, security documentation, or a customer reference.',
};

const reasons = [
  { icon: Calendar, t: 'Request a demo', d: 'See the robots test your app and review a verified defect report.', href: '/schedule-demo', label: 'Book a demo' },
  { icon: FileText, t: 'Get a sample report', d: 'A forensic defect report — video, logs, reproduction steps.', href: '/resources/defect-reports', label: 'See the sample' },
  { icon: Briefcase, t: 'Mobot Unlimited', d: 'Request an invitation to the limited Unlimited cohort.', href: '/unlimited', label: 'Request an invite' },
  { icon: Newspaper, t: 'Press & partnerships', d: 'Media inquiries, speaking, and partner programs.', href: '/press', label: 'Press room' },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="Have a question about Mobot, want to see a sample defect report, or ready to talk about your testing coverage? Reach out — a person answers."
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem] grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              const external = r.href.startsWith('mailto:');
              return (
                <Reveal key={r.t} delay={i * 80}>
                  <div className="h-full rounded-lg border border-slate-200 bg-white p-6 flex flex-col">
                    <Icon className="w-5 h-5 text-[#1d4ed8] mb-4" />
                    <h2 className="font-bold text-[#0a2540] mb-1">{r.t}</h2>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{r.d}</p>
                    {external ? (
                      <a href={r.href} className="mt-4 text-sm font-semibold text-[#1d4ed8]">{r.label} →</a>
                    ) : (
                      <Link href={r.href} className="mt-4 text-sm font-semibold text-[#1d4ed8]">{r.label} →</Link>
                    )}
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={320} className="sm:col-span-2">
              <div className="rounded-lg bg-[#0a2540] p-6 text-white grid sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-[#86b6ef] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide text-white/50">Sales &amp; demos</div>
                    <a href="mailto:sales@teammobot.com" className="font-semibold hover:text-[#86b6ef]">sales@teammobot.com</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#86b6ef] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wide text-white/50">Lab &amp; HQ</div>
                    <div className="font-semibold">New York, NY</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
