import { CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const steps = [
  { label: 'Tap promo push notification', status: 'pass' },
  { label: 'Deep link resolves to promo screen', status: 'fail' },
  { label: 'Add promoted item to cart', status: 'skip' },
] as const;

/**
 * Hero visual: the robot fleet running, with a verified-defect card layered
 * over it — physical proof plus the outcome the run produces.
 */
export default function HeroRunVisual() {
  return (
    <div className="relative">
      <div className="rounded-lg border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.14)] overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <span className="text-[11px] font-mono text-slate-500 truncate">robot cell 07 · iPhone 15 · iOS 18.2</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-red-50 text-red-700 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-blink" /> Live
          </span>
        </div>
        <video className="w-full aspect-video object-cover bg-[#0a2540]" autoPlay muted loop playsInline>
          <source src="/videos/mobot-optimized-transcode.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Verified defect, layered over the run */}
      <Reveal variant="fade" delay={500} className="lg:absolute lg:-bottom-8 lg:-left-10 lg:w-[19rem] mt-4 lg:mt-0">
        <div className="rounded-lg border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.18)] p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500">Run 1,284 · 41 steps</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-red-700">P0</span>
          </div>
          <ul className="space-y-1.5">
            {steps.map((s, i) => (
              <li
                key={s.label}
                className="layer-in flex items-center gap-2 text-xs"
                style={{ animationDelay: `${700 + i * 260}ms` }}
              >
                {s.status === 'pass' && <CheckCircle2 className="w-3.5 h-3.5 text-[#15803d] shrink-0" />}
                {s.status === 'fail' && <XCircle className="w-3.5 h-3.5 text-red-600 shrink-0" />}
                {s.status === 'skip' && <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-300 shrink-0" />}
                <span
                  className={
                    s.status === 'fail'
                      ? 'font-semibold text-red-700'
                      : s.status === 'skip'
                        ? 'text-slate-400'
                        : 'text-slate-700'
                  }
                >
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
          <div
            className="layer-in mt-3 pt-3 border-t border-slate-200 flex items-start gap-2"
            style={{ animationDelay: '1500ms' }}
          >
            <ShieldCheck className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
            <p className="text-xs text-[#0a2540] leading-snug">
              <span className="font-bold">Verified by a QA analyst.</span>{' '}
              <span className="text-slate-500">Video, device log, and repro steps attached.</span>
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
