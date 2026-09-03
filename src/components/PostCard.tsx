import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, FileText, BookOpen, Newspaper } from 'lucide-react';
import { kindLabel, type Post } from '@/data/posts';

export function formatPostDate(iso: string, month: 'short' | 'long' = 'short') {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month, day: 'numeric' });
}

/** Card for a blog post, report, or guide. Shows cover art when the post has one. */
export default function PostCard({ post, big, compact }: { post: Post; big?: boolean; compact?: boolean }) {
  const href = post.externalUrl ?? `/resources/blog/${post.slug}`;
  const external = Boolean(post.externalUrl);
  const Icon = post.kind === 'report' ? FileText : post.kind === 'guide' ? BookOpen : Newspaper;
  const label = post.tags?.includes('How-to') ? 'How-to guide' : kindLabel[post.kind];
  const inner = (
    <>
      {post.image && !compact && (
        <div className={`relative w-full overflow-hidden bg-slate-100 ${big ? 'aspect-[2/1]' : 'aspect-[16/9]'}`}>
          <Image
            src={post.image}
            alt=""
            fill
            sizes={big ? '(min-width: 1024px) 40rem, 100vw' : '(min-width: 1024px) 26rem, 100vw'}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className={`flex flex-1 flex-col ${compact ? 'p-5' : 'p-7'}`}>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded bg-[#e8f0fe] text-[#1d4ed8]">
            <Icon className="w-3 h-3" /> {label}
          </span>
          <span className="text-xs text-slate-400">
            {formatPostDate(post.date)}
            {post.readTime ? ` · ${post.readTime}` : ''}
          </span>
        </div>
        <h3 className={`font-bold text-[#0a2540] leading-snug ${big ? 'text-2xl sm:text-3xl' : compact ? 'text-base' : 'text-lg'}`}>{post.title}</h3>
        {!compact && <p className={`text-slate-600 leading-relaxed mt-3 flex-1 ${big ? 'text-base' : 'text-sm'}`}>{post.summary}</p>}
        <span className={`inline-flex items-center gap-1.5 text-[#1d4ed8] font-semibold text-sm ${compact ? 'mt-3' : 'mt-5'}`}>
          {external ? 'Read on mobot.io' : 'Read'}
          {external ? <ArrowUpRight className="w-4 h-4" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
        </span>
      </div>
    </>
  );
  const cls = 'group flex h-full flex-col rounded-lg border border-slate-200 bg-white overflow-hidden card-lift';
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
}
