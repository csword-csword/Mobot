import Image from 'next/image';
import { CheckCircle2, XCircle, CircleDashed } from 'lucide-react';
import StepThumb from '@/components/report/StepThumb';
import { sampleReport, type Step } from '@/data/sampleReport';

function StatusPill({ status }: { status: Step['status'] }) {
  if (status === 'passed') return <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-emerald-50 text-emerald-700"><CheckCircle2 className="w-3 h-3" /> Passed</span>;
  if (status === 'failed') return <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-red-50 text-red-700"><XCircle className="w-3 h-3" /> Failed</span>;
  return <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-slate-100 text-slate-500"><CircleDashed className="w-3 h-3" /> Skipped</span>;
}

const toneClass = { p0: 'text-red-600', p1: 'text-amber-600' } as const;

/** Full sanitized sample report, mirroring the structure of a real Mobot platform report. */
export default function ReportView() {
  const r = sampleReport;
  const shown = r.groups.reduce((n, g) => n + g.steps.length, 0);

  return (
    <article className="report-view rounded-lg border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.10)] overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-center gap-2 py-4 brand-gradient text-white">
        <span className="text-xl font-bold">Report</span>
        <Image src="/images/Mobot-Logo.svg" alt="Mobot" width={70} height={20} className="opacity-90" />
      </div>

      {/* Run metadata */}
      <div className="px-6 md:px-8 py-6 border-b border-slate-200">
        <span className="inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded bg-red-50 text-red-700 mb-3">{r.status}</span>
        <h2 className="text-xl md:text-2xl font-bold text-[#0a2540] leading-snug">{r.title}</h2>
        <p className="text-slate-500 text-sm font-mono mt-1">{r.date}</p>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#0a2540]">
          <span><span className="font-bold">Customer:</span> {r.customer}</span>
          <span><span className="font-bold">App Version:</span> {r.appVersion}</span>
          <span><span className="font-bold">Actions:</span> {r.actions}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-sm font-mono px-3 py-1.5 rounded bg-slate-100 text-[#0a2540]">{r.device}</span>
          <span className="text-sm font-mono px-3 py-1.5 rounded bg-slate-100 text-[#0a2540]">{r.os}</span>
        </div>
      </div>

      {/* Analytics */}
      <div className="px-6 md:px-8 py-6 border-b border-slate-200">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4ed8] mb-4">Analytics · last 90 days</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {r.analytics.map((a) => (
            <div key={a.label} className="rounded-md border border-slate-200 p-3">
              <div className="text-[10px] font-bold uppercase tracking-wide text-slate-500">{a.label}</div>
              <div className={`text-2xl font-bold mt-1 ${a.tone ? toneClass[a.tone] : 'text-[#0a2540]'}`}>{a.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Observations */}
      <div className="px-6 md:px-8 py-6 border-b border-slate-200">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4ed8] mb-4">Observations · {r.observations.length}</p>
        {r.observations.map((o) => (
          <div key={o.text} className="rounded-md border border-slate-200 p-5 max-w-[40rem]">
            <span className="inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded bg-red-50 text-red-700 mb-3">{o.priority}</span>
            <p className="text-[#0a2540] font-semibold leading-snug">{o.text}</p>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-slate-500">{o.occurrences} occurrence</span>
              <a href={`#step-${o.stepRef}`} className="text-[#1d4ed8] font-semibold">Show steps</a>
            </div>
            <div className="mt-4 rounded-md bg-[#f8fafc] border border-slate-200 p-3 text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-[#0a2540]">Analyst note:</span> {o.analystNote}
            </div>
          </div>
        ))}
      </div>

      {/* Steps */}
      <div className="px-6 md:px-8 py-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4ed8] mb-6">Test steps · {r.totalSteps}</p>
        {r.groups.map((g) => (
          <div key={g.title} className="mb-10 last:mb-0">
            <h3 className="text-lg font-bold text-[#0a2540] uppercase tracking-wide pb-2 mb-6 border-b-2 border-[#1d4ed8]">{g.title}</h3>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8">
              {g.steps.map((s) => (
                <div key={s.n} id={`step-${s.n}`} className="flex gap-4 scroll-mt-24">
                  <StepThumb screen={s.screen} failed={s.status === 'failed'} />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-sm font-bold text-[#1d4ed8]">STEP {s.n}</span>
                      <StatusPill status={s.status} />
                    </div>
                    <p className="text-sm text-[#0a2540] leading-relaxed">{s.text}</p>
                    {s.note && <p className="mt-1.5 text-xs text-red-700 leading-relaxed">{s.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="mt-8 text-xs text-slate-400">
          Showing {shown} of {r.totalSteps} steps. Every step in a real report includes the device screenshot at
          that moment; failed steps also attach video, device log, and network log.
        </p>
      </div>
    </article>
  );
}
