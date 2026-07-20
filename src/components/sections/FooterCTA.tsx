import Link from 'next/link';
import Image from 'next/image';

const logos = [
  { src: '/images/jolt-logo_1.avif', alt: 'Jolt' },
  { src: '/images/koho-logo_1.avif', alt: 'KOHO' },
  { src: '/images/batch-logo.svg', alt: 'Batch' },
  { src: '/images/step-logo_1.avif', alt: 'Step' },
  { src: '/images/persona-logo_1.avif', alt: 'Persona' },
  { src: '/images/on-x-logo_1.avif', alt: 'OnX' },
  { src: '/images/citizen-logo_1.avif', alt: 'Citizen' },
  { src: '/images/Vivint.png', alt: 'Vivint' },
  { src: '/images/Group-234.svg', alt: '' },
  { src: '/images/why-logo.avif', alt: '' },
  { src: '/images/Logo-02.svg', alt: '' },
  { src: '/images/Logo-03.svg', alt: '' },
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
              See What Your <span className="gradient-text">Emulators Are Missing</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Get a real, verified defect report from Mobot&apos;s robots and QA analysts&mdash;on
              your app, on real devices.
            </p>
            <Link
              href="/resources/defect-reports"
              className="mt-auto inline-flex w-fit px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
            >
              Get a Sample Report →
            </Link>
          </div>

          {/* Secondary panels */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4
                            shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]">
              <h3 className="text-xl font-bold">Explore Solutions</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                See where Mobot catches the defects that emulators and scripted automation
                structurally can&apos;t&mdash;push, Bluetooth, biometrics, camera, and release
                regression.
              </p>
              <Link
                href="/solutions"
                className="mt-auto text-[#3da6fc] text-sm hover:text-[#86bff2] transition-colors"
              >
                Explore Solutions →
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4
                            shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]">
              <h3 className="text-xl font-bold">Explore Case Studies</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Learn how teams have reduced escaped defects, sped up releases, and gotten
                engineering hours back with Mobot.
              </p>
              <Link
                href="/resources/case-studies"
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
