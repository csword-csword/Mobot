import Link from 'next/link';
import { ArrowRight, ArrowUpRight, FileText, BookOpen, Newspaper } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import { posts, kindLabel, type Post } from '@/data/posts';

export const metadata = {
  title: 'Blog & Reports',
  description: 'Insights from Mobot: research on deep linking and mobile QA, guides on test debt, and notes from the analysts who verify defects on real devices.',
};

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function PostCard({ post, big }: { post: Post; big?: boolean }) {
  const href = post.externalUrl ?? `/resources/blog/${post.slug}`;
  const external = Boolean(post.externalUrl);
  const Icon = post.kind === 'report' ? FileText : post.kind === 'guide' ? BookOpen : Newspaper;
  const inner = (
    <>
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded bg-[#e8f0fe] text-[#1d4ed8]">
          <Icon className="w-3 h-3" /> {kindLabel[post.kind]}
        </span>
        <span className="text-xs text-slate-400">
          {formatDate(post.date)}
          {post.readTime ? ` · ${post.readTime}` : ''}
        </span>
      </div>
      <h2 className={`font-bold text-[#0a2540] leading-snug ${big ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>{post.title}</h2>
      <p className={`text-slate-600 leading-relaxed mt-3 flex-1 ${big ? 'text-base' : 'text-sm'}`}>{post.summary}</p>
      {post.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-500">{t}</span>
          ))}
        </div>
      )}
      <span className="mt-5 inline-flex items-center gap-1.5 text-[#1d4ed8] font-semibold text-sm">
        {external ? 'Read on mobot.io' : 'Read'}
        {external ? <ArrowUpRight className="w-4 h-4" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </span>
    </>
  );
  const cls = 'group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-7 hover:border-slate-300 hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all';
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}

export default function Page() {
  const featured = posts.filter((p) => p.featured).slice(0, 2);
  const reports = posts.filter((p) => p.kind === 'report' || p.kind === 'guide');
  const articles = posts.filter((p) => p.kind === 'article' || p.kind === 'case-study');

  return (
    <>
      <PageHero
        eyebrow="Blog & Reports"
        title="Insights from Mobot"
        intro="Research on deep linking and mobile QA, guides on the cost of test automation, and notes from the analysts who verify defects on real devices every night."
        primary={{ label: 'Get a Sample Report', href: '/resources/defect-reports' }}
      />

      {featured.length > 0 && (
        <section className="py-16 px-6">
          <div className="mx-auto max-w-[80rem]">
            <p className="eyebrow text-xs mb-6">Featured</p>
            <div className="grid md:grid-cols-2 gap-5">
              {featured.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <PostCard post={p} big />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading eyebrow="Reports & guides" title="Research and playbooks" className="mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reports.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading eyebrow="Latest posts" title="Explore the blog" className="mb-8" />
          {articles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 80}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="text-slate-500">New posts are on the way.</p>
          )}
        </div>
      </section>

      <section className="py-16 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[48rem] text-center">
          <h2 className="text-2xl font-bold text-[#0a2540] mb-2">Get the latest on mobile app testing</h2>
          <p className="text-slate-600 mb-6">The 3-minute newsletter keeping 1,000+ mobile experts in the loop.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-[28rem] mx-auto">
            <input type="email" placeholder="you@company.com" className="flex-1 rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8] bg-white" aria-label="Work email" />
            <button type="submit" className="px-6 py-2.5 rounded-md bg-[#1d4ed8] text-white font-semibold text-sm hover:bg-[#1e40af] transition-colors">Subscribe</button>
          </form>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
