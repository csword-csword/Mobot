import Link from 'next/link';

interface SimplePageProps {
  eyebrow: string;
  title: string;
  intro: string;
  body?: string[];
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  badge?: string;
}

export default function SimplePage({
  eyebrow,
  title,
  intro,
  body = [],
  bullets = [],
  ctaLabel = 'Request a Demo',
  ctaHref = '/schedule-demo',
  secondaryLabel,
  secondaryHref,
  badge,
}: SimplePageProps) {
  return (
    <section className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
      <div className="mx-auto max-w-[48rem] px-6 py-20 lg:py-28">
        <div className="flex items-center gap-3 mb-5">
          <p className="eyebrow text-sm">{eyebrow}</p>
          {badge && (
            <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md bg-[#e8f0fe] text-[#1d4ed8]">
              {badge}
            </span>
          )}
        </div>
        <h1 className="font-bold tracking-tight text-[#0a2540] text-4xl sm:text-5xl leading-[1.1] mb-6">
          {title}
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed mb-8">{intro}</p>

        {body.map((p, i) => (
          <p key={i} className="text-slate-600 text-base leading-relaxed mb-4">
            {p}
          </p>
        ))}

        {bullets.length > 0 && (
          <ul className="mt-6 mb-8 space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-slate-700 text-base leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1d4ed8] shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-4 mt-8">
          {ctaLabel && (
            <Link
              href={ctaHref}
              className="inline-flex items-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
            >
              {ctaLabel}
            </Link>
          )}
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center px-6 py-3 rounded-md border border-slate-300 text-[#0a2540] font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
