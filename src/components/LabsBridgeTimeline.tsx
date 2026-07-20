import Link from 'next/link';

const nodes = [
  { label: 'Today', sub: 'Managed Service', future: false },
  { label: 'Training & Certification', sub: 'Your team, certified to run it', future: false },
  { label: 'Your Lab', sub: '2027', future: true },
];

export default function LabsBridgeTimeline() {
  return (
    <div
      className="rounded-2xl border border-black/10 bg-white p-8 md:p-12
                 shadow-[0_1px_3px_rgba(15,23,42,0.08)]"
    >
      <div className="relative flex justify-between items-start">
        <div className="absolute top-[7px] left-[8%] right-[8%] h-px bg-black/10" />
        {nodes.map((n) => (
          <div key={n.label} className="relative z-10 flex flex-col items-center text-center w-1/3 px-2">
            <span
              className={
                n.future
                  ? 'w-3.5 h-3.5 rounded-full border-2 border-[#2f87c8] bg-white mb-4'
                  : 'w-3.5 h-3.5 rounded-full bg-[#2f87c8] mb-4'
              }
            />
            <h3 className="font-bold text-sm sm:text-base mb-1">{n.label}</h3>
            <p className="text-black/50 text-xs sm:text-sm">{n.sub}</p>
          </div>
        ))}
      </div>

      <Link
        href="/schedule-demo"
        className="mt-10 flex items-center justify-center gap-2 rounded-full bg-[#2f87c8]/10 border border-[#2f87c8]/40
                   text-[#2f87c8] px-6 py-3 text-sm font-semibold hover:bg-[#2f87c8]/20 transition-colors text-center"
      >
        Apply for Early Access &mdash; Limited Cohort
      </Link>
    </div>
  );
}
