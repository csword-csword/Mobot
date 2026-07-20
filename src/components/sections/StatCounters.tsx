'use client';

import { useEffect, useRef, useState } from 'react';

// Illustrative figures — replace with real numbers before this section ships to production.
const stats = [
  { target: 250000, suffix: '+', label: 'Verified Defects Reported' },
  { target: 12, suffix: 'M+', label: 'Physical Test Actions Executed' },
  { target: 120, suffix: '+', label: 'Robots in the Fleet' },
  { target: 0, suffix: '', label: 'False Positives Delivered' },
];

function formatNumber(n: number) {
  return n >= 1000 ? n.toLocaleString('en-US') : String(n);
}

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const instant = target === 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = 1600;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf: number;
    const tick = (now: number) => {
      if (instant) {
        setValue(target);
        return;
      }
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * ease(p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return value;
}

function StatItem({ target, suffix, label, active }: { target: number; suffix: string; label: string; active: boolean }) {
  const value = useCountUp(target, active);
  return (
    <div className="text-center px-4 md:first:pl-0 md:last:pr-0">
      <span className="block text-4xl md:text-5xl font-bold text-[#1d4ed8]">
        {formatNumber(value)}{suffix}
      </span>
      <span className="block text-slate-500 text-xs font-bold uppercase tracking-wide mt-3">{label}</span>
    </div>
  );
}

export default function StatCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-24 px-6" aria-label="Mobot by the numbers">
      <div
        ref={ref}
        className="mx-auto max-w-[77rem] rounded-lg border border-slate-200 bg-white p-10 md:p-12 shadow-[0_1px_3px_rgba(15,23,42,0.08)]
                   grid grid-cols-2 md:grid-cols-4 gap-y-10 md:divide-x md:divide-slate-200"
      >
        {stats.map((s) => (
          <StatItem key={s.label} {...s} active={active} />
        ))}
      </div>
    </section>
  );
}
