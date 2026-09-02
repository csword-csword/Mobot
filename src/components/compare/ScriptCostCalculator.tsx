'use client';

import { useMemo, useState } from 'react';

interface Field {
  key: keyof Inputs;
  label: string;
  hint: string;
  min: number;
  max: number;
  step: number;
  unit?: string;
}

interface Inputs {
  tests: number;
  releasesPerMonth: number;
  breakPct: number;
  hoursPerFix: number;
  newTestsPerMonth: number;
  hoursPerNewTest: number;
  triageHoursPerWeek: number;
  hourlyRate: number;
}

const fields: Field[] = [
  { key: 'tests', label: 'End-to-end tests in your suite', hint: 'UI-level tests, not unit tests', min: 25, max: 2000, step: 25 },
  { key: 'releasesPerMonth', label: 'Releases per month', hint: 'Builds that change UI or flows', min: 1, max: 60, step: 1 },
  { key: 'breakPct', label: 'Tests needing repair per release', hint: 'Selector, timing, and flow changes', min: 1, max: 50, step: 1, unit: '%' },
  { key: 'hoursPerFix', label: 'Hours to repair one test', hint: 'Diagnose, fix, re-run, review', min: 0.25, max: 8, step: 0.25, unit: 'h' },
  { key: 'newTestsPerMonth', label: 'New tests authored per month', hint: 'Coverage for new features', min: 0, max: 200, step: 5 },
  { key: 'hoursPerNewTest', label: 'Hours to author one test', hint: 'Write, stabilize, wire into CI', min: 0.5, max: 24, step: 0.5, unit: 'h' },
  { key: 'triageHoursPerWeek', label: 'Weekly hours triaging flaky failures', hint: 'Red builds that weren’t bugs', min: 0, max: 60, step: 1, unit: 'h' },
  { key: 'hourlyRate', label: 'Loaded engineering rate', hint: 'Your number — we don’t assume one', min: 40, max: 300, step: 5, unit: '$' },
];

const defaults: Inputs = {
  tests: 300,
  releasesPerMonth: 12,
  breakPct: 12,
  hoursPerFix: 1.5,
  newTestsPerMonth: 20,
  hoursPerNewTest: 4,
  triageHoursPerWeek: 6,
  hourlyRate: 95,
};

function fmt(n: number) {
  return Math.round(n).toLocaleString('en-US');
}

export default function ScriptCostCalculator() {
  const [v, setV] = useState<Inputs>(defaults);

  const out = useMemo(() => {
    const maintenance = v.tests * (v.breakPct / 100) * v.hoursPerFix * v.releasesPerMonth * 12;
    const authoring = v.newTestsPerMonth * v.hoursPerNewTest * 12;
    const triage = v.triageHoursPerWeek * 52;
    const total = maintenance + authoring + triage;
    return {
      maintenance,
      authoring,
      triage,
      total,
      fte: total / 1800,
      cost: total * v.hourlyRate,
    };
  }, [v]);

  const set = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setV((s) => ({ ...s, [key]: Number(e.target.value) }));

  const bars = [
    { label: 'Repairing broken scripts', hours: out.maintenance, color: 'bg-[#dc2626]' },
    { label: 'Authoring new scripts', hours: out.authoring, color: 'bg-[#f59e0b]' },
    { label: 'Triaging flaky failures', hours: out.triage, color: 'bg-[#9085e9]' },
  ];
  const maxBar = Math.max(...bars.map((b) => b.hours), 1);

  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)] overflow-hidden">
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-slate-200">
          <h3 className="text-xl font-bold text-[#0a2540]">What does your scripted suite really cost?</h3>
          <p className="text-slate-500 text-sm mt-1 mb-6">
            Adjust the sliders to your team. Every input is yours; nothing is assumed.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
            {fields.map((f) => (
              <label key={f.key} className="block">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-semibold text-[#0a2540]">{f.label}</span>
                  <span className="text-sm font-bold text-[#1d4ed8] tabular-nums">
                    {f.unit === '$' ? '$' : ''}
                    {v[f.key]}
                    {f.unit && f.unit !== '$' ? f.unit : ''}
                  </span>
                </div>
                <input
                  type="range"
                  min={f.min}
                  max={f.max}
                  step={f.step}
                  value={v[f.key]}
                  onChange={set(f.key)}
                  className="mt-2 w-full accent-[#1d4ed8]"
                  aria-label={f.label}
                />
                <div className="text-[11px] text-slate-400 mt-1">{f.hint}</div>
              </label>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setV(defaults)}
            className="mt-6 text-xs font-semibold text-slate-500 hover:text-[#0a2540] transition-colors"
          >
            Reset to defaults
          </button>
        </div>

        <div className="p-6 md:p-8 bg-[#f8fafc]">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400 mb-2">Scripted suite · per year</div>
          <div className="text-5xl font-bold text-[#0a2540] tabular-nums">{fmt(out.total)}<span className="text-2xl text-slate-400 font-bold"> h</span></div>
          <div className="text-slate-600 text-sm mt-1">
            ≈ <span className="font-bold text-[#0a2540]">{out.fte.toFixed(1)} engineers</span> full time ·{' '}
            <span className="font-bold text-[#0a2540]">${fmt(out.cost)}</span> at your rate
          </div>

          <div className="mt-8 space-y-4">
            {bars.map((b) => (
              <div key={b.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-600">{b.label}</span>
                  <span className="font-semibold text-[#0a2540] tabular-nums">{fmt(b.hours)} h</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${b.color} transition-all duration-500`}
                    style={{ width: `${Math.max(2, (b.hours / maxBar) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-md border-2 border-[#1d4ed8] bg-white p-5">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#1d4ed8] mb-1">With Mobot</div>
            <div className="text-4xl font-bold text-[#0a2540]">0<span className="text-xl text-slate-400"> h</span></div>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              Authoring, maintenance through every UI change, execution on real devices, and
              human triage are included. Your engineers get{' '}
              <span className="font-bold text-[#0a2540]">{fmt(out.total)} hours</span> back.
            </p>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed mt-4">
            Engineering-hour model only. It excludes device-cloud and CI infrastructure, and it excludes
            the cost of the hardware-dependent defects scripts can&apos;t catch at all.
          </p>
        </div>
      </div>
    </div>
  );
}
