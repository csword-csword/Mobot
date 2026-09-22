'use client';

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
 * Demo request form — work email enforced client-side.
 * Work email enforced. Flag for Demand: no HubSpot embed yet — first-party only;
 * CRM post still needs form GUID wiring.
 */
export default function ScheduleDemoForm() {
  return (
    <WorkEmailForm className="rounded-lg border border-slate-200 bg-white p-8 shadow-[0_8px_20px_rgba(15,23,42,0.10)] flex flex-col gap-4">
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
        className="mt-2 inline-flex justify-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
      >
        Request a Demo
      </button>
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
