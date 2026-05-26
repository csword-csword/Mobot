import Hero from '@/components/sections/Hero';
import LogoMarquee from '@/components/sections/LogoMarquee';
import VideoSection from '@/components/sections/VideoSection';
import RolesTabs from '@/components/sections/RolesTabs';
import FeatureCards from '@/components/sections/FeatureCards';
import StatsGrid from '@/components/sections/StatsGrid';
import AutomationJourney from '@/components/sections/AutomationJourney';
import EnterprisePillars from '@/components/sections/EnterprisePillars';
import FooterCTA from '@/components/sections/FooterCTA';

export const metadata = {
  title: 'Hire a Robot Fleet for Manual Testing',
  description:
    'Scale your mobile coverage with a new type of AI-enabled service that combines real mechanical robots, physical devices, and quality experts.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <VideoSection />
      <RolesTabs />
      <FeatureCards />
      <StatsGrid />
      <AutomationJourney />
      <EnterprisePillars />
      <FooterCTA />
    </>
  );
}
