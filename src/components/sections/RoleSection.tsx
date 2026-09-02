import SectionHeading from '@/components/ui/SectionHeading';
import RoleExplorer from '@/components/RoleExplorer';

export default function RoleSection() {
  return (
    <section className="py-24 px-6 section-alt border-y border-slate-200">
      <div className="mx-auto max-w-[80rem]">
        <SectionHeading
          eyebrow="Unified automation for every team"
          title="One platform, every mobile team"
          sub="Mobot connects engineering, QA, product, marketing, and support around a single source of truth: verified defects on real devices. Choose your role to see what changes."
          center
          className="mb-12"
        />
        <RoleExplorer />
      </div>
    </section>
  );
}
