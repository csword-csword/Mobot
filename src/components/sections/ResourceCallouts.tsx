import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import PostCard from '@/components/PostCard';
import { getPost } from '@/data/posts';

/**
 * Homepage content callouts. Slugs are listed explicitly so marketing can
 * choose what to feature; anything that fails to resolve is skipped.
 */
const featuredSlugs = [
  'defect-validation-signal-to-noise',
  'how-to-test-bluetooth-on-ios',
  'how-to-test-biometrics-on-ios',
  'your-test-automation-creates-costly-test-debt',
];

const guideSlugs = [
  'how-to-test-location-services-on-ios',
  'how-to-test-app-backgrounding-on-ios',
  'how-to-test-sms-messages-on-ios',
  'how-to-test-medical-devices-on-ios',
  'how-to-test-2fa-on-ios',
  'how-to-use-charles-proxy',
];

export default function ResourceCallouts() {
  const featured = featuredSlugs.map(getPost).filter((p) => p !== undefined);
  const guides = guideSlugs.map(getPost).filter((p) => p !== undefined);

  return (
    <section className="py-24 px-6 section-alt border-y border-slate-200">
      <div className="mx-auto max-w-[80rem]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="From the lab"
            title="Guides written by the people who test on real devices every night"
            sub="How-to guides for the iOS flows that break most, plus the thinking behind how Mobot validates every defect."
          />
          <Link href="/resources/blog" className="inline-flex items-center gap-2 text-[#1d4ed8] font-semibold hover:text-[#1e40af] whitespace-nowrap">
            All guides and reports <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>

        {guides.length > 0 && (
          <Reveal delay={120}>
            <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 md:p-7">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4ed8]">More iOS how-to guides</p>
                <span className="text-xs text-slate-400">Step-by-step, with the real-device gotchas called out</span>
              </div>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/resources/blog/${g.slug}`} className="group flex items-start gap-2 py-1.5 text-sm text-[#0a2540] hover:text-[#1d4ed8]">
                      <ArrowRight className="w-3.5 h-3.5 mt-1 text-slate-300 group-hover:text-[#1d4ed8] group-hover:translate-x-0.5 transition-all shrink-0" />
                      <span className="font-medium">{g.title}</span>
                      {g.readTime && <span className="ml-auto text-xs text-slate-400 whitespace-nowrap">{g.readTime}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
