import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Bluetooth & Connected Devices (IoT)' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Solutions"
      title="Bluetooth & Connected Devices (IoT)"
      intro="Wearables, POS hardware, car pairing, medical devices — if your app talks to something physical, there is no emulator that can stand in for the real pairing."
      bullets={[
        "Why it escapes simulators: there's no software model for a Bluetooth radio finding, pairing with, and holding a connection to a physical peripheral. This category has no emulator at all.",
        'How Mobot catches it: robots pair real devices with real peripherals under real conditions, and QA analysts verify the connection, data exchange, and failure handling.',
        'Who this matters most for: teams building against physical hardware have no alternative testing path — this is Mobot’s most uncontested ground.',
      ]}
      ctaLabel="Get a Sample Report"
      ctaHref="/resources/defect-reports"
      secondaryLabel="Request a Demo"
      secondaryHref="/schedule-demo"
    />
  );
}
