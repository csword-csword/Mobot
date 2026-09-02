import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

interface CtaBandProps {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CtaBand({
  title = 'See What Your Emulators Are Missing',
  body = 'Get a real, verified defect report from Mobot’s robots and QA analysts — on your app, on real devices.',
  primaryLabel = 'Request a Demo',
  primaryHref = '/schedule-demo',
  secondaryLabel = 'Get a Sample Report',
  secondaryHref = '/resources/defect-reports',
}: CtaBandProps) {
  return (
    <section className="py-24 px-6">
      <Reveal className="mx-auto max-w-[80rem]" variant="scale">
        <div className="relative overflow-hidden rounded-lg bg-[#0a2540] px-8 py-16 sm:px-16 text-center">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#1d4ed8]/25 blur-3xl animate-float" aria-hidden />
          <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-[#86b6ef]/15 blur-3xl" aria-hidden />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight max-w-[36rem] mx-auto mb-4">{title}</h2>
            <p className="text-white/65 text-base leading-relaxed max-w-[36rem] mx-auto mb-8">{body}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
              >
                {primaryLabel}
              </Link>
              {secondaryLabel && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center px-6 py-3 rounded-md border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors text-sm"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
