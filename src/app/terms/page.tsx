import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Terms of Service' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Terms of Service"
      intro="Mobot's services are governed by a Master Services Agreement (MSA) executed with each customer. This page summarizes where to find that agreement — for the full text applicable to your account, contact your Mobot representative."
      bullets={[
        'Standard managed-service engagements are governed by a signed MSA and accompanying order form.',
        'Mobot Labs Early Access participants engage under the same MSA, with a conversion option rather than a separate purchase.',
      ]}
      ctaLabel="Contact Us"
      ctaHref="/contact"
    />
  );
}
