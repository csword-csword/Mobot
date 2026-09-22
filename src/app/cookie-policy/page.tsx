import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Cookie Policy' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Cookie Policy"
      intro="How mobot.io uses cookies. Marketing and analytics cookies are opt-in via HubSpot’s consent banner. A separate functional cookie unlocks the Annual Defect Report after you submit the download form."
      body={[
        'Marketing and analytics (opt-in): Mobot uses HubSpot for site analytics and marketing. HubSpot Data Privacy is enabled with a published cookie policy for mobot.io — cookies stay off until you opt in through HubSpot’s bottom banner. Decline or ignore the banner and those tracking cookies are not set. Manage preferences anytime from that banner. We do not show a second, conflicting cookie banner; HubSpot’s banner is the source of truth for marketing consent.',
        'Functional — Annual Defect Report unlock: Cookie name mobot_report_access (httpOnly, about 7 days). It is set only after you submit a valid email to the Annual Defect Report download form (synced to HubSpot). It is not used for advertising. Clearing site cookies or waiting for expiry removes access; submit the form again to re-unlock.',
        'More detail is in our Privacy Policy. Questions: sales@teammobot.com.',
      ]}
      ctaLabel="Request a Demo"
      ctaHref="/schedule-demo"
      secondaryLabel="Privacy Policy"
      secondaryHref="/privacy-policy"
    />
  );
}
