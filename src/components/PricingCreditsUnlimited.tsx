export default function PricingCreditsUnlimited() {
  return (
    <section className="pt-4 pb-8 px-6">
      <div className="mx-auto max-w-[48rem]">
        <div
          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 sm:px-10 sm:py-10
                     shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]
                     flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-6"
        >
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.15em] text-white/40 mb-2">Start Here</div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 min-w-[10rem]">
              <div className="font-bold">Credits</div>
              <div className="text-white/50 text-xs mt-1">Prove the value</div>
            </div>
          </div>

          <span className="text-[#3da6fc]/50 text-2xl leading-none rotate-90 sm:rotate-0 shrink-0">&rarr;</span>

          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.15em] text-[#3da6fc] mb-2">Where Teams Land</div>
            <div className="rounded-xl border border-[#3da6fc]/40 bg-[#3da6fc]/5 px-6 py-4 min-w-[10rem]">
              <div className="font-bold">Unlimited</div>
              <div className="text-white/50 text-xs mt-1">Make it your backbone</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
