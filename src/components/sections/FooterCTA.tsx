import Link from 'next/link';
import Image from 'next/image';

const logos = [
  { src: '/images/logos/jolt-logo.avif', alt: 'Jolt' },
  { src: '/images/logos/koho-logo.avif', alt: 'KOHO' },
  { src: '/images/logos/batch-logo.svg', alt: 'Batch' },
  { src: '/images/logos/step-logo.avif', alt: 'Step' },
  { src: '/images/logos/persona-logo.avif', alt: 'Persona' },
  { src: '/images/logos/onx-logo.avif', alt: 'OnX' },
  { src: '/images/logos/citizen-logo.avif', alt: 'Citizen' },
  { src: '/images/logos/vivint-logo.png', alt: 'Vivint' },
];

export default function FooterCTA() {
  return (
    <section className="py-28 px-6 border-t border-white/10">
      <div className="mx-auto max-w-[77rem]">
        {/* Logo marquee */}
        <div className="relative overflow-hidden mb-16">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee gap-16 items-center">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="shrink-0 relative h-7 w-[100px]">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain opacity-30" />
              </div>
            ))}
          </div>
        </div>

        {/* 3-panel CTA */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Main CTA */}
          <div className="lg:col-span-1 rounded-2xl border border-white/10 bg-white/5 p-10 flex flex-col gap-6
                          shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]">
            <h3 className="text-2xl font-bold leading-snug">
              Ready to Transform Your Workflow with{' '}
              <span className="gradient-text">AI-Powered Robotics?</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Mobot automates the unautomatable, connecting digital tools with real-world tasks to
              deliver unmatched precision and efficiency.
            </p>
            <Link
              href="/schedule-demo"
              className="mt-auto inline-flex w-fit px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
            >
              Schedule a Demo →
            </Link>
          </div>

          {/* Secondary panels */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4
                            shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]">
              <h3 className="text-xl font-bold">Explore Use Cases</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Discover how Mobot&apos;s AI-powered robots automate the unautomatable for every
                team—Engineering, Marketing, QA, Product, and beyond.
              </p>
              <Link
                href="/#use-cases"
                className="mt-auto text-[#3da6fc] text-sm hover:text-[#86bff2] transition-colors"
              >
                Explore Use Cases →
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4
                            shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]">
              <h3 className="text-xl font-bold">Explore Case Studies</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Learn how teams have revolutionized their workflows with Mobot, reducing bugs,
                accelerating releases, and saving costs.
              </p>
              <Link
                href="/customers"
                className="mt-auto text-[#3da6fc] text-sm hover:text-[#86bff2] transition-colors"
              >
                Explore Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
