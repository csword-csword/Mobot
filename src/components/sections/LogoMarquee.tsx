import Image from 'next/image';
import { customerLogos } from '@/data/content';

export default function LogoMarquee() {
  // Duplicate once for seamless CSS loop only — source list has each brand once.
  const logos = [...customerLogos, ...customerLogos];
  return (
    <div className="py-12 bg-[#0a2540] border-t-2 border-transparent [border-image:linear-gradient(90deg,#1d4ed8,#6d3fe0,#b23fb0)_1]">
      <p className="text-center text-white/50 text-xs font-bold uppercase tracking-[0.15em] mb-8">
        Trusted by Leading Mobile Teams
      </p>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a2540] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a2540] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee gap-16 items-center">
          {logos.map((logo, i) => (
            <div key={`${logo.alt}-${i}`} className="shrink-0 relative h-9 w-[130px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className={
                  logo.asIsOnDark
                    ? 'object-contain opacity-70 hover:opacity-100 transition-opacity'
                    : 'object-contain brightness-0 invert opacity-50 hover:opacity-90 transition-opacity'
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
