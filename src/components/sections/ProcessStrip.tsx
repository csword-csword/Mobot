interface Stop {
  time?: string;
  title: string;
  body: string;
}

interface ProcessStripProps {
  stops: Stop[];
  timelineLabels?: [string, string];
}

export default function ProcessStrip({ stops, timelineLabels }: ProcessStripProps) {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/5 p-10 md:p-14
                 shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]"
    >
      <div className="flex flex-col md:flex-row md:items-stretch gap-10 md:gap-0">
        {stops.map((s, i) => (
          <div key={s.title} className="flex md:flex-1 md:items-start">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-[#3da6fc] shadow-[0_0_0_4px_rgba(61,166,252,0.15)] shrink-0" />
                {s.time && (
                  <span className="text-xs uppercase tracking-[0.15em] text-[#3da6fc]">{s.time}</span>
                )}
              </div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[18rem] mx-auto md:mx-0">
                {s.body}
              </p>
            </div>
            {i < stops.length - 1 && (
              <div className="hidden md:flex items-start justify-center px-4 pt-1 text-[#3da6fc]/40 text-xl shrink-0">
                &rarr;
              </div>
            )}
          </div>
        ))}
      </div>

      {timelineLabels && (
        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-white/40 uppercase tracking-[0.15em]">
          <span>{timelineLabels[0]}</span>
          <span className="flex-1 mx-4 h-px bg-gradient-to-r from-white/10 via-[#3da6fc]/30 to-white/10" />
          <span>{timelineLabels[1]}</span>
        </div>
      )}
    </div>
  );
}
