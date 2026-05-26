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

export default function LogoMarquee() {
  return (
    <div className="py-12 border-t border-white/10">
      <p className="text-center text-white/30 text-xs uppercase tracking-[0.2em] mb-8">
        Trusted by
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-16 items-center">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="shrink-0 relative h-7 w-[100px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain opacity-40 hover:opacity-70 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
