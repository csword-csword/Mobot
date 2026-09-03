import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import FaqAccordion from '@/components/ui/FaqAccordion';
import { faqGroups } from '@/data/faq';

export const metadata = {
  title: 'FAQ',
  description: 'Everything teams ask before they start with Mobot: how it works, what we test, and how pricing is structured.',
};

export default function Page() {
  return (
    <>
      <PageHero
        center
        eyebrow="FAQ"
        title="Everything teams ask before they start"
        intro="How the robots work, what they can test, and how Credits and Unlimited are priced. Don't see your question? Ask us directly."
        primary={{ label: 'Talk to Us', href: '/contact' }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[72rem] grid lg:grid-cols-[14rem_1fr] gap-12">
          <nav className="lg:sticky lg:top-24 self-start">
            <div className="eyebrow text-xs mb-3">Jump to</div>
            <ul className="space-y-2">
              {faqGroups.map((g) => (
                <li key={g.id}>
                  <a href={`#${g.id}`} className="text-sm font-semibold text-slate-600 hover:text-[#1d4ed8] transition-colors">
                    {g.heading}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg border border-slate-200 bg-[#f8fafc] p-5 text-sm">
              <div className="font-bold text-[#0a2540] mb-1">Comparing tools?</div>
              <p className="text-slate-500 text-xs leading-relaxed mb-3">See Mobot vs. Appium, Maestro, and QA Wolf side by side.</p>
              <Link href="/compare" className="text-[#1d4ed8] font-semibold text-xs">Compare →</Link>
            </div>
          </nav>
          <div className="space-y-14">
            {faqGroups.map((g) => (
              <div key={g.id} id={g.id} className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-[#0a2540] mb-5">{g.heading}</h2>
                <FaqAccordion items={g.items} defaultOpen={null} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Still have questions?" body="Talk to the team. We'll walk through your app, your devices, and what a verified defect report looks like on your build." primaryLabel="Contact Us" primaryHref="/contact" />
    </>
  );
}
