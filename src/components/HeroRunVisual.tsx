import { CheckCircle2, XCircle, ShieldCheck, AlertTriangle } from 'lucide-react';
import StepThumb from '@/components/report/StepThumb';
import type { Step } from '@/data/sampleReport';

const steps: { n: number; screen: Step['screen']; status: Step['status']; text: string; note?: string }[] = [
  { n: 32, screen: 'tasks', status: 'passed', text: 'Enter the task name and tap Save.' },
  {
    n: 33,
    screen: 'crash',
    status: 'failed',
    text: 'Tap “Add another Facet” to add a second task.',
    note: 'App terminated and returned to the home screen.',
  },
];

function StatusPill({ status }: { status: Step['status'] }) {
  if (status === 'passed')
    return (
      <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
        <CheckCircle2 className="w-2.5 h-2.5" /> Passed
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-red-50 text-red-700">
      <XCircle className="w-2.5 h-2.5" /> Failed
    </span>
  );
}

/**
 * Hero visual: one run, told as a sequence inside a single frame — the robot
 * executing on a real device, the moment a defect is detected, then the
 * verified report that lands with the team. Driven by CSS keyframes on a
 * shared 14s timeline (see globals.css), so it needs no client JS and
 * settles on the report under prefers-reduced-motion.
 */
export default function HeroRunVisual() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.14)] overflow-hidden">
      {/* Frame header — constant across the sequence */}
      <div className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b border-slate-200 bg-slate-50">
        <div>
          <div className="text-xs font-bold text-[#0a2540] leading-tight">Acme Home Services</div>
          <div className="text-[10px] font-mono text-slate-400 leading-tight mt-0.5">Test run 132 · Sep 2, 2026</div>
        </div>
        <div className="ml-auto relative h-5 min-w-[6.5rem]">
          <span className="run-seq-running absolute inset-0 flex items-center justify-end gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#15803d] animate-blink" /> Running
          </span>
          <span className="run-seq-done absolute inset-0 flex items-center justify-end gap-1.5 text-[10px] font-bold uppercase tracking-wide text-red-700">
            <span className="px-1.5 py-0.5 rounded bg-red-50">1 defect</span>
          </span>
        </div>
      </div>

      {/* Body — the sequence */}
      <div className="relative h-[23rem] sm:h-[25rem] lg:h-[26rem] bg-[#0a2540]">
        {/* 1. The robot running on a real device */}
        <div className="run-seq-video absolute inset-0">
          <video
            className="w-full h-full object-cover"
            poster="/images/lab/DSC_3399.webp"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/mobot-optimized-transcode.mp4" type="video/mp4" />
          </video>

          {/* 2. The moment it finds something */}
          <div className="run-seq-alert absolute inset-0 flex items-center justify-center bg-[#0a2540]/55">
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-lg bg-white shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
              <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-red-50 shrink-0">
                <span className="absolute inset-0 rounded-full bg-red-400/40 animate-pulse-ring" />
                <AlertTriangle className="relative w-4 h-4 text-red-600" />
              </span>
              <div>
                <div className="text-sm font-bold text-[#0a2540] leading-tight">Defect detected</div>
                <div className="text-[11px] text-slate-500 leading-tight mt-0.5">Step 33 · app terminated</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. The verified report that reaches the team */}
        <div className="run-seq-report absolute inset-0 bg-white flex flex-col">
          <div className="px-5 pt-4 pb-2 flex items-center gap-2 border-b border-slate-100">
            <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-red-50 text-red-700">Failed</span>
            <span className="text-xs font-bold text-[#0a2540] truncate">Add tasks to the structure group</span>
            <span className="ml-auto text-[10px] font-mono text-slate-400 shrink-0 hidden sm:inline">41 steps</span>
          </div>

          <div className="flex-1 p-4 sm:p-5 space-y-2.5 sm:space-y-3 overflow-hidden">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-3.5">
                {/* Scaled into a fixed box so the row height follows the visual size */}
                <div className="w-[3.2rem] h-[6.8rem] sm:w-[3.9rem] sm:h-[8.2rem] shrink-0 overflow-hidden">
                  <div className="scale-[0.6] sm:scale-[0.72] origin-top-left">
                    <StepThumb screen={s.screen} failed={s.status === 'failed'} />
                  </div>
                </div>
                <div className="min-w-0 pt-0.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#1d4ed8]">STEP {s.n}</span>
                    <StatusPill status={s.status} />
                  </div>
                  <p className="text-xs text-[#0a2540] leading-snug">{s.text}</p>
                  {s.note && <p className="mt-1 text-[11px] text-red-700 leading-snug">{s.note}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="px-5 py-3 border-t border-slate-200 bg-[#f8fafc] flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
            <p className="text-xs text-[#0a2540] leading-snug">
              <span className="font-bold">P0 verified by a QA analyst.</span>{' '}
              <span className="text-slate-500">Video, device log, and repro steps attached.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Robot identifier — constant across the sequence */}
      <div className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#0a2540]">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-blink shrink-0" />
        <span className="text-[10px] font-mono text-white/70 truncate">robot cell 07 · iPhone 13 · iOS 27.0</span>
        <span className="ml-auto text-[10px] font-mono text-white/40 shrink-0 hidden sm:inline">New York lab</span>
      </div>
    </div>
  );
}
