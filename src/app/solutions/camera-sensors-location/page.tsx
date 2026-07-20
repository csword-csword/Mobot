import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Camera, Sensors & Location' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Solutions"
      title="Camera, Sensors & Location"
      intro="Barcode scans, AR overlays, GPS-triggered flows, carrier network transitions — these features depend on real-world sensor input that a simulator has to fake."
      bullets={[
        'Why it escapes simulators: a mocked camera feed can\'t catch a focus bug, and a stubbed GPS signal can\'t catch a location flow that breaks at a real cell tower handoff.',
        'How Mobot catches it: robots present real barcodes to a real camera, carry devices through real network transitions, and verify sensor-driven flows behave as intended.',
        'What ships broken without it: scan failures, AR features that never trigger, and location-based flows that only break outside the office Wi-Fi.',
      ]}
      ctaLabel="Get a Sample Report"
      ctaHref="/resources/defect-reports"
      secondaryLabel="Request a Demo"
      secondaryHref="/schedule-demo"
    />
  );
}
