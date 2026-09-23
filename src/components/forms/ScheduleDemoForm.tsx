'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import WorkEmailForm from '@/components/forms/WorkEmailForm';

const BIGGEST_GAP_OPTIONS = [
  'Payments / biometrics',
  'Push notifications / deep links',
  'Camera / deposit / sensors',
  'Release regression / device matrix',
  'Android quality / Play gaps',
  'Other',
];

const inputClass =
  'w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]';

/**
 * Demo intake form — work email enforced; posts to HubSpot via /api/forms/submit.
 * Prefer the Meetings embed on the page for live booking; this captures gap details.
 */
export default function ScheduleDemoForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onValidSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('submitting');
    setError(null);
    try {
      const res = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind: 'demo',
          email: String(data.get('email') || ''),
          company: String(data.get('company') || ''),
          biggest_gap: String(data.get('biggest_gap') || ''),
          what_testing: String(data.get('what_testing') || ''),
          pageUri: typeof window !== 'undefined' ? window.location.href : undefined,
          pageName: 'Request a Demo',
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus('error');
        setError(
          json.error ||
            'Could not submit. Email sales@teammobot.com and we will follow up.',
        );
        return;
      }
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
      setError('Could not submit. Email sales@teammobot.com and we will follow up.');
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-[0_8px_20px_rgba(15,23,42,0.10)]">
        <h2 className="font-bold text-[#0a2540] text-lg mb-2">Thanks — we got it.</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          A person will follow up shortly. You can also pick a time in the calendar above, or email{' '}
          <a href="mailto:sales@teammobot.com" className="text-[#1d4ed8] font-semibold hover:underline">
            sales@teammobot.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <WorkEmailForm
      className="rounded-lg border border-slate-200 bg-white p-8 shadow-[0_8px_20px_rgba(15,23,42,0.10)] flex flex-col gap-4"
      onValidSubmit={onValidSubmit}
    >
      <div>
        <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">Work email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={inputClass}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">Company</label>
        <input type="text" name="company" required placeholder="Acme Mobile" className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">Biggest gap</label>
        <select name="biggest_gap" required defaultValue="" className={`${inputClass} bg-white`}>
          <option value="" disabled>
            Select the biggest gap
          </option>
          {BIGGEST_GAP_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">
          What are you testing? <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <textarea
          name="what_testing"
          placeholder="e.g. Android login + transfer confirm on Pixel 8"
          rows={3}
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-2 inline-flex justify-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Request a Demo'}
      </button>
      {error && <p className="text-[11px] text-red-600">{error}</p>}
      <p className="text-xs text-slate-400 text-center">
        Prefer to browse a sample first?{' '}
        <Link href="/resources/defect-reports/sample" className="text-[#1d4ed8] hover:underline">
          See a verified defect report
        </Link>
      </p>
      <p className="text-xs text-slate-400 text-center">Or email us directly at sales@teammobot.com</p>
    </WorkEmailForm>
  );
}
