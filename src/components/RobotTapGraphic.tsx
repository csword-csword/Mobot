/**
 * Animated hero graphic: a robot actuator tapping a real phone, with a
 * computer-vision scan line and a verified-result badge. Pure CSS/SVG.
 */
export default function RobotTapGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-[26rem] aspect-[4/3]" aria-hidden="true">
      {/* soft backdrop */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#e8f0fe] to-white border border-slate-200" />

      {/* phone */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[9.5rem] h-[18rem] rounded-[1.6rem] border-[3px] border-[#0a2540]/30 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.15)] overflow-hidden">
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0a2540]/25" />
        {/* scan line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-[#1d4ed8] shadow-[0_0_12px_2px_rgba(29,78,216,0.55)] animate-scan" />
        {/* screen mock */}
        <div className="absolute inset-x-4 top-9 space-y-2.5">
          <div className="h-2.5 rounded bg-slate-200 w-2/3" />
          <div className="h-2.5 rounded bg-slate-200" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-14 rounded-md bg-slate-100 border border-slate-200" />
            <div className="h-14 rounded-md bg-slate-100 border border-slate-200" />
          </div>
          <div className="h-2.5 rounded bg-slate-200 w-1/2 mt-3" />
        </div>
        {/* target button + ripple */}
        <div className="absolute inset-x-4 bottom-5 h-10 rounded-md bg-[#1d4ed8] flex items-center justify-center text-[10px] font-bold text-white">
          Pay with Face ID
          <span className="absolute w-10 h-10 rounded-full border-2 border-[#1d4ed8] animate-tap-ripple" />
        </div>
      </div>

      {/* robot actuator */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center">
        <div className="w-24 h-3 rounded-b-md bg-[#0a2540]" />
        <div className="w-3 h-14 bg-[#0a2540]/80" />
        <div className="animate-robot-tap flex flex-col items-center">
          <div className="w-8 h-8 rounded-md bg-[#0a2540] shadow-[0_6px_14px_rgba(15,23,42,0.35)]" />
          <div className="w-2 h-[8.4rem] bg-[#0a2540]/90" />
          <div className="w-3 h-3 rounded-full bg-[#1d4ed8] ring-4 ring-[#1d4ed8]/25" />
        </div>
      </div>

      {/* verified badge */}
      <div className="absolute right-4 bottom-10 rounded-md border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.12)] px-3 py-2 text-[11px] animate-float">
        <div className="flex items-center gap-1.5 font-bold text-[#0a2540]">
          <span className="w-2 h-2 rounded-full bg-[#15803d]" /> Verified by analyst
        </div>
        <div className="text-slate-500">iPhone 15 · iOS 18 · 07:52 ET</div>
      </div>

      {/* CV badge */}
      <div className="absolute left-4 top-16 rounded-md border border-[#1d4ed8]/30 bg-[#e8f0fe] px-3 py-2 text-[11px] text-[#1d4ed8] font-bold">
        CV match: primary button 99.4%
      </div>
    </div>
  );
}
