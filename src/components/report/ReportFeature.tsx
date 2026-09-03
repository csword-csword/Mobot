import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { ReportLockup, REPORT_GRADIENT } from '@/components/report/ReportBrand';

/**
 * Hero-sized feature card for the Annual Defect Report. Styled as the
 * report's own cover so the campaign has a distinct identity on the site.
 */
const headline = [
  { v: '6,372', l: 'real bugs caught' },
  { v: '83', l: 'mobile apps' },
  { v: '11', l: 'industries' },
];

const signature = [
  { vertical: 'Social & Dating', bug: 'Notifications', x: '3.8×' },
  { vertical: 'Travel & Outdoor', bug: 'Location', x: '3.7×' },
  { vertical: 'Five categories', bug: 'of every defect found', x: '57%' },
];

export default function ReportFeature() {
  return (
    <div className="relative rounded-lg overflow-hidden bg-[#101820] text-white shadow-[0_24px_60px_rgba(16,24,32,0.35)] border border-white/10">
      {/* cover art */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full blur-3xl opacity-70 animate-float" style={{ background: REPORT_GRADIENT }} />
        <div className="absolute -bottom-28 -left-16 w-72 h-72 rounded-full bg-[#5B9DF0]/30 blur-3xl" />
        <div className="absolute inset-0 dot-grid-dark opacity-50 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]" />
      </div>
      <div className="h-1.5" style={{ background: REPORT_GRADIENT }} aria-hidden />

      <div className="relative p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <ReportLockup dark />
          <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded bg-white/10 border border-white/15 whitespace-nowrap">
            New · 2026 edition
          </span>
        </div>

        <h2 className="mt-7 text-2xl sm:text-[1.9rem] font-bold leading-tight tracking-tight">
          What real mobile bugs look like, by industry
        </h2>
        <p className="mt-3 text-white/70 text-sm leading-relaxed max-w-[30rem]">
          Twelve months of robot-executed testing on real devices, every defect reviewed by a QA analyst.
          Which categories dominate, and which ones over-index in your vertical.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {headline.map((s) => (
            <div key={s.l} className="rounded-md bg-white/[0.06] border border-white/10 px-3 py-3">
              <div className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: REPORT_GRADIENT }}>
                {s.v}
              </div>
              <div className="text-[11px] text-white/60 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>

        <ul className="mt-4 space-y-1.5">
          {signature.map((s) => (
            <li key={s.vertical} className="flex items-center gap-3 text-xs">
              <TrendingUp className="w-3.5 h-3.5 text-[#86BFF2] shrink-0" />
              <span className="text-white/60 w-[7.5rem] shrink-0">{s.vertical}</span>
              <span className="flex-1 truncate text-white/85">{s.bug}</span>
              <span className="font-mono font-bold text-white">{s.x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/resources/annual-defect-report"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#101820] font-semibold text-sm hover:bg-[#e6f0fd] transition-colors"
          >
            Download the report <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-xs text-white/50">Free · work email · 15 min read</span>
        </div>
      </div>
    </div>
  );
}
