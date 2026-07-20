import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Privacy Policy' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Mobot's full privacy policy, covering how we handle data from your builds, your team, and your website visit, is available on request while this page is being finalized."
      ctaLabel="Contact Us"
      ctaHref="/contact"
    />
  );
}
