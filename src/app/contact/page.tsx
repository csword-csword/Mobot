import Link from 'next/link';
import { Mail, MapPin, Calendar, FileText, Briefcase, Newspaper } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';

export const metadata = {
  title: 'Contact',
  description: 'Talk to Mobot about a demo, a sample defect report, Mobot Unlimited, security documentation, or a customer reference.',
};

const reasons = [
  { icon: Calendar, t: 'Request a demo', d: 'See the robots test your app and review a verified defect report.', href: '/schedule-demo', label: 'Book a demo' },
  { icon: FileText, t: 'Get a sample report', d: 'A forensic defect report — video, logs, reproduction steps.', href: '/resources/defect-reports', label: 'See the sample' },
  { icon: Briefcase, t: 'Mobot Unlimited', d: 'Request an invitation to the limited Unlimited cohort.', href: '/unlimited', label: 'Request an invite' },
  { icon: Newspaper, t: 'Press & partnerships', d: 'Media inquiries, speaking, and partner programs.', href: 'mailto:sales@teammobot.com', label: 'Email us' },
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
            <form className="rounded-lg border border-slate-200 bg-white p-8 shadow-[0_8px_20px_rgba(15,23,42,0.10)] grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">First name</label>
                <input type="text" className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">Last name</label>
                <input type="text" className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">Work email</label>
                <input type="email" placeholder="you@company.com" className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">Company</label>
                <input type="text" className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">What can we help with?</label>
                <select className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8] bg-white">
                  <option>Request a demo</option>
                  <option>Sample defect report</option>
                  <option>Mobot Unlimited invitation</option>
                  <option>Mobot Labs early access</option>
                  <option>Security documentation</option>
                  <option>Customer reference</option>
                  <option>Press or partnership</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">Message</label>
                <textarea rows={4} placeholder="Tell us about your app and where hardware-dependent bugs are hitting you hardest." className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]" />
              </div>
              <button type="submit" className="sm:col-span-2 mt-1 inline-flex justify-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm">
                Send message
              </button>
              <p className="sm:col-span-2 text-xs text-slate-400 text-center">We reply within one business day.</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
