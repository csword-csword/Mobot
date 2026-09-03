'use client';

import { useEffect, useRef, useState } from 'react';

// Figures from the Mobot Annual Defect Report (Q3 2025 – Q2 2026) and the current site.
const stats = [
  { target: 5.8, suffix: 'M+', label: 'Physical QA actions executed', sub: 'Real taps, swipes, and gestures in a 12-month window', decimals: 1 },
  { target: 145000, suffix: '+', label: 'Automated test runs', sub: 'Across 83 mobile apps in 11 industries' },
  { target: 6372, suffix: '', label: 'Unique defects found and verified', sub: 'Every one reviewed by a QA analyst' },
  { target: 300, suffix: '+', label: 'Real iOS & Android devices', sub: 'Current and legacy OS versions, New York lab' },
];

function formatNumber(n: number, decimals = 0) {
  if (decimals) return n.toFixed(decimals);
  return n >= 1000 ? Math.round(n).toLocaleString('en-US') : String(Math.round(n));
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
      setValue(target * ease(p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return value;
}

function StatItem({ target, suffix, label, sub, decimals = 0, active }: { target: number; suffix: string; label: string; sub: string; decimals?: number; active: boolean }) {
  const value = useCountUp(target, active);
  return (
    <div className="text-center px-4 md:first:pl-0 md:last:pr-0">
      <span className="block text-5xl md:text-6xl font-bold gradient-text tabular-nums leading-none">
        {formatNumber(value, decimals)}{suffix}
      </span>
      <span className="block text-[#0a2540] text-sm font-bold mt-4 leading-snug">{label}</span>
      <span className="block text-slate-500 text-xs mt-1.5">{sub}</span>
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
    <section className="relative py-16 px-6 border-b border-slate-200 bg-white" aria-label="Mobot by the numbers">
      <div className="mx-auto max-w-[86rem]">
        <p className="text-center text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-10">
          Validated at enterprise scale &mdash; not a science project
        </p>
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:divide-x md:divide-slate-200"
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
