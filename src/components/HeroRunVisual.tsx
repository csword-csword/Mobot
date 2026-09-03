import { CheckCircle2, XCircle, CircleDashed, ShieldCheck } from 'lucide-react';
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
  if (status === 'failed')
    return (
      <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-red-50 text-red-700">
        <XCircle className="w-2.5 h-2.5" /> Failed
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
      <CircleDashed className="w-2.5 h-2.5" /> Skipped
    </span>
  );
}

/**
 * Hero visual: an excerpt of a real (sanitized) defect report as the base,
 * with the robot that produced it running in an inset panel over the corner.
 */
export default function HeroRunVisual() {
  return (
    <div className="relative">
      <div className="rounded-lg border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.14)] overflow-hidden">
        {/* Report header */}
        <div className="px-5 py-3.5 border-b border-slate-200 bg-slate-50 flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-red-50 text-red-700 shrink-0">
            Failed
          </span>
          <span className="text-xs font-bold text-[#0a2540] truncate">Add tasks to the structure group</span>
          <span className="ml-auto text-[10px] font-mono text-slate-400 shrink-0 hidden sm:inline lg:hidden">41 steps</span>
        </div>

        {/* Steps */}
        <div className="p-5 space-y-3">
          {steps.map((s, i) => (
            <div key={s.n} className="hero-line flex gap-3.5" style={{ animationDelay: `${300 + i * 280}ms` }}>
              {/* Scaled into a fixed box so the row height follows the visual size */}
              <div className="w-[3.9rem] h-[8.2rem] shrink-0 overflow-hidden">
                <div className="scale-[0.72] origin-top-left">
                  <StepThumb screen={s.screen} failed={s.status === 'failed'} />
                </div>
              </div>
              <div className={`min-w-0 pt-0.5 ${i === 0 ? 'lg:pr-44' : ''}`}>
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

        {/* Analyst verdict */}
        <div
          className="hero-line px-5 py-3.5 border-t border-slate-200 bg-[#f8fafc] flex items-start gap-2"
          style={{ animationDelay: '1200ms' }}
        >
          <ShieldCheck className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
          <p className="text-xs text-[#0a2540] leading-snug">
            <span className="font-bold">P0 verified by a QA analyst.</span>{' '}
            <span className="text-slate-500">Video, device log, and repro steps attached.</span>
          </p>
        </div>
      </div>

      {/* The robot that produced it, running */}
      <div
        className="hero-line mt-4 lg:mt-0 lg:absolute lg:-top-14 lg:-right-3 lg:w-[13rem] xl:-right-12 xl:w-[15rem] z-10"
        style={{ animationDelay: '1400ms' }}
      >
        <div className="rounded-lg border-2 border-white bg-[#0a2540] shadow-[0_16px_36px_rgba(15,23,42,0.28)] overflow-hidden">
          <video
            className="w-full aspect-[4/3] object-cover"
            poster="/images/lab/DSC_3399.webp"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/mobot-optimized-transcode.mp4" type="video/mp4" />
          </video>
          <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0a2540]">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-blink shrink-0" />
            <span className="text-[10px] font-mono text-white/70 truncate">robot cell 07</span>
          </div>
        </div>
      </div>
    </div>
  );
}
