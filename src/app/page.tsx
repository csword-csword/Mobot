import Hero from '@/components/sections/Hero';
import LogoMarquee from '@/components/sections/LogoMarquee';
import ProblemSection from '@/components/sections/ProblemSection';
import VideoSection from '@/components/sections/VideoSection';
import Pillars from '@/components/sections/Pillars';
import StatCounters from '@/components/sections/StatCounters';
import StatsGrid from '@/components/sections/StatsGrid';
import HomeProcessStrip from '@/components/sections/HomeProcessStrip';
import PricingPreview from '@/components/sections/PricingPreview';
import LabsBand from '@/components/sections/LabsBand';
import FooterCTA from '@/components/sections/FooterCTA';

export const metadata = {
  title: 'Real Robots. Real Devices. Real Defects.',
  description:
    'Mobot combines robots testing on real devices with expert QA analysts, so teams ship with confidence in the scenarios emulators can\'t reach.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ProblemSection />
      <VideoSection />
      <Pillars />
      <StatCounters />
      <StatsGrid />
      <HomeProcessStrip />
      <PricingPreview />
      <LabsBand />
      <FooterCTA />
    </>
  );
}
