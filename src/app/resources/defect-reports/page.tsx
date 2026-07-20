import SimplePage from '@/components/SimplePage';

export const metadata = { title: 'Sample Defect Report' };

export default function Page() {
  return (
    <SimplePage
      eyebrow="Resources"
      title="See What a Verified Defect Report Looks Like"
      intro="Every defect Mobot reports is triaged and verified by a QA analyst before it reaches your team, with video, logs, and reproduction steps attached — so a red result is never something your engineers have to chase down first."
      bullets={[
        'Full reproduction steps and video captured on the physical device',
        'Device, OS, and network conditions logged at the moment of failure',
        'Forensic detail your team can hand straight to an engineer — no retriage required',
      ]}
      ctaLabel="Request the Sample Report"
      ctaHref="/schedule-demo"
    />
  );
}
