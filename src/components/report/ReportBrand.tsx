/**
 * Brand mark and lockup for the Mobot Annual Defect Report.
 * Palette is lifted from the report itself (indigo → violet → blue), so the
 * banner, hero card, and the report page read as one campaign.
 */

export const REPORT_GRADIENT = 'linear-gradient(120deg, #8B7BE8 0%, #6C5CE7 38%, #5B9DF0 100%)';

export function ReportMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="adr-g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8B7BE8" />
          <stop offset="0.45" stopColor="#6C5CE7" />
          <stop offset="1" stopColor="#5B9DF0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#adr-g)" />
      {/* scope ring */}
      <circle cx="32" cy="32" r="15" stroke="white" strokeWidth="3" />
      {/* crosshair ticks */}
      <path d="M32 9v8M32 47v8M9 32h8M47 32h8" stroke="white" strokeWidth="3" strokeLinecap="round" />
      {/* the defect */}
      <circle cx="37" cy="27" r="5" fill="#101820" />
      <circle cx="37" cy="27" r="5" fill="white" fillOpacity="0.92" />
      <circle cx="37" cy="27" r="2.4" fill="#E84A5F" />
    </svg>
  );
}

export function ReportLockup({ dark, compact }: { dark?: boolean; compact?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3">
      <ReportMark size={compact ? 32 : 44} className="shrink-0 shadow-[0_6px_16px_rgba(108,92,231,0.35)] rounded-[10px]" />
      <div className="leading-none">
        <div className={`text-[10px] font-bold uppercase tracking-[0.18em] ${dark ? 'text-white/60' : 'text-slate-500'}`}>Mobot</div>
        <div className={`${compact ? 'text-sm' : 'text-base'} font-bold mt-1 ${dark ? 'text-white' : 'text-[#0a2540]'}`}>
          Annual Defect Report{' '}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: REPORT_GRADIENT }}>
            2026
          </span>
        </div>
      </div>
    </div>
  );
}
