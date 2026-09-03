import Hero from '@/components/sections/Hero';
import HeroLatestPosts from '@/components/sections/HeroLatestPosts';
import LogoMarquee from '@/components/sections/LogoMarquee';
import ProblemSection from '@/components/sections/ProblemSection';
import ResourceCallouts from '@/components/sections/ResourceCallouts';
import PlatformTeaser from '@/components/sections/PlatformTeaser';
import Pillars from '@/components/sections/Pillars';
import LabShowcase from '@/components/sections/LabShowcase';
import EventBand from '@/components/sections/EventBand';
import StatCounters from '@/components/sections/StatCounters';
import CompareTeaser from '@/components/sections/CompareTeaser';
import RoleSection from '@/components/sections/RoleSection';
import StatsGrid from '@/components/sections/StatsGrid';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
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
      <HeroLatestPosts />
      <StatCounters />
      <EventBand />
      <LogoMarquee />
      <ProblemSection />
      <PlatformTeaser />
      <Pillars />
      <LabShowcase />
      <CompareTeaser />
      <RoleSection />
      <StatsGrid />
      <TestimonialsSection />
      <ResourceCallouts />
      <HomeProcessStrip />
      <PricingPreview />
      <LabsBand />
      <FooterCTA />
    </>
  );
}
