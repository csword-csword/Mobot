import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import HeroPlatformStack from '@/components/HeroPlatformStack';

const proof = [
  'Real phones, operated by robots. No simulators.',
  'AI-authored tests. No scripts for your team to maintain.',
  'Every failure validated by a QA analyst before you see it.',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
      <div className="absolute inset-0 dot-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
      <div className="absolute -top-32 right-[-8rem] w-[34rem] h-[34rem] rounded-full bg-[#6d3fe0]/15 blur-3xl animate-float" aria-hidden="true" />
      <div className="absolute -bottom-40 left-[-10rem] w-[30rem] h-[30rem] rounded-full bg-[#1d4ed8]/12 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-[80rem] px-6 py-16 lg:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div>
          <p className="hero-line hero-line-1 eyebrow text-sm mb-5">Robotic mobile testing · human-verified</p>
          <h1 className="font-bold tracking-tight text-[#0a2540] text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-6">
            <span className="hero-line hero-line-2 block">Real Robots.</span>
            <span className="hero-line hero-line-3 block">Real Devices.</span>
            <span className="hero-line hero-line-4 block gradient-text">Real Defects.</span>
          </h1>
          <p className="hero-line hero-line-5 text-slate-600 text-lg leading-relaxed max-w-[34rem] mb-7">
            Mobot runs your app on real iPhones and Androids with real robots, then validates every failure
            before it reaches your team. Fewer scripts than Appium or Maestro. Bugs that simulators can&apos;t
            see. A signal-to-noise ratio your engineers will trust.
          </p>
          <ul className="hero-line hero-line-5 space-y-2 mb-9">
            {proof.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[15px] text-[#0a2540]">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#1d4ed8] shrink-0 mt-[3px]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="hero-line hero-line-6 flex flex-wrap gap-4">
            <Link
              href="/schedule-demo"
              className="inline-flex items-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
            >
              Request a Demo
            </Link>
            <Link
              href="/resources/defect-reports/sample"
              className="inline-flex items-center px-6 py-3 rounded-md border border-slate-300 text-[#0a2540] font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm"
            >
              See a Verified Defect Report
            </Link>
          </div>
        </div>

        {/* Condensed platform stack */}
        <div className="hero-line hero-line-6">
          <HeroPlatformStack />
        </div>
      </div>
    </section>
  );
}
