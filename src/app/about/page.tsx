import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'About Mobot' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Company"
      title="Real Robots. Real Devices. Real People."
      intro="Mobot is the physical testing platform for mobile-first companies whose apps depend on real-world hardware behavior. We combine robots that execute tests on real devices with expert QA analysts who verify every result, so teams ship with confidence in the scenarios emulators can't reach."
      body={[
        "We built Mobot because the last mile of mobile QA — push notifications, Bluetooth, biometrics, deep links, IoT integrations — is where user trust is won or lost, and it's the part of the stack that scripted automation and simulators structurally can't cover.",
        'Every defect we report is real, and we find the ones nobody else can.',
      ]}
      ctaLabel="Join the Team"
      ctaHref="https://boards.greenhouse.io/teammobot"
      secondaryLabel="Request a Demo"
      secondaryHref="/schedule-demo"
    />
  );
}
