import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Contact' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Company"
      title="Get in Touch"
      intro="Have a question about Mobot, want to see a sample defect report, or ready to talk about your testing coverage? Reach out and we'll get back to you."
      bullets={[
        'Sales & demos: sales@teammobot.com',
        'New York, NY',
      ]}
      ctaLabel="Request a Demo"
      ctaHref="/schedule-demo"
    />
  );
}
