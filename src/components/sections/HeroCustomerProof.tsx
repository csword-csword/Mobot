import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { getCaseStudy } from '@/data/caseStudies';

/**
 * Customer proof directly under the hero. Slugs are listed explicitly so
 * marketing can choose what leads; anything that fails to resolve is skipped.
 */
const featuredSlugs = [
  'homebase-mobile-qa-automation-with-mobot',
  'citizen-gets-5-star-rating-eliminates-1-000s-of-manual-testing-hours',
  'how-rappi-scaled-martech-qa-with-computer-vision-and-robots',
];

export default function HeroCustomerProof() {
  const studies = featuredSlugs.map(getCaseStudy).filter((c) => c !== undefined);
  if (studies.length === 0) return null;

  return (
    <section className="px-6 py-10 section-alt border-b border-slate-200" aria-label="Customer results">
      <div className="mx-auto max-w-[86rem]">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4ed8]">Proven in production</span>
          <Link href="/customers" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#1d4ed8]">
            All customer stories <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {studies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <Link
                href={`/customers/${c.slug}`}
                className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 card-lift"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text leading-none">{c.stat}</div>
                <div className="font-bold text-[#0a2540] mt-2 leading-snug">{c.label}</div>
                <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 truncate">
                    <span className="font-semibold text-[#0a2540]">{c.company}</span>
                    {c.industry ? ` · ${c.industry.split('·')[0].trim()}` : ''}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#1d4ed8] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
