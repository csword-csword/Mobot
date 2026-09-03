import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ReportMark } from '@/components/report/ReportBrand';

/** Site-wide campaign banner for the Annual Defect Report. Sits above the navbar. */
export const ANNOUNCEMENT_HEIGHT = 44;

export default function AnnouncementBar() {
  return (
    <Link
      href="/resources/annual-defect-report"
      className="group relative block h-[44px] overflow-hidden bg-[#101820] text-white"
      aria-label="Download the Mobot Annual Defect Report 2026"
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{ background: 'linear-gradient(100deg, #101820 0%, #2a2560 35%, #6C5CE7 62%, #5B9DF0 100%)' }}
        aria-hidden
      />
      <div className="absolute inset-0 dot-grid-dark opacity-40 [mask-image:linear-gradient(90deg,transparent,black_40%,black_60%,transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-[86rem] h-full px-4 sm:px-6 flex items-center justify-center gap-3 sm:gap-4 text-sm">
        <ReportMark size={24} className="shrink-0 rounded-md" />
        <span className="font-bold whitespace-nowrap">Annual Defect Report 2026</span>
        <span className="hidden md:inline text-white/75">
          6,372 real bugs across 83 apps and 11 industries. See what actually breaks in your vertical.
        </span>
        <span className="hidden sm:inline md:hidden text-white/75">6,372 real bugs. 83 apps. 11 industries.</span>
        <span className="inline-flex items-center gap-1 font-bold whitespace-nowrap px-3 py-1 rounded-md bg-white text-[#101820] group-hover:bg-[#e6f0fd] transition-colors">
          Download <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
