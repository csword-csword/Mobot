'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Code2, Bug, Rocket, Megaphone, Headset, CheckCircle2 } from 'lucide-react';

const roles = [
  {
    key: 'engineering',
    label: 'Engineering',
    icon: Code2,
    headline: 'Automate tasks and accelerate development with AI-driven robotics',
    pain: 'Engineering teams bogged down by manual processes and script maintenance can’t focus on innovation, leading to slow releases and technical debt.',
    wins: [
      { t: 'Focus on innovation, not hotfixes', d: 'Catch issues before they reach users so engineers can prioritize building new features.' },
      { t: 'Zero script maintenance', d: 'No selectors to repair after every UI change — robots see the screen the way people do.' },
      { t: 'Accelerate release cycles', d: 'Submit a build at end of day; verified results are waiting by morning.' },
    ],
    defect: { level: 'P0', title: 'App crash', body: 'The app crashes intermittently when users attempt to log in with Face ID.' },
  },
  {
    key: 'qa',
    label: 'QA',
    icon: Bug,
    headline: 'Catch bugs before they reach your users and release with confidence',
    pain: 'QA teams overwhelmed by repetitive manual regression struggle to keep up with release cadence, leading to missed bugs and inconsistent results.',
    wins: [
      { t: 'Reach 100% coverage', d: 'Scripted automation is flaky and slow to set up. Mobot covers the hardware-dependent 20% it can’t reach.' },
      { t: 'Eliminate manual regression', d: 'Repetitive passes are error-prone and slow. Robots run them identically, every time.' },
      { t: 'Automate the “unautomatable”', d: 'Push, Bluetooth, biometrics, camera, multi-device — scenarios where traditional tools stop.' },
    ],
    defect: { level: 'P0', title: 'Payment save error', body: 'Users receive an error when saving payment information during checkout, preventing card details from being stored.' },
  },
  {
    key: 'product',
    label: 'Product',
    icon: Rocket,
    headline: 'Drive higher feature adoption and a seamless user experience',
    pain: 'Product teams hindered by slow testing cycles miss market windows, resulting in delayed launches and lost growth.',
    wins: [
      { t: 'Increase feature adoption', d: 'Unreliable features don’t get used. Ship consistent experiences that drive engagement.' },
      { t: 'Reduce user churn', d: 'Bugs — big or small — drive users away. Improve stability to keep them loyal.' },
      { t: 'Protect your roadmap', d: 'Identify issues early so unexpected defects don’t derail release plans.' },
    ],
    defect: { level: 'P0', title: 'Transaction failure', body: 'The share deep link launches a webview login page despite the destination app already being installed.' },
  },
  {
    key: 'marketing',
    label: 'Marketing',
    icon: Megaphone,
    headline: 'Protect your brand and avoid campaign disruption across every channel',
    pain: 'Marketing teams dealing with broken campaign flows lose conversions and revenue as buggy experiences reach paid traffic.',
    wins: [
      { t: 'Maximize campaign spend', d: 'Verify every deep link on real devices before the budget goes live.' },
      { t: 'Improve campaign performance', d: 'Mobot tests real-world conditions to ensure flawless execution across devices and channels.' },
      { t: 'Minimize revenue loss', d: 'Broken links and disrupted flows lead to lost conversions. Keep mobile campaigns intact.' },
    ],
    defect: { level: 'P0', title: 'Deep link failure', body: 'Holiday promo deep link navigates users to the app homepage instead of the intended promotion page.' },
  },
  {
    key: 'support',
    label: 'Support',
    icon: Headset,
    headline: 'Reduce support tickets by delivering stable, reliable features',
    pain: 'Support teams overwhelmed by unresolved app issues face higher ticket volumes, frustrated users, and churn.',
    wins: [
      { t: 'Speed up issue resolution', d: 'Every defect ships with video, logs, and reproduction steps — no time lost replicating bugs.' },
      { t: 'Keep users coming back', d: 'Recurring app problems drive users away. Deliver a dependable experience that builds trust.' },
      { t: 'Reduce ticket volume', d: 'Catch bugs before they reach users and watch escalations and response times fall.' },
    ],
    defect: { level: 'P0', title: 'Password reset error', body: 'Users receive an error while attempting to reset their password, locking them out of their account.' },
  },
];

export default function RoleExplorer() {
  const [active, setActive] = useState(0);
  const role = roles[active];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Choose your team">
        {roles.map((r, i) => {
          const Icon = r.icon;
          const isActive = i === active;
          return (
            <button
              key={r.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-md border text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-[#0a2540] border-[#0a2540] text-white shadow-[0_8px_20px_rgba(15,23,42,0.15)]'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-[#0a2540]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {r.label}
            </button>
          );
        })}
      </div>

      <div key={role.key} className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
        <div className="reveal reveal-up is-visible">
          <p className="eyebrow text-xs mb-3">Mobot for {role.label}</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0a2540] leading-tight mb-4">{role.headline}</h3>
          <p className="text-slate-600 leading-relaxed mb-6">{role.pain}</p>
          <ul className="space-y-4">
            {role.wins.map((w) => (
              <li key={w.t} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1d4ed8] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0a2540] text-sm">{w.t}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{w.d}</div>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/schedule-demo"
            className="mt-8 inline-flex items-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
          >
            Request a Demo
          </Link>
        </div>

        {/* Sample verified defect card */}
        <div className="reveal reveal-scale is-visible rounded-lg border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.10)] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#15803d] animate-blink" />
              Verified defect
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
              {role.defect.level}
            </span>
          </div>
          <div className="p-5">
            <div className="font-bold text-[#0a2540] mb-1">{role.defect.title}</div>
            <p className="text-slate-600 text-sm leading-relaxed">{role.defect.body}</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-[11px] text-slate-500">
              <div className="rounded-md border border-slate-200 p-2.5">
                <div className="font-bold text-[#0a2540]">Device</div>
                iPhone 15 · iOS 18
              </div>
              <div className="rounded-md border border-slate-200 p-2.5">
                <div className="font-bold text-[#0a2540]">Evidence</div>
                Video · logs · steps
              </div>
              <div className="rounded-md border border-slate-200 p-2.5">
                <div className="font-bold text-[#0a2540]">Reviewed by</div>
                QA analyst
              </div>
            </div>
            <div className="mt-4 flex gap-3 text-xs font-semibold text-[#1d4ed8]">
              <span>See details →</span>
              <span>View screenshots →</span>
              <span>Reproduce →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
