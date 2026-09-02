import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function PricingPreview() {
  return (
    <section className="py-24 px-6 section-alt border-y border-slate-200">
      <div className="mx-auto max-w-[80rem]">
        <div className="text-center mb-14">
          <p className="eyebrow text-xs mb-5">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-[42rem] mx-auto text-[#0a2540]">
            Start Where You Are
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1.35fr] gap-5 max-w-[64rem] mx-auto items-stretch">
          <Reveal>
            <div className="h-full rounded-lg border border-slate-200 bg-white p-8">
              <span className="eyebrow text-xs">Prove It</span>
              <h3 className="text-2xl font-bold text-[#0a2540] mt-2 mb-2">Credits</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Buy testing actions, point us at your app, see the defect report. Low-friction to
                start, procurement-friendly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative h-full rounded-lg border-2 border-[#6d3fe0]/60 bg-[#0a2540] p-8 text-white shadow-[0_10px_24px_rgba(109,63,224,0.28)] overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#6d3fe0]/30 blur-3xl" aria-hidden="true" />
              <span className="absolute -top-3 left-8 text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-md brand-gradient text-white">
                Flagship
              </span>
              <span className="eyebrow text-xs !text-[#86b6ef]">Make It Your Backbone</span>
              <h3 className="text-2xl font-bold mt-2 mb-2">Mobot Unlimited</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Unlimited test runs across unlimited apps on 300+ real devices. One flat annual rate,
                no credits, no caps — by invitation.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-white/85">
                {['Unlimited runs, every month', 'Dedicated Technical Account Manager', 'Advisory Board + 2027 conference slot', 'Mobot Labs early access'].map((b) => (
                  <li key={b} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#86b6ef] shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/unlimited"
            className="inline-flex px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
          >
            Explore Mobot Unlimited
          </Link>
          <Link
            href="/pricing"
            className="inline-flex px-6 py-3 rounded-md border border-slate-300 text-[#0a2540] font-semibold hover:bg-white transition-colors text-sm"
          >
            See Pricing Structure
          </Link>
        </div>
      </div>
    </section>
  );
}
