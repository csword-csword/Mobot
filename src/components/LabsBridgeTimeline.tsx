import Link from 'next/link';

const nodes = [
  { label: 'Today', sub: 'Managed Service', future: false },
  { label: 'Training & Certification', sub: 'Your team, certified to run it', future: false },
  { label: 'Your Lab', sub: '2027', future: true },
];

export default function LabsBridgeTimeline() {
  return (
    <div
      className="rounded-lg border border-slate-200 bg-white p-8 md:p-12
                 shadow-[0_1px_3px_rgba(15,23,42,0.08)]"
    >
      <div className="relative flex justify-between items-start">
        <div className="absolute top-[7px] left-[8%] right-[8%] h-px bg-slate-200" />
        {nodes.map((n) => (
          <div key={n.label} className="relative z-10 flex flex-col items-center text-center w-1/3 px-2">
            <span
              className={
                n.future
                  ? 'w-3.5 h-3.5 rounded-full border-2 border-[#1d4ed8] bg-white mb-4'
                  : 'w-3.5 h-3.5 rounded-full bg-[#1d4ed8] mb-4'
              }
            />
            <h3 className="font-bold text-[#0a2540] text-sm sm:text-base mb-1">{n.label}</h3>
            <p className="text-slate-500 text-xs sm:text-sm">{n.sub}</p>
          </div>
        ))}
      </div>

      <Link
        href="/schedule-demo"
        className="mt-10 flex items-center justify-center gap-2 rounded-md bg-[#e8f0fe] border border-[#1d4ed8]/40
                   text-[#1d4ed8] px-6 py-3 text-sm font-semibold hover:bg-[#dbe7fb] transition-colors text-center"
      >
        Apply for Early Access &mdash; Limited Cohort
      </Link>
    </div>
  );
}
