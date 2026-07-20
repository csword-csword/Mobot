import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Blog & Q&A with QA' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Resources"
      title="Blog & Q&A with QA"
      intro="Notes and conversations from Mobot's QA analysts and engineering team on what actually breaks mobile apps in the real world — and how to catch it before your users do."
      body={[
        'New posts and video Q&A sessions are added regularly. Check back soon, or get in touch if there\'s a testing topic you\'d like us to cover.',
      ]}
      ctaLabel="Talk to Us"
      ctaHref="/schedule-demo"
    />
  );
}
