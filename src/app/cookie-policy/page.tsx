import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Cookie Policy' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Cookie Policy"
      intro="How mobot.io uses cookies. Marketing and analytics cookies are opt-in. A separate functional cookie unlocks the Annual Defect Report after you submit the download form."
      body={[
        'Marketing and analytics (opt-in): Mobot uses HubSpot (portal 21630472) for consent and marketing cookies, and Google Analytics 4 (G-HF9WN9YYQV) for site analytics. Google Consent Mode defaults to denied. GA4 loads only after hard evidence of opt-in (HubSpot Accept / hubspotutk present, and not declined). Decline keeps analytics and ad storage denied.',
        'On www.mobot.io, HubSpot’s published require-opt-in banner is the primary control. Use Cookie Settings in the footer anytime to change your choice.',
        'Preview / staging hosts: HubSpot’s banner is primary when the hostname is allowlisted in HubSpot Privacy & Consent. If that banner never appears, a first-party Accept / Reject panel appears as fallback only (never both) and still drives HubSpot’s consent API.',
        'Functional — Annual Defect Report unlock: Cookie name mobot_report_access (httpOnly, about 7 days). Set only after you submit a valid email to the Annual Defect Report HubSpot form. It is not marketing consent and is not used for advertising or analytics. Clearing cookies or waiting for expiry removes access; submit the form again to re-unlock.',
        'More detail is in our Privacy Policy. Questions: sales@teammobot.com.',
      ]}
      ctaLabel="Request a Demo"
      ctaHref="/schedule-demo"
      secondaryLabel="Privacy Policy"
      secondaryHref="/privacy-policy"
    />
  );
}
