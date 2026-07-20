import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Webinars & Events' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Resources"
      title="Webinars & Events"
      intro="Live sessions and co-hosted webinars on mobile QA, hardware-dependent testing, and what it takes to ship with confidence on real devices."
      body={[
        'Upcoming sessions will be listed here as they\'re scheduled. Want us to notify you about the next one?',
      ]}
      ctaLabel="Notify Me"
      ctaHref="/schedule-demo"
    />
  );
}
