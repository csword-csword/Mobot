import Image from 'next/image';
import { customerLogos } from '@/data/content';

interface LogoCloudProps {
  title?: string;
  /** Limit the number of logos shown. */
  limit?: number;
  className?: string;
}

export default function LogoCloud({ title = 'Trusted by mobile teams', limit, className = '' }: LogoCloudProps) {
  const logos = limit ? customerLogos.slice(0, limit) : customerLogos;
  return (
    <div className={className}>
      {title && (
        <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.15em] mb-8">{title}</p>
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-8 items-center">
        {logos.map((logo) => (
          <div key={logo.alt} className="relative h-7 w-full">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain grayscale opacity-55 hover:opacity-90 hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
