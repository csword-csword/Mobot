'use client';

import WorkEmailForm from '@/components/forms/WorkEmailForm';

export default function NewsletterForm() {
  return (
    <WorkEmailForm className="flex flex-col sm:flex-row gap-3 max-w-[28rem] mx-auto items-stretch">
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
        className="px-6 py-2.5 rounded-md bg-[#1d4ed8] text-white font-semibold text-sm hover:bg-[#1e40af] transition-colors"
      >
        Subscribe
      </button>
    </WorkEmailForm>
  );
}
