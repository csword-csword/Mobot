'use client';

import WorkEmailForm from '@/components/forms/WorkEmailForm';

const inputClass =
  'w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]';

export default function ContactForm() {
  return (
    <WorkEmailForm className="rounded-lg border border-slate-200 bg-white p-8 shadow-[0_8px_20px_rgba(15,23,42,0.10)] grid sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">First name</label>
        <input type="text" name="firstname" required className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">Last name</label>
        <input type="text" name="lastname" required className={inputClass} />
      </div>
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
        <input type="text" name="company" required className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">What can we help with?</label>
        <select name="help_with" className={`${inputClass} bg-white`} defaultValue="Request a demo">
          <option>Request a demo</option>
          <option>Sample defect report</option>
          <option>Mobot Unlimited invitation</option>
          <option>Mobot Labs early access</option>
          <option>Security documentation</option>
          <option>Customer reference</option>
          <option>Press or partnership</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your app and where hardware-dependent bugs are hitting you hardest."
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="sm:col-span-2 mt-1 inline-flex justify-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
      >
        Send message
      </button>
      <p className="sm:col-span-2 text-xs text-slate-400 text-center">
        Work email required. We reply within one business day.
      </p>
    </WorkEmailForm>
  );
}
