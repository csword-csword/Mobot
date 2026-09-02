import ComparePage from '@/components/compare/ComparePage';
import { competitorProfiles } from '@/data/compare';

const profile = competitorProfiles.find((p) => p.key === 'qawolf')!;

export const metadata = {
  title: `Mobot vs. ${profile.name}`,
  description: profile.intro,
};

export default function Page() {
  return <ComparePage profile={profile} />;
}
