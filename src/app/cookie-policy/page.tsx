import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Cookie Policy' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Legal"
      title="Cookie Policy"
      intro="Mobot's full cookie policy, covering how this site uses cookies and similar technologies, is available on request while this page is being finalized."
      ctaLabel="Contact Us"
      ctaHref="/contact"
    />
  );
}
