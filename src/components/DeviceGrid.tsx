import Reveal from '@/components/ui/Reveal';

/**
 * A wall of devices: a visual stand-in for the 300+ device fleet. Devices
 * light up in a staggered wave when scrolled into view.
 */
const COLS = 12;
const ROWS = 4;

export default function DeviceGrid({ dark }: { dark?: boolean }) {
  const cells = Array.from({ length: COLS * ROWS }, (_, i) => i);
  return (
    <Reveal variant="fade" threshold={0.3}>
      <div
        className={`rounded-lg p-6 md:p-8 ${
          dark ? 'bg-[#0a2540]' : 'bg-white border border-slate-200 shadow-[0_1px_3px_rgba(15,23,42,0.08)]'
        }`}
        aria-hidden="true"
      >
        <div className="grid gap-2.5" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}>
          {cells.map((i) => {
            const col = i % COLS;
            const row = Math.floor(i / COLS);
            const tablet = (col + row) % 7 === 3;
            const active = (col * 3 + row * 5) % 4 === 0;
            return (
              <div
                key={i}
                className={`layer-in relative rounded-[3px] border ${
                  dark ? 'border-white/20 bg-white/5' : 'border-[#0a2540]/25 bg-[#f8fafc]'
                } ${tablet ? 'aspect-[3/4]' : 'aspect-[9/19]'} overflow-hidden`}
                style={{ animationDelay: `${col * 45 + row * 80}ms` }}
              >
                <div className={`absolute top-[6%] left-1/2 -translate-x-1/2 w-[18%] h-[6%] rounded-full ${dark ? 'bg-white/25' : 'bg-[#0a2540]/25'}`} />
                <div
                  className={`absolute inset-x-[14%] top-[18%] bottom-[14%] rounded-[2px] ${
                    active ? 'bg-[#1d4ed8]/80' : dark ? 'bg-white/10' : 'bg-slate-200'
                  }`}
                />
                {active && (
                  <div className="absolute inset-x-[14%] top-[18%] bottom-[14%] rounded-[2px] bg-[#1d4ed8]/40 animate-blink" />
                )}
              </div>
            );
          })}
        </div>
        <div className={`mt-6 flex flex-wrap items-center justify-between gap-3 text-xs ${dark ? 'text-white/50' : 'text-slate-400'}`}>
          <span>300+ real iOS &amp; Android phones and tablets &middot; current and legacy OS versions</span>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#1d4ed8]/80" /> in test right now
          </span>
        </div>
      </div>
    </Reveal>
  );
}
