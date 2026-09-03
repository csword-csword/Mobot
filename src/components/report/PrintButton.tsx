'use client';

import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-300 text-[#0a2540] font-semibold hover:bg-slate-50 transition-colors text-sm print:hidden"
    >
      <Printer className="w-4 h-4" /> Save as PDF
    </button>
  );
}
