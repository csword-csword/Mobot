import Link from 'next/link';

export const metadata = { title: 'Request a Demo' };

const BIGGEST_GAP_OPTIONS = [
  'Payments / biometrics',
  'Push notifications / deep links',
  'Camera / deposit / sensors',
  'Release regression / device matrix',
  'Android quality / Play gaps',
  'Other',
];

export default function Page() {
  return (
    <section className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
      <div className="mx-auto max-w-[64rem] px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="eyebrow text-sm mb-5">Get Started</p>
          <h1 className="font-bold tracking-tight text-[#0a2540] text-4xl sm:text-5xl leading-[1.1] mb-6">
            Request a demo
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            See Mobot test your app on real devices — and leave with a clear view of Credits vs
            Unlimited, plus how verified defect reports land in your queue.
          </p>
          <ul className="space-y-3">
            {[
              'A walkthrough of robots + analyst verification on real iOS and Android devices',
              'What a forensic defect report looks like (video, logs, repro steps)',
              'Pricing path for Credits and Mobot Unlimited',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-slate-700 text-base leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1d4ed8] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <form className="rounded-lg border border-slate-200 bg-white p-8 shadow-[0_8px_20px_rgba(15,23,42,0.10)] flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">Work email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">Company</label>
            <input
              type="text"
              name="company"
              required
              placeholder="Acme Mobile"
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0a2540] mb-1.5">Biggest gap</label>
            <select
              name="biggest_gap"
              required
              defaultValue=""
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8] bg-white"
            >
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
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1d4ed8]"
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
          <p className="text-xs text-slate-400 text-center">
            Or email us directly at sales@teammobot.com
          </p>
        </form>
      </div>
    </section>
  );
}
