import SimplePage from '@/components/SimplePage';
import PushDeepLinkPath from '@/components/PushDeepLinkPath';

export const metadata = { title: 'Push Notifications & Deep Linking' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Solutions"
      title="Push Notifications & Deep Linking"
      intro="A push that never arrives, or a deep link that opens the wrong screen, quietly breaks the moment that was supposed to bring a user back into your app."
      bullets={[
        'Why it escapes simulators: push delivery depends on a real device registered with a real carrier network and OS-level notification service — none of which an emulator has.',
        'How Mobot catches it: robots trigger real notifications on real devices and verify the full path — delivery, tap, and the exact in-app destination — the way a user actually experiences it.',
        'What ships broken without it: silent delivery failures, links that 404 or land on the wrong screen, and campaign attribution that never gets credited.',
      ]}
      ctaLabel="Get a Sample Report"
      ctaHref="/resources/defect-reports"
      secondaryLabel="Request a Demo"
      secondaryHref="/schedule-demo"
      graphic={<PushDeepLinkPath />}
    />
  );
}
