import Hero from '@/components/sections/Hero';
import HeroCustomerProof from '@/components/sections/HeroCustomerProof';
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
import ReportFeature from '@/components/report/ReportFeature';
import Reveal from '@/components/ui/Reveal';

export const metadata = {
  title: 'Real Robots. Real Devices. Real Defects.',
  description:
    'Mobot combines robots testing on real devices with expert QA analysts, so teams ship with confidence in the scenarios emulators can\'t reach.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCustomerProof />
      <StatCounters />
      <section className="py-16 px-6 bg-[#0a2540] border-y border-white/10" aria-label="Annual Defect Report">
        <div className="mx-auto max-w-[80rem]">
          <Reveal>
            <ReportFeature />
          </Reveal>
        </div>
      </section>
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
