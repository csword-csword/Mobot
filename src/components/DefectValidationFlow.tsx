import { FileSearch, Repeat, Video, UserCheck, XCircle, CheckCircle2, BadgeCheck } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

/**
 * Animated "what happens between a failed step and a verified defect" graphic.
 * A single failed step enters at the top; each validation stage slides in
 * with a stagger; noise is rejected on the way; a verified defect exits.
 */
const stages = [
  {
    icon: FileSearch,
    title: 'Forensic review',
    body: 'Device log, network log, and per-step screenshots are read against the failure timestamp.',
    chips: ['device.log 00:04.2', 'HTTP 500 /tasks', '3 screenshots'],
  },
  {
    icon: Repeat,
    title: 'Reproduction',
    body: 'The failing step is re-run on a second device, OS version, and app state.',
    chips: ['iPhone 13 · iOS 27 ✓', 'Pixel 8 · Android 16 ✓', 'cold start ✓'],
  },
  {
    icon: Video,
    title: 'Video evidence',
    body: 'Recorded on the physical device as the failure happens, with the robot’s tap in frame.',
    chips: ['▶ 00:03.8 – 00:05.1'],
  },
  {
    icon: UserCheck,
    title: 'Analyst verdict',
    body: 'A QA analyst reads the evidence and decides: real defect, flaky run, or intended change.',
    chips: ['Confirmed · P0 · crash on tap'],
  },
];

export default function DefectValidationFlow() {
  return (
    <Reveal variant="fade" className="relative">
      <div className="relative rounded-lg border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.10)] p-5 sm:p-6 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" aria-hidden />
        <div className="relative">
          {/* Signal */}
          <div className="layer-in rounded-md border border-red-200 bg-red-50 px-4 py-3 flex items-center justify-between gap-3" style={{ animationDelay: '0ms' }}>
            <div className="flex items-center gap-2 min-w-0">
              <XCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span className="text-sm font-semibold text-red-800 truncate">Step 33 failed · Tap “Add another Facet”</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wide text-red-700/70 whitespace-nowrap">candidate</span>
          </div>

          {/* Stages */}
          <ol className="mt-2 relative">
            <div className="absolute left-[1.15rem] top-0 bottom-0 w-px bg-slate-200" aria-hidden />
            {stages.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="layer-in relative pl-12 py-3" style={{ animationDelay: `${180 + i * 220}ms` }}>
                  <div className="absolute left-0 top-3 w-[2.3rem] h-[2.3rem] rounded-md bg-[#1d4ed8] text-white flex items-center justify-center ring-4 ring-white">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-[#0a2540] text-sm">{s.title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">{s.body}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {s.chips.map((c) => (
                      <span key={c} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-[#0a2540] border border-slate-200">
                        {c}
                      </span>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Rejected noise */}
          <div className="layer-in mt-1 grid grid-cols-3 gap-2" style={{ animationDelay: '1120ms' }}>
            {['Flaky run', 'Copy change', 'Env timeout'].map((n) => (
              <div key={n} className="rounded-md border border-dashed border-slate-300 px-2 py-1.5 text-center text-[10px] font-semibold text-slate-400 line-through decoration-slate-300">
                {n}
              </div>
            ))}
          </div>

          {/* Verified output */}
          <div className="layer-in mt-3 rounded-md brand-gradient text-white px-4 py-3 flex items-center justify-between gap-3" style={{ animationDelay: '1300ms' }}>
            <div className="flex items-center gap-2 min-w-0">
              <BadgeCheck className="w-4 h-4 shrink-0" />
              <span className="text-sm font-semibold truncate">Verified defect → Jira MOB-2481</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap">
              <CheckCircle2 className="w-3 h-3" /> ready to fix
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
