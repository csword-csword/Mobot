'use client';

import { useState } from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { isWorkEmail, WORK_EMAIL_ERROR } from '@/lib/workEmail';

/** Gated report URL — served only after HubSpot form submit + unlock cookie. */
export const REPORT_URL = '/api/report/file';

/**
 * Gate for the Annual Defect Report: email (required) + company (optional) →
 * POST /api/report/unlock (HubSpot Forms API, then httpOnly access cookie).
 * Marketing cookies stay under HubSpot’s own opt-in banner — no second banner here.
 */
export default function ReportDownload({ compact }: { compact?: boolean }) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!isWorkEmail(email)) {
      setError(WORK_EMAIL_ERROR);
      return;
    }
    setPending(true);
    setError(null);
    try {
      const res = await fetch('/api/report/unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          company: company.trim() || undefined,
          pageUri: typeof window !== 'undefined' ? window.location.href : undefined,
          pageName: 'Annual Defect Report',
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; url?: string } | null;
      if (!res.ok || !data?.ok) {
        setError(
          res.status === 400
            ? WORK_EMAIL_ERROR
            : 'Could not unlock the report. Try again with a work email.',
        );
        return;
      }
      setUnlocked(true);
    } catch {
      setError('Could not unlock the report. Check your connection and try again.');
    } finally {
      setPending(false);
    }
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
      <div className="flex flex-col gap-2">
        <input
          id="report-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          disabled={pending}
          className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]"
        />
        <input
          id="report-company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company (optional)"
          disabled={pending}
          className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]"
        />
        <button
          type="submit"
          disabled={pending}
          className="px-5 py-2.5 rounded-md bg-[#1d4ed8] text-white font-semibold text-sm hover:bg-[#1e40af] transition-colors whitespace-nowrap disabled:opacity-60"
        >
          {pending ? 'Unlocking…' : 'Download the report'}
        </button>
      </div>
      {error && <p className="mt-2 text-[11px] text-red-600">{error}</p>}
      <p className="mt-2 text-[11px] text-slate-400 inline-flex items-center gap-1">
        <Lock className="w-3 h-3" /> Work email. No spam, one follow-up at most.
      </p>
    </form>
  );
}
