import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

/** Product video, moved out of the hero so the Annual Defect Report can take that slot. */
export default function VideoBand() {
  return (
    <section className="py-24 px-6 bg-[#0a2540] border-y border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
      <div className="relative mx-auto max-w-[80rem] grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
        <Reveal variant="left">
          <p className="eyebrow text-xs mb-4 !text-[#86b6ef]">See it run</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Robots on real phones, not scripts on simulators</h2>
          <p className="text-white/70 leading-relaxed mt-5">
            A Mobot cell drives a physical device the way a user does: a mechanical tap, a real swipe, a real
            camera, a real push notification arriving over a real network. Computer vision reads the screen,
            so there is no selector to break when your UI changes.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-[#86b6ef] font-semibold hover:text-white transition-colors">
              How it works <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/devices" className="inline-flex items-center gap-2 text-[#86b6ef] font-semibold hover:text-white transition-colors">
              The device fleet <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal variant="right">
          <div className="rounded-lg border border-white/15 bg-[#101820] shadow-[0_24px_60px_rgba(0,0,0,0.4)] overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <video className="w-full aspect-video object-cover" autoPlay muted loop playsInline>
              <source src="/videos/mobot-optimized-transcode.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
