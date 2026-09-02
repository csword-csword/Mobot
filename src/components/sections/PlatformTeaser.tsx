import Link from 'next/link';
import PlatformStack from '@/components/PlatformStack';

export default function PlatformTeaser() {
  return (
    <section className="py-24 px-6 section-alt border-y border-slate-200">
      <div className="mx-auto max-w-[80rem]">
        <PlatformStack />
        <div className="text-center mt-10">
          <Link
            href="/platform"
            className="inline-flex px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
          >
            Explore the Platform
          </Link>
        </div>
      </div>
    </section>
  );
}
