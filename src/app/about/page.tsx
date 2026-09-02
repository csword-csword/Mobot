import Link from 'next/link';
import { Award, Users, Heart, Handshake, Flame, MapPin, Bot, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import LogoCloud from '@/components/ui/LogoCloud';
import RobotTapGraphic from '@/components/RobotTapGraphic';

export const metadata = {
  title: 'About Mobot',
  description: 'Mobot is reinventing how software testing is done — combining the best of humans with automation using real, mechanical robots on real devices.',
};

const values = [
  { icon: Award, t: 'Quality & Craftsmanship', d: 'We build robots that tap the same pixel ten thousand times and analysts who notice the one time it mattered.' },
  { icon: Users, t: 'People-first', d: 'Robots do the boring part so people can do the judgment part. That applies to our team and to yours.' },
  { icon: Heart, t: 'Inclusivity & Empowerment', d: 'Every voice at the bench, in the lab, and in the customer channel gets heard and gets to act.' },
  { icon: Handshake, t: 'Trust your teammate', d: 'Every result we ship is verified before it reaches you. Trust is the product.' },
  { icon: Flame, t: 'Be passionate, be resilient', d: 'Physical testing is hard. That is exactly why nobody else does it.' },
];

const facts = [
  { icon: MapPin, t: 'New York, NY', d: 'Robots, devices, and analysts operate from our New York lab, with onshore and offshore operations for 5×24 coverage.' },
  { icon: Bot, t: 'A proprietary fourth test driver', d: 'Beyond unit, integration, and UI automation: robots that physically operate real devices, supervised by humans.' },
  { icon: ShieldCheck, t: 'Built for enterprise mobile teams', d: 'Defined access controls around every build, secured artifacts end to end, and security documentation for procurement.' },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="We're reinventing how software testing is done"
        intro="Mobot is on a mission to revolutionize the way engineering teams test and ship mobile products. We combine the best of humans with automation using real, mechanical robots — because the last mile of mobile QA lives in hardware that no simulator can reach."
        primary={{ label: 'View Open Roles', href: 'https://boards.greenhouse.io/teammobot', external: true }}
        secondary={{ label: 'Request a Demo', href: '/schedule-demo' }}
        aside={<RobotTapGraphic />}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem] grid md:grid-cols-3 gap-5">
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.t} delay={i * 90}>
                <div className="h-full rounded-lg border border-slate-200 bg-white p-8">
                  <Icon className="w-5 h-5 text-[#1d4ed8] mb-4" />
                  <h2 className="font-bold text-[#0a2540] text-lg mb-2">{f.t}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="Why we exist"
            title="Real Robots. Real Devices. Real People."
            sub="We built Mobot because push notifications, Bluetooth, biometrics, deep links, and IoT integrations are where user trust is won or lost — and they're the part of the stack that scripted automation and simulators structurally can't cover. Every defect we report is real, and we find the ones nobody else can."
            center
          />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="Our core values"
            title="Values we turn into action every day"
            sub="We see every day as an opportunity to turn values into action, and we work hard to intentionally build a culture that represents them."
            center
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.t} delay={i * 70}>
                  <div className="h-full rounded-lg border border-slate-200 bg-white p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-9 h-9 rounded-md bg-[#e8f0fe] text-[#1d4ed8] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-2xl font-bold text-[#1d4ed8]/25">{i + 1}</span>
                    </div>
                    <h3 className="font-bold text-[#0a2540] mb-2">{v.t}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{v.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <LogoCloud />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[64rem]">
          <Reveal>
            <div className="rounded-lg bg-[#0a2540] p-10 sm:p-14 grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="eyebrow text-xs mb-3 !text-[#86b6ef]">Careers</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">Come build the robots</h2>
                <p className="text-white/70 leading-relaxed">
                  Robotics, computer vision, mobile, and QA operations — in a lab where the product
                  physically taps the screen. We&apos;re hiring in New York and remotely.
                </p>
              </div>
              <a
                href="https://boards.greenhouse.io/teammobot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
              >
                View open roles ↗
              </a>
            </div>
          </Reveal>
          <p className="text-center mt-8 text-sm text-slate-500">
            Press and partnership inquiries: <Link href="/contact" className="text-[#1d4ed8] font-semibold">contact us</Link>.
          </p>
        </div>
      </section>

      <CtaBand title="Ready to say goodbye to manual mobile testing?" body="Contact us today to get a demo of the robots in action testing your app." />
    </>
  );
}
