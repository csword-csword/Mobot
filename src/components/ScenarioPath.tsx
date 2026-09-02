import { Fragment } from 'react';
import Reveal from '@/components/ui/Reveal';
import type { Hop } from '@/data/solutions';

/**
 * Data-driven hop diagram: the physical path Mobot verifies for a scenario,
 * with the step simulators stub called out in red.
 */
export default function ScenarioPath({ title, hops }: { title: string; hops: Hop[] }) {
  return (
    <Reveal>
      <div className="rounded-lg border border-slate-200 bg-white p-8 md:p-12 shadow-[0_1px_3px_rgba(15,23,42,0.08)] overflow-x-auto">
        <p className="eyebrow text-xs mb-8 text-center">{title}</p>
        <div className="flex items-start gap-2 md:gap-3 min-w-[760px] md:min-w-0">
          {hops.map((h, i) => (
            <Fragment key={h.label}>
              <div className="flex-1 flex flex-col items-center text-center px-1 layer-in" style={{ animationDelay: `${i * 120}ms` }}>
                <span
                  className={
                    'w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold mb-3 shrink-0 ' +
                    (h.warn ? 'border-red-500/60 text-red-600 bg-red-50' : 'border-[#1d4ed8]/60 text-[#1d4ed8] bg-[#e8f0fe]')
                  }
                >
                  {i + 1}
                </span>
                <h3 className="text-sm font-bold text-[#0a2540] mb-2">{h.label}</h3>
                <p className={'text-xs leading-relaxed ' + (h.warn ? 'text-red-700/80' : 'text-slate-500')}>{h.detail}</p>
              </div>
              {i < hops.length - 1 && <div className="pt-3.5 text-slate-300 shrink-0">&rarr;</div>}
            </Fragment>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
