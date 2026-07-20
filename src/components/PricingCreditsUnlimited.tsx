export default function PricingCreditsUnlimited() {
  return (
    <section className="pt-4 pb-8 px-6">
      <div className="mx-auto max-w-[48rem]">
        <div
          className="rounded-2xl border border-black/10 bg-white px-6 py-8 sm:px-10 sm:py-10
                     shadow-[0_1px_3px_rgba(15,23,42,0.08)]
                     flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-6"
        >
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.15em] text-black/40 mb-2">Start Here</div>
            <div className="rounded-xl border border-black/10 bg-black/[0.02] px-6 py-4 min-w-[10rem]">
              <div className="font-bold">Credits</div>
              <div className="text-black/50 text-xs mt-1">Prove the value</div>
            </div>
          </div>

          <span className="text-[#2f87c8]/50 text-2xl leading-none rotate-90 sm:rotate-0 shrink-0">&rarr;</span>

          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.15em] text-[#2f87c8] mb-2">Where Teams Land</div>
            <div className="rounded-xl border border-[#2f87c8]/40 bg-[#2f87c8]/5 px-6 py-4 min-w-[10rem]">
              <div className="font-bold">Unlimited</div>
              <div className="text-black/50 text-xs mt-1">Make it your backbone</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
