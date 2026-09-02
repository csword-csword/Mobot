'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { FaqItem } from '@/data/faq';

export default function FaqAccordion({ items, defaultOpen = 0 }: { items: FaqItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-6 text-left px-6 py-5 hover:bg-slate-50 transition-colors"
            >
              <span className="font-bold text-[#0a2540] text-base leading-snug">{item.q}</span>
              <Plus
                className={`w-5 h-5 shrink-0 mt-0.5 text-[#1d4ed8] transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
