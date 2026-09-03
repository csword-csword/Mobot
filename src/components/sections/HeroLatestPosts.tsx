import Link from 'next/link';
import { ArrowRight, FileText, BookOpen, Newspaper } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { posts } from '@/data/posts';

/** Thin strip of the newest posts, directly under the hero. */
export default function HeroLatestPosts() {
  const latest = posts.filter((p) => !p.externalUrl).slice(0, 4);
  if (latest.length === 0) return null;

  return (
    <section className="px-6 py-5 border-b border-slate-200" aria-label="Latest from the blog">
      <Reveal variant="fade">
        <div className="mx-auto max-w-[86rem] flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link href="/resources/blog" className="shrink-0 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4ed8] hover:text-[#1e40af] inline-flex items-center gap-1.5">
            New from the lab <ArrowRight className="w-3 h-3" />
          </Link>
          <div className="flex-1 flex flex-wrap gap-x-8 gap-y-2 min-w-0">
            {latest.map((p) => {
              const Icon = p.kind === 'report' ? FileText : p.kind === 'guide' ? BookOpen : Newspaper;
              return (
                <Link
                  key={p.slug}
                  href={`/resources/blog/${p.slug}`}
                  className="group inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#0a2540] min-w-0"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1d4ed8] shrink-0" />
                  <span className="truncate max-w-[20rem] font-medium">{p.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
