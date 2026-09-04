import { Bot } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import type { MethodologyRow } from '@/data/compare';

/**
 * Head-to-head methodology table. Used where both vendors claim the same
 * headline capability and the difference is in how the test is executed.
 */
export default function MethodologyCompare({
  competitor,
  rows,
}: {
  competitor: string;
  rows: MethodologyRow[];
}) {
  return (
    <Reveal>
      <div className="rounded-lg border border-slate-200 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[52rem] border-collapse text-sm">
            <thead>
              <tr className="bg-[#0a2540] text-white">
                <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-white/60 w-[16%]">
                  What runs
                </th>
                <th className="px-6 py-4 text-left w-[42%]">
                  <div className="font-bold">{competitor}</div>
                </th>
                <th className="px-6 py-4 text-left brand-gradient w-[42%]">
                  <div className="font-bold inline-flex items-center gap-2">
                    <Bot className="w-4 h-4" /> Mobot
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 ? 'bg-[#f8fafc]' : 'bg-white'}>
                  <td className="px-6 py-5 font-bold text-[#0a2540] align-top border-t border-slate-200">{r.label}</td>
                  <td className="px-6 py-5 text-slate-500 align-top border-t border-slate-200 leading-relaxed">{r.theirs}</td>
                  <td className="px-6 py-5 text-[#0a2540] align-top border-t border-slate-200 leading-relaxed bg-[#e8f0fe]/40 font-medium">
                    {r.ours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  );
}
