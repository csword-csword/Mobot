import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Cookie Policy' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Cookie Policy"
      intro="How mobot.io uses cookies. Marketing and analytics cookies are opt-in. A separate functional cookie unlocks the Annual Defect Report after you submit the download form."
      body={[
        'Marketing and analytics (opt-in): Mobot uses HubSpot for site analytics and marketing. On www.mobot.io, HubSpot’s published consent banner (Data Privacy: cookies enabled, require opt-in) is the primary control. Decline or ignore and those tracking cookies stay off. Use Cookie Settings in the footer anytime to change your choice.',
        'Preview / staging hosts: HubSpot’s banner only auto-appears on domains allowlisted in HubSpot Privacy & Consent. On Vercel preview URLs we show Mobot’s first-party cookie panel instead, which still tells HubSpot your choice through HubSpot’s consent API (setHubSpotConsent / doNotTrack). Same Accept / Reject behavior — not a conflicting second policy.',
        'Functional — Annual Defect Report unlock: Cookie name mobot_report_access (httpOnly, about 7 days). Set only after you submit a valid email to the Annual Defect Report download form (synced to HubSpot). Not used for advertising. Clearing cookies or waiting for expiry removes access; submit the form again to re-unlock.',
        'More detail is in our Privacy Policy. Questions: sales@teammobot.com.',
      ]}
      ctaLabel="Request a Demo"
      ctaHref="/schedule-demo"
      secondaryLabel="Privacy Policy"
      secondaryHref="/privacy-policy"
    />
  );
}
