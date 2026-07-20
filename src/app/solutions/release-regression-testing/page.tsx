import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Release Regression Testing' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Solutions"
      title="Release Regression Testing"
      intro="Shipping weekly or faster means QA is usually the bottleneck. Mobot runs full regression passes on real devices overnight, so a build submitted at end of day comes back with verified results by morning."
      bullets={[
        'Why it escapes simulators: regression coverage that only runs on emulators misses the hardware-dependent defects that make it into the release anyway.',
        'How Mobot catches it: the robot fleet executes your regression suite in parallel across real devices, and QA analysts verify every failure before it reaches your backlog.',
        'What this replaces: release-day fire drills and engineering time spent triaging failures that turn out not to be bugs.',
      ]}
      ctaLabel="Get a Sample Report"
      ctaHref="/resources/defect-reports"
      secondaryLabel="Request a Demo"
      secondaryHref="/schedule-demo"
    />
  );
}
