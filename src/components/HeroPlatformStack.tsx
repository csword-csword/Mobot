import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { platformLayers } from '@/components/PlatformStack';

/** Condensed platform-stack card for the homepage hero. */
export default function HeroPlatformStack() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.10)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">The Mobot Platform</span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#e8f0fe] text-[#1d4ed8]">4 layers</span>
      </div>

      <div className="p-3 flex flex-col gap-1.5">
        {platformLayers.map((l) => (
          <div
            key={l.n}
            className={`flex items-center gap-3 rounded-md px-3 py-2.5 ${l.dark ? 'bg-[#0a2540]' : 'bg-[#f8fafc]'}`}
          >
            <span className={`h-6 w-1 rounded-full shrink-0 bg-gradient-to-b ${l.accent}`} />
            <span className={`text-[10px] font-bold tracking-[0.1em] shrink-0 ${l.dark ? 'text-[#86b6ef]' : 'text-[#1d4ed8]'}`}>
              {l.n}
            </span>
            <div className="min-w-0">
              <div className={`font-bold text-sm leading-tight truncate ${l.dark ? 'text-white' : 'text-[#0a2540]'}`}>{l.name}</div>
              <div className={`text-xs truncate ${l.dark ? 'text-white/60' : 'text-slate-500'}`}>{l.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/platform"
        className="flex items-center justify-between px-5 py-3 border-t border-slate-200 text-sm font-semibold text-[#1d4ed8] hover:text-[#1e40af] hover:bg-slate-50 transition-colors"
      >
        See the full platform
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
