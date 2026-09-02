import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCards from '@/components/ui/TestimonialCards';

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[80rem]">
        <SectionHeading
          eyebrow="Robot-powered testing drives results"
          title="What happens when you offload testing to robots"
          center
          className="mb-12"
        />
        <TestimonialCards limit={3} />
        <div className="text-center mt-10">
          <Link href="/customers" className="text-[#1d4ed8] font-semibold hover:text-[#1e40af] transition-colors">
            Browse all customer stories →
          </Link>
        </div>
      </div>
    </section>
  );
}
