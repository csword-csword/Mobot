import type { Step } from '@/data/sampleReport';

/** Brand-free wireframe stand-ins for per-step device screenshots. */
export default function StepThumb({ screen, failed }: { screen: Step['screen']; failed?: boolean }) {
  const dark = screen === 'camera' || screen === 'crash';
  return (
    <div
      className={`relative w-[5.4rem] shrink-0 aspect-[9/19] rounded-[0.7rem] border overflow-hidden ${
        dark ? 'bg-[#0b0f14] border-slate-700' : 'bg-white border-slate-300'
      } ${failed ? 'ring-2 ring-red-400' : ''}`}
      aria-hidden="true"
    >
      {/* status bar */}
      <div className={`absolute top-1.5 inset-x-2 flex justify-between text-[5px] ${dark ? 'text-white/70' : 'text-slate-500'}`}>
        <span>4:39</span>
        <span>●●● ᯤ ▮</span>
      </div>
      {screen === 'home' && (
        <>
          <div className="absolute top-6 inset-x-2 h-10 rounded bg-slate-100 border border-slate-200" />
          <div className="absolute top-[4.5rem] inset-x-2 space-y-1.5">
            {[0, 1, 2, 3].map((i) => <div key={i} className="h-3 rounded-sm bg-slate-100 border border-slate-200" />)}
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0a2540]" />
        </>
      )}
      {(screen === 'form' || screen === 'sheet' || screen === 'tasks') && (
        <>
          <div className="absolute top-6 left-2 right-6 h-1.5 rounded bg-slate-300" />
          <div className="absolute top-9 inset-x-2 space-y-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className={`h-3.5 rounded-sm border ${i === 0 && screen === 'form' ? 'border-[#0a2540]' : 'border-slate-200 bg-slate-50'}`} />
            ))}
          </div>
          {screen === 'sheet' && <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-t-lg bg-white border-t border-slate-300 shadow-[0_-4px_10px_rgba(0,0,0,0.12)]" />}
          <div className="absolute bottom-2 inset-x-2 h-3.5 rounded-sm bg-[#0a2540]" />
        </>
      )}
      {screen === 'map' && (
        <>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#e2e8f0_0_3px,#f1f5f9_3px_9px)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#1d4ed8] ring-4 ring-[#1d4ed8]/25" />
          <div className="absolute bottom-2 inset-x-2 h-3.5 rounded-sm bg-[#0a2540]" />
        </>
      )}
      {screen === 'photos' && (
        <>
          <div className="absolute top-6 left-2 right-6 h-1.5 rounded bg-slate-300" />
          <div className="absolute top-10 inset-x-2 grid grid-cols-3 gap-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className={`aspect-square rounded-sm ${i % 4 === 1 ? 'bg-slate-700' : 'bg-slate-100 border border-slate-200'}`} />
            ))}
          </div>
          <div className="absolute bottom-2 inset-x-2 h-3.5 rounded-sm bg-slate-200" />
        </>
      )}
      {screen === 'camera' && (
        <>
          <div className="absolute inset-3 top-8 rounded bg-gradient-to-br from-slate-600/60 to-slate-900" />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white bg-white/90" />
        </>
      )}
      {screen === 'summary' && (
        <>
          <div className="absolute top-6 inset-x-2 space-y-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i}>
                <div className="h-1 w-8 rounded bg-slate-300 mb-0.5" />
                <div className="h-1.5 w-14 rounded bg-slate-200" />
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 inset-x-2 h-3.5 rounded-sm bg-[#0a2540]" />
          <div className="absolute bottom-2 inset-x-2 h-3 rounded-sm border border-slate-300" />
        </>
      )}
      {screen === 'crash' && (
        <>
          <div className="absolute top-8 inset-x-2 grid grid-cols-4 gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-[3px] bg-white/15" />
            ))}
          </div>
          <div className="absolute bottom-3 inset-x-3 h-4 rounded bg-white/15" />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[5px] font-bold text-red-300">APP CLOSED</div>
        </>
      )}
    </div>
  );
}
