'use client';

import { FormEvent, useState } from 'react';
import WorkEmailForm from '@/components/forms/WorkEmailForm';

export default function NewsletterForm() {
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
          kind: 'newsletter',
          email: String(data.get('email') || ''),
          pageUri: typeof window !== 'undefined' ? window.location.href : undefined,
          pageName: 'Newsletter',
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus('error');
        setError(
          json.error ||
            'Could not subscribe. Email sales@teammobot.com and we will add you.',
        );
        return;
      }
      setStatus('done');
      form.reset();
    } catch {
      setStatus('error');
      setError('Could not subscribe. Email sales@teammobot.com and we will add you.');
    }
  }

  if (status === 'done') {
    return (
      <p className="text-sm font-semibold text-[#0a2540]">You&apos;re in — thanks for subscribing.</p>
    );
  }

  return (
    <WorkEmailForm
      className="flex flex-col sm:flex-row gap-3 max-w-[28rem] mx-auto items-stretch"
      onValidSubmit={onValidSubmit}
    >
      <input
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        className="flex-1 rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8] bg-white"
        aria-label="Work email"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="px-6 py-2.5 rounded-md bg-[#1d4ed8] text-white font-semibold text-sm hover:bg-[#1e40af] transition-colors disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Subscribe'}
      </button>
      {error && <p className="text-[11px] text-red-600 sm:col-span-2 w-full">{error}</p>}
    </WorkEmailForm>
  );
}
