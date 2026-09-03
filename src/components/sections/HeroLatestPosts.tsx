import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import PostCard from '@/components/PostCard';
import { posts } from '@/data/posts';

/** Compact card row of the newest posts, directly under the hero. */
export default function HeroLatestPosts() {
  const latest = posts.filter((p) => !p.externalUrl).slice(0, 4);
  if (latest.length === 0) return null;

  return (
    <section className="px-6 py-10 border-b border-slate-200" aria-label="Latest from the blog">
      <div className="mx-auto max-w-[86rem]">
        <div className="flex items-center justify-between mb-5">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4ed8]">New from the lab</span>
          <Link href="/resources/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#1d4ed8]">
            All guides & reports <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {latest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <PostCard post={p} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
