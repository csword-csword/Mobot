import SolutionPage from '@/components/SolutionPage';
import { solutions } from '@/data/solutions';

const solution = solutions.find((s) => s.slug === 'camera-sensors-location')!;

export const metadata = {
  title: solution.title,
  description: solution.intro,
};

export default function Page() {
  return <SolutionPage solution={solution} />;
}
