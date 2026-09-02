import { Star } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { testimonials } from '@/data/content';

export default function TestimonialCards({ limit = 3, dark }: { limit?: number; dark?: boolean }) {
  const items = testimonials.slice(0, limit);
  return (
    <div className={`grid gap-5 ${items.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
      {items.map((t, i) => (
        <Reveal key={t.name} delay={i * 90}>
          <figure
            className={`h-full flex flex-col rounded-lg border p-8 ${
              dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)]'
            }`}
          >
            <div className="flex items-center gap-0.5 mb-4" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="w-4 h-4 fill-[#b8860b] text-[#b8860b]" />
              ))}
            </div>
            {t.metric && (
              <div className={`text-2xl font-bold mb-3 ${dark ? 'gradient-text-dark' : 'gradient-text'}`}>{t.metric}</div>
            )}
            <blockquote className={`text-sm leading-relaxed flex-1 ${dark ? 'text-white/75' : 'text-slate-600'}`}>
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-slate-200/60">
              <div className={`font-bold text-sm ${dark ? 'text-white' : 'text-[#0a2540]'}`}>{t.name}</div>
              <div className={`text-xs ${dark ? 'text-white/50' : 'text-slate-500'}`}>
                {t.title}, {t.company}
              </div>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
