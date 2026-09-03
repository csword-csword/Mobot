'use client';

import { useState } from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';

/**
 * Lightweight gate for the Annual Defect Report: captures a work email, then
 * reveals the report link. Swap the submit handler for your form provider
 * (HubSpot, etc.) when ready — the URL below is the report itself.
 */
export const REPORT_URL = '/reports/mobot-annual-defect-report.html';

export default function ReportDownload({ compact }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    try {
      localStorage.setItem('mobot_report_email', email);
    } catch {}
    setUnlocked(true);
  }

  if (unlocked) {
    return (
      <div className={`rounded-lg border border-[#6d3fe0]/40 bg-[#efeafd]/60 ${compact ? 'p-4' : 'p-6'}`}>
        <p className="text-sm font-bold text-[#0a2540] mb-3">Thanks &mdash; your copy is ready.</p>
        <a
          href={REPORT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
        >
          Open the report <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`rounded-lg border border-slate-200 bg-white ${compact ? 'p-4' : 'p-6'} shadow-[0_1px_3px_rgba(15,23,42,0.08)]`}>
      <label htmlFor="report-email" className="block text-sm font-bold text-[#0a2540] mb-2">
        Get the full report
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id="report-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="flex-1 rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]"
        />
        <button type="submit" className="px-5 py-2.5 rounded-md bg-[#1d4ed8] text-white font-semibold text-sm hover:bg-[#1e40af] transition-colors whitespace-nowrap">
          Download the report
        </button>
      </div>
      <p className="mt-2 text-[11px] text-slate-400 inline-flex items-center gap-1">
        <Lock className="w-3 h-3" /> Work email. No spam, one follow-up at most.
      </p>
    </form>
  );
}
