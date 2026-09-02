import Image from 'next/image';

interface LabPhotoProps {
  name: string;
  alt: string;
  /** Aspect ratio utility, e.g. 'aspect-[4/3]'. */
  aspect?: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

/** A framed photo from the New York lab (public/images/lab). */
export default function LabPhoto({ name, alt, aspect = 'aspect-[3/2]', caption, priority, className = '', sizes = '(max-width: 1024px) 100vw, 50vw' }: LabPhotoProps) {
  return (
    <figure className={className}>
      <div className={`relative ${aspect} overflow-hidden rounded-lg border border-slate-200 shadow-[0_20px_40px_rgba(15,23,42,0.18)] bg-[#0a2540]`}>
        <Image src={`/images/lab/${name}.webp`} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
      {caption && <figcaption className="mt-3 text-xs text-slate-400">{caption}</figcaption>}
    </figure>
  );
}
