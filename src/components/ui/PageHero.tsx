import Link from 'next/link';
import type { ReactNode } from 'react';

interface Cta {
  label: string;
  href: string;
  external?: boolean;
}

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  badge?: string;
  primary?: Cta;
  secondary?: Cta;
  /** Optional visual rendered to the right on large screens. */
  aside?: ReactNode;
  /** Center the text (no aside). */
  center?: boolean;
  /** Use the navy hero treatment. */
  dark?: boolean;
  maxWidth?: string;
}

export default function PageHero({
  eyebrow,
  title,
  intro,
  badge,
  primary,
  secondary,
  aside,
  center,
  dark,
  maxWidth = 'max-w-[86rem]',
}: PageHeroProps) {
  const shell = dark
    ? 'bg-[#0a2540] border-b border-white/10'
    : 'bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200';
  const titleColor = dark ? 'text-white' : 'text-[#0a2540]';
  const introColor = dark ? 'text-white/70' : 'text-slate-600';
  const eyebrowClass = dark ? 'eyebrow text-sm !text-[#86b6ef]' : 'eyebrow text-sm';

  return (
    <section className={shell}>
      <div
        className={`mx-auto ${maxWidth} px-6 py-20 lg:py-28 ${
          aside ? 'grid lg:grid-cols-2 gap-14 items-center' : ''
        } ${center ? 'text-center' : ''}`}
      >
        <div className={center ? 'mx-auto max-w-[46rem]' : 'max-w-[44rem]'}>
          <div className={`flex items-center gap-3 mb-5 ${center ? 'justify-center' : ''}`}>
            <p className={`${eyebrowClass} hero-line hero-line-1`}>{eyebrow}</p>
            {badge && (
              <span className="hero-line hero-line-1 text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md bg-[#e8f0fe] text-[#1d4ed8]">
                {badge}
              </span>
            )}
          </div>
          <h1 className={`hero-line hero-line-2 font-bold tracking-tight ${titleColor} text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] mb-6`}>
            {title}
          </h1>
          {intro && (
            <p className={`hero-line hero-line-3 ${introColor} text-lg leading-relaxed ${center ? 'mx-auto' : ''} max-w-[40rem]`}>
              {intro}
            </p>
          )}
          {(primary || secondary) && (
            <div className={`hero-line hero-line-4 flex flex-wrap gap-4 mt-9 ${center ? 'justify-center' : ''}`}>
              {primary && (
                <Link
                  href={primary.href}
                  target={primary.external ? '_blank' : undefined}
                  rel={primary.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
                >
                  {primary.label}
                </Link>
              )}
              {secondary && (
                <Link
                  href={secondary.href}
                  target={secondary.external ? '_blank' : undefined}
                  rel={secondary.external ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center px-6 py-3 rounded-md border font-semibold transition-colors text-sm ${
                    dark
                      ? 'border-white/25 text-white hover:bg-white/10'
                      : 'border-slate-300 text-[#0a2540] hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          )}
        </div>
        {aside && <div className="hero-line hero-line-5">{aside}</div>}
      </div>
    </section>
  );
}
