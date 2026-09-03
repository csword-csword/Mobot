import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import CtaBand from '@/components/ui/CtaBand';
import { posts, getPost, kindLabel } from '@/data/posts';

export function generateStaticParams() {
  return posts.filter((p) => !p.externalUrl).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.summary } : {};
}

function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || post.externalUrl) notFound();

  const sameKind = posts.filter((p) => p.slug !== post.slug && !p.externalUrl && p.tags?.[0] === post.tags?.[0]);
  const related = [...sameKind, ...posts.filter((p) => p.slug !== post.slug && !p.externalUrl && !sameKind.includes(p))].slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
          <div className="mx-auto max-w-[48rem] px-6 py-16 lg:py-24">
            <Link href="/resources/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#1d4ed8] mb-8">
              <ArrowLeft className="w-4 h-4" /> Blog &amp; Reports
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded bg-[#e8f0fe] text-[#1d4ed8]">
                {post.tags?.includes('How-to') ? 'How-to guide' : kindLabel[post.kind]}
              </span>
              <span className="text-xs text-slate-400">
                {formatDate(post.date)}
                {post.readTime ? ` · ${post.readTime} read` : ''}
                {post.author ? ` · ${post.author}` : ''}
              </span>
            </div>
            <h1 className="font-bold tracking-tight text-[#0a2540] text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-5">{post.title}</h1>
            <p className="text-slate-600 text-lg leading-relaxed">{post.summary}</p>
          </div>
        </header>

        {post.image && (
          <div className="mx-auto max-w-[64rem] px-6 -mt-8 lg:-mt-12">
            <div className="relative aspect-[2/1] rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-[0_8px_20px_rgba(15,23,42,0.10)]">
              <Image src={post.image} alt="" fill priority sizes="(min-width: 1024px) 64rem, 100vw" className="object-cover" />
            </div>
          </div>
        )}

        <div className="mx-auto max-w-[48rem] px-6 py-14">
          {post.html ? (
            <div className="prose-mobot" dangerouslySetInnerHTML={{ __html: post.html }} />
          ) : (
            <div className="prose-mobot">
              {post.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {post.cta && (
            <div className="mt-12 rounded-lg border-2 border-[#1d4ed8] bg-[#e8f0fe]/50 p-8 text-center">
              <p className="text-[#0a2540] font-bold text-lg mb-4">Want the full picture?</p>
              <Link href={post.cta.href} className="inline-flex px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm">
                {post.cta.label}
              </Link>
            </div>
          )}

          {post.tags && (
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600">{t}</span>
              ))}
            </div>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 px-6 section-alt border-y border-slate-200">
          <div className="mx-auto max-w-[80rem]">
            <p className="eyebrow text-xs mb-6">More from Mobot</p>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/resources/blog/${p.slug}`} className="group rounded-lg border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-[#1d4ed8]">{kindLabel[p.kind]}</span>
                  <h3 className="font-bold text-[#0a2540] mt-2 leading-snug group-hover:text-[#1d4ed8]">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
