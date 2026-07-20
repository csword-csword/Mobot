const layers = [
  { name: 'Platform', body: 'Authors test cases, orchestrates the fleet, delivers forensics.' },
  { name: 'Robots', body: 'Physically actuate every tap, swipe, and gesture.' },
  { name: 'Real Devices + Real World', body: 'Actual hardware, actual peripherals, actual networks.' },
  { name: 'Experts', body: 'QA analysts verify every result before it ships to you.' },
];

export default function HowItWorksStack() {
  return (
    <section className="py-16 px-6" aria-label="The Mobot stack, from build to verified defect">
      <div className="mx-auto max-w-[64rem]">
        <div
          className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12
                     shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]"
        >
          <div className="grid grid-cols-[2.5rem_1fr_2.5rem] md:grid-cols-[3rem_1fr_3rem] gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-2 text-center leading-tight">
                Your
                <br />
                Build
              </span>
              <div className="flex-1 w-px bg-gradient-to-b from-white/30 to-white/5" />
              <span className="text-white/30 text-lg leading-none mt-1">&darr;</span>
            </div>

            <div className="flex flex-col gap-3">
              {layers.map((l, i) => (
                <div
                  key={l.name}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 md:px-6 md:py-5
                             flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#3da6fc] tabular-nums">0{i + 1}</span>
                    <h3 className="font-bold">{l.name}</h3>
                  </div>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed sm:text-right sm:max-w-[20rem]">
                    {l.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center">
              <span className="text-white/30 text-lg leading-none mb-1">&uarr;</span>
              <div className="flex-1 w-px bg-gradient-to-t from-[#3da6fc]/40 to-white/5" />
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#3da6fc] mt-2 text-center leading-tight">
                Verified
                <br />
                Defects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
