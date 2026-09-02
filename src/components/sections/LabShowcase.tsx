import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

const photos = [
  { name: 'DSC_3356', alt: 'Robot stylus arm poised over a phone on its test stage', span: 'md:col-span-2 md:row-span-2', aspect: 'aspect-[3/2] md:aspect-auto' },
  { name: 'DSC_3443', alt: 'Two-tier robot rack with phones on illuminated stages', span: '', aspect: 'aspect-[3/4]' },
  { name: 'DSC_3399', alt: 'Close-up of a robot stylus tapping a phone screen', span: '', aspect: 'aspect-[3/4]' },
  { name: 'IMG_0017', alt: 'Wide view of the lab with a rack of robot cells, each holding a phone', span: 'md:col-span-2', aspect: 'aspect-[16/9]' },
];

export default function LabShowcase() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-[#0a2540]">
      <div className="absolute -top-40 left-1/3 w-[40rem] h-[40rem] rounded-full bg-[#6d3fe0]/25 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-[86rem] grid lg:grid-cols-[1fr_1.6fr] gap-12 items-center">
        <Reveal variant="left">
          <p className="eyebrow text-xs mb-4 !text-[#86b6ef]">Inside the lab</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Real robots. Real phones. Running tonight in New York.
          </h2>
          <p className="text-white/65 leading-relaxed mb-4">
            Every Mobot cell is a mechanical stylus over a real iOS or Android device on a lit stage.
            The robot taps glass, the camera sees the screen, and an analyst reviews what happened
            &mdash; hundreds of times a night, in parallel, across the fleet.
          </p>
          <p className="text-white/65 leading-relaxed mb-8">
            Not a render. Not a device farm driving phones through software. This is the hardware
            your tests run on.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/platform" className="inline-flex px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm">
              Explore the Platform
            </Link>
            <Link href="/devices" className="inline-flex px-6 py-3 rounded-md border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors text-sm">
              See the Device Fleet
            </Link>
          </div>
        </Reveal>
        <Reveal variant="right" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3">
            {photos.map((p) => (
              <div key={p.name} className={`relative overflow-hidden rounded-md border border-white/10 ${p.span} ${p.aspect} min-h-[9rem]`}>
                <Image src={`/images/lab/${p.name}.webp`} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 30vw" className="object-cover hover:scale-[1.03] transition-transform duration-700" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
