'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type Variant = 'up' | 'fade' | 'scale' | 'left' | 'right';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Animation variant. Defaults to a subtle fade-up. */
  variant?: Variant;
  /** Delay in ms — use for staggering siblings. */
  delay?: number;
  /** Render as a different element (default div). */
  as?: 'div' | 'section' | 'li' | 'span' | 'article';
  /** Intersection threshold (0–1). */
  threshold?: number;
  style?: CSSProperties;
}

/**
 * Scroll-triggered reveal. Adds `is-visible` once the element enters the
 * viewport; CSS in globals.css handles the transition. Respects
 * prefers-reduced-motion (elements render visible immediately).
 */
export default function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  as = 'div',
  threshold = 0.15,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            io.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const Tag = as as 'div';
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal-${variant} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Tag>
  );
}
