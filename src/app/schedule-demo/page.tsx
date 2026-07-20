export const metadata = { title: 'Request a Demo' };

export default function Page() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-[64rem] px-6 py-32 lg:py-40 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-5">Get Started</p>
          <h1 className="font-bold tracking-tight text-4xl sm:text-5xl leading-[1.1] mb-6">
            See a Real Defect Report
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            Tell us about your app and we&apos;ll show you what Mobot&apos;s robots and QA analysts
            catch on real devices &mdash; including a sample forensic defect report for your review.
          </p>
          <ul className="space-y-3">
            {[
              'A verified defect report, built from real devices',
              'A walkthrough of Mobot Managed and how testing runs end-to-end',
              'Pricing structure for Credits and Unlimited plans',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-white/70 text-base leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3da6fc] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <form className="rounded-2xl border border-white/10 bg-white/5 p-8
                          shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)] flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1.5">Work email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#3da6fc]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Company</label>
            <input
              type="text"
              placeholder="Acme Mobile"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#3da6fc]"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">What are you testing?</label>
            <textarea
              placeholder="Tell us about your app and where hardware-dependent bugs are hitting you hardest."
              rows={3}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#3da6fc]"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex justify-center px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
          >
            Request a Demo
          </button>
          <p className="text-xs text-white/30 text-center">
            Or email us directly at sales@teammobot.com
          </p>
        </form>
      </div>
    </section>
  );
}
