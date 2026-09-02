'use client';

import { useEffect, useRef, useState } from 'react';

// Sourced from the current mobot.io site and published case studies.
// Swap in fleet-wide totals (verified defects, actions executed, robots) when available.
const stats = [
  { target: 300, suffix: 'M+', label: 'Monthly active users on apps Mobot tests', sub: 'Top-10 social network, #1 US neobank, Rappi, Citizen' },
  { target: 300, suffix: '+', label: 'Real iOS & Android devices in the fleet', sub: 'Physically driven by robots, New York' },
  { target: 10000, suffix: '+', label: 'Deep links verified for a single customer', sub: '50+ channels tested every week' },
  { target: 5, suffix: '×', label: 'Faster than manual testing', sub: 'One robot day replaces five human days' },
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

function StatItem({ target, suffix, label, sub, active }: { target: number; suffix: string; label: string; sub: string; active: boolean }) {
  const value = useCountUp(target, active);
  return (
    <div className="text-center px-4 md:first:pl-0 md:last:pr-0">
      <span className="block text-5xl md:text-6xl font-bold gradient-text tabular-nums leading-none">
        {formatNumber(value)}{suffix}
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
