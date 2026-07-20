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
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-[48rem] px-6 py-32 lg:py-40">
        <div className="flex items-center gap-3 mb-5">
          <p className="text-white/40 text-xs uppercase tracking-[0.2em]">{eyebrow}</p>
          {badge && (
            <span className="text-xs uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#3da6fc]/10 text-[#3da6fc]">
              {badge}
            </span>
          )}
        </div>
        <h1 className="font-bold tracking-tight text-4xl sm:text-5xl leading-[1.1] mb-6">
          {title}
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-8">{intro}</p>

        {body.map((p, i) => (
          <p key={i} className="text-white/60 text-base leading-relaxed mb-4">
            {p}
          </p>
        ))}

        {bullets.length > 0 && (
          <ul className="mt-6 mb-8 space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-white/70 text-base leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3da6fc] shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-4 mt-8">
          {ctaLabel && (
            <Link
              href={ctaHref}
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
            >
              {ctaLabel}
            </Link>
          )}
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-sm"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
