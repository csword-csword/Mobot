export default function PricingCreditsUnlimited() {
  return (
    <section className="pt-4 pb-8 px-6">
      <div className="mx-auto max-w-[48rem]">
        <div
          className="rounded-lg border border-slate-200 bg-white px-6 py-8 sm:px-10 sm:py-10
                     shadow-[0_1px_3px_rgba(15,23,42,0.08)]
                     flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-6"
        >
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-2">Start Here</div>
            <div className="rounded-md border border-slate-200 bg-[#f8fafc] px-6 py-4 min-w-[10rem]">
              <div className="font-bold text-[#0a2540]">Credits</div>
              <div className="text-slate-500 text-xs mt-1">Prove the value</div>
            </div>
          </div>

          <span className="text-[#1d4ed8]/50 text-2xl leading-none rotate-90 sm:rotate-0 shrink-0">&rarr;</span>

          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.15em] text-[#1d4ed8] mb-2">Where Teams Land</div>
            <div className="rounded-md border border-[#1d4ed8]/40 bg-[#1d4ed8]/5 px-6 py-4 min-w-[10rem]">
              <div className="font-bold text-[#0a2540]">Unlimited</div>
              <div className="text-slate-500 text-xs mt-1">Make it your backbone</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
