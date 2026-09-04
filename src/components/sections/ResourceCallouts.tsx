import Link from 'next/link';
import { ArrowRight, BookOpen, FileCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import PostCard from '@/components/PostCard';
import { getPost } from '@/data/posts';

/**
 * The homepage's single content section: one featured long-form piece, three
 * supporting posts, and a list of how-to guides. Slugs are explicit so
 * marketing can choose what runs; anything that fails to resolve is skipped.
 */
const featuredSlug = 'the-real-cost-of-appium-at-scale';

/** Sources worth naming on the featured card — rigor is the selling point. */
const featuredSources = ['Slack Engineering', 'Uber', 'Google', 'PROMISE ’17', 'ASE ’16'];

const supportingSlugs = [
  'defect-validation-signal-to-noise',
  'flaky-tests-are-a-device-problem',
  'ai-ships-code-who-tests-the-phone',
];

const guideSlugs = [
  'how-to-test-bluetooth-on-ios',
  'how-to-test-biometrics-on-ios',
  'how-to-test-location-services-on-ios',
  'how-to-test-app-backgrounding-on-ios',
  'how-to-test-sms-messages-on-ios',
  'how-to-test-bluetooth-on-android',
];

export default function ResourceCallouts() {
  const featured = getPost(featuredSlug);
  const supporting = supportingSlugs.map(getPost).filter((p) => p !== undefined);
  const guides = guideSlugs.map(getPost).filter((p) => p !== undefined);

  return (
    <section className="py-24 px-6 section-alt border-y border-slate-200">
      <div className="mx-auto max-w-[80rem]">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="From the lab"
            title="Written by the people who test on real devices every night"
            sub="Research on what mobile testing actually costs, and how-to guides for the flows that break most."
          />
          <Link href="/resources/blog" className="inline-flex items-center gap-2 text-[#1d4ed8] font-semibold hover:text-[#1e40af] whitespace-nowrap">
            All guides and reports <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured long-form */}
        {featured && (
          <Reveal>
            <Link
              href={`/resources/blog/${featured.slug}`}
              className="group grid lg:grid-cols-[1.4fr_1fr] gap-8 rounded-lg border border-slate-200 bg-white p-7 sm:p-9 card-lift mb-5 overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded brand-gradient text-white">
                    <BookOpen className="w-3 h-3" /> Featured guide
                  </span>
                  {featured.readTime && <span className="text-xs text-slate-400">{featured.readTime}</span>}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0a2540] leading-tight group-hover:text-[#1d4ed8] transition-colors">
                  {featured.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mt-4 max-w-[38rem]">{featured.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[#1d4ed8] font-semibold text-sm">
                  Read the guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

              <div className="lg:border-l lg:border-slate-200 lg:pl-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4ed8] mb-3">
                  <FileCheck className="w-3.5 h-3.5" /> Every figure sourced
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Peer-reviewed research and engineering teams reporting on their own systems — not vendor
                  statistics recycled between blog posts.
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredSources.map((s) => (
                    <span key={s} className="text-[11px] font-semibold px-2 py-1 rounded bg-slate-100 text-slate-600">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {/* Supporting posts */}
        <div className="grid sm:grid-cols-3 gap-5">
          {supporting.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <PostCard post={p} compact />
            </Reveal>
          ))}
        </div>

        {/* How-to guides */}
        {guides.length > 0 && (
          <Reveal delay={120}>
            <div className="mt-5 rounded-lg border border-slate-200 bg-white p-6 md:p-7">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4ed8]">How-to guides</p>
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
