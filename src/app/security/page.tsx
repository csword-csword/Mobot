import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Security & Compliance' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Company"
      title="Security & Compliance"
      intro="Mobot is built for enterprise mobile teams, and that starts with how we handle your builds, your data, and your test results."
      bullets={[
        'SOC 2 Type II — details and reports available under NDA for enterprise procurement.',
        'Onshore and offshore operations with defined access controls around every build submitted for testing.',
        'Security-restricted accounts: ask about Mobot Labs Early Access if your builds can\'t be shared externally long-term.',
      ]}
      ctaLabel="Request Security Documentation"
      ctaHref="/schedule-demo"
    />
  );
}
