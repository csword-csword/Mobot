import { Fragment } from 'react';
import { Check, Minus, X } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { matrixGroups, competitorMeta, type CompetitorKey, type Level } from '@/data/compare';

function Cell({ level, highlight }: { level: Level; highlight?: boolean }) {
  if (level === 'yes') {
    return (
      <span
        className={`inline-flex w-7 h-7 items-center justify-center rounded-full ${
          highlight ? "brand-gradient text-white" : "bg-[#e8f0fe] text-[#1d4ed8]"
        }`}
        aria-label="Yes"
      >
        <Check className="w-4 h-4" strokeWidth={3} />
      </span>
    );
  }
  if (level === 'partial') {
    return (
      <span
        className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-amber-50 text-amber-600 border border-amber-200"
        aria-label="Partial"
      >
        <Minus className="w-4 h-4" strokeWidth={3} />
      </span>
    );
  }
  return (
    <span
      className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-slate-100 text-slate-400"
      aria-label="No"
    >
      <X className="w-3.5 h-3.5" strokeWidth={3} />
    </span>
  );
}

interface FeatureMatrixProps {
  /** Which columns to show, in order. Mobot is always first. */
  columns?: CompetitorKey[];
  /** Which groups to include (by heading). Defaults to all. */
  groups?: string[];
  title?: string;
}

export default function FeatureMatrix({
  columns = ['mobot', 'appium', 'maestro', 'qawolf'],
  groups,
  title,
}: FeatureMatrixProps) {
  const shown = groups ? matrixGroups.filter((g) => groups.includes(g.heading)) : matrixGroups;
  const others = columns.filter((c) => c !== 'mobot');
  const colW = others.length >= 3 ? 'w-[15%]' : 'w-[18%]';

  return (
    <Reveal>
      <div className="rounded-lg border border-slate-200 bg-white p-6 md:p-8 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
        {title && <h3 className="text-xl font-bold text-[#0a2540] mb-6">{title}</h3>}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse table-fixed">
            <colgroup>
              <col />
              <col className="w-[17%]" />
              {others.map((c) => (
                <col key={c} className={colW} />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th />
                <th className="px-2 pb-4 text-center align-bottom rounded-t-md border border-b-0 border-[#6d3fe0]/40 bg-[#efeafd]">
                  <div className="text-sm font-bold text-[#4f2bc2]">Mobot</div>
                  <div className="text-[11px] text-slate-500 mt-1 leading-snug">{competitorMeta.mobot.sub}</div>
                </th>
                {others.map((c) => (
                  <th key={c} className="px-2 pb-4 text-center align-bottom">
                    <div className="text-sm font-bold text-[#0a2540]">{competitorMeta[c].name}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-snug">{competitorMeta[c].sub}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {shown.map((group) => (
                <Fragment key={group.heading}>
                  <tr>
                    <td colSpan={2 + others.length} className="pt-6 pb-2 text-xs font-bold uppercase tracking-[0.1em] text-[#1d4ed8]">
                      {group.heading}
                    </td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label} className="border-t border-slate-100">
                      <td className="py-3 pr-4">
                        <div className="text-sm text-slate-700">{row.label}</div>
                        {row.note && <div className="text-xs text-slate-400 mt-0.5">{row.note}</div>}
                      </td>
                      <td className="py-3 px-2 text-center border-x border-[#6d3fe0]/40 bg-[#efeafd]/50">
                        <Cell level={row.values.mobot} highlight />
                      </td>
                      {others.map((c) => (
                        <td key={c} className="py-3 px-2 text-center">
                          <Cell level={row.values[c]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
              <tr>
                <td />
                <td className="rounded-b-md border border-t-0 border-[#6d3fe0]/40 bg-[#efeafd] h-2" />
                <td colSpan={others.length} />
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap gap-6 mt-6 text-xs text-slate-500">
          <span className="flex items-center gap-2"><Cell level="yes" /> Supported</span>
          <span className="flex items-center gap-2"><Cell level="partial" /> Partial / with limits</span>
          <span className="flex items-center gap-2"><Cell level="no" /> Not supported</span>
        </div>
        <p className="mt-6 text-xs text-slate-400 leading-relaxed">
          Comparisons describe each approach&apos;s category — scripted frameworks that drive an app
          through software, and software-based managed services that run on emulators, simulators, or
          cloud devices — as of publication. Capabilities of individual tools change; verify specifics with each vendor.
        </p>
      </div>
    </Reveal>
  );
}
