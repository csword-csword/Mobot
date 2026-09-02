import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import CtaBand from '@/components/ui/CtaBand';
import { allCaseStudies, getCaseStudy } from '@/data/caseStudies';

export function generateStaticParams() {
  return allCaseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  return c ? { title: c.title, description: c.detail } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  return (
    <>
      <article>
        <header className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
          <div className="mx-auto max-w-[56rem] px-6 py-16 lg:py-24">
            <Link href="/customers" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#1d4ed8] mb-8">
              <ArrowLeft className="w-4 h-4" /> Customers
            </Link>
            <p className="eyebrow text-sm mb-3">{c.company}{c.industry ? ` · ${c.industry}` : ''}</p>
            <h1 className="font-bold tracking-tight text-[#0a2540] text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-5">{c.title}</h1>
            {c.stat && (
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-5xl font-bold gradient-text">{c.stat}</span>
                <span className="text-[#0a2540] font-bold text-lg">{c.label}</span>
              </div>
            )}
            <p className="text-slate-600 text-lg leading-relaxed">{c.detail}</p>
            {c.bullets.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.bullets.map((b) => (
                  <li key={b} className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-600">{b}</li>
                ))}
              </ul>
            )}
          </div>
        </header>

        <div className="mx-auto max-w-[48rem] px-6 py-14">
          {c.html ? (
            <div className="prose-mobot" dangerouslySetInnerHTML={{ __html: c.html }} />
          ) : (
            <div className="rounded-lg border border-slate-200 bg-[#f8fafc] p-8 text-center">
              <p className="text-slate-600 mb-4">The full case study is available on mobot.io.</p>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
              >
                Read the full case study <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </article>

      <CtaBand title="Get results like these on your app" body="Request a demo and see a verified defect report from Mobot's robots and QA analysts on your build." />
    </>
  );
}
