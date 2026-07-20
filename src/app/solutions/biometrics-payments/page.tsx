import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Biometrics & Payments' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Solutions"
      title="Biometrics & Payments"
      intro="A payment that fails on Face ID is one of the fastest ways to lose a user's trust — and it's a scenario most test suites never actually exercise."
      bullets={[
        'Why it escapes simulators: Face ID, Touch ID, and fingerprint sensors are physical hardware with device-level security boundaries that software-injected input can\'t faithfully reproduce.',
        'How Mobot catches it: robots interact with real biometric hardware and real payment flows end to end, and every failure is verified by a QA analyst before it reaches your team.',
        'What ships broken without it: authentication flows that silently fail on specific device/OS combinations, and payment confirmations that never complete.',
      ]}
      ctaLabel="Get a Sample Report"
      ctaHref="/resources/defect-reports"
      secondaryLabel="Request a Demo"
      secondaryHref="/schedule-demo"
    />
  );
}
