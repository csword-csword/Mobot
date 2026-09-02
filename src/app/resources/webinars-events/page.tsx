import Link from 'next/link';
import { Calendar, MapPin, Mic, Video } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';

export const metadata = {
  title: 'Webinars & Events',
  description: 'Where to find Mobot: the 2027 Mobot User Conference, industry testing conferences, and live sessions on real-device mobile QA.',
};

const events = [
  {
    icon: Mic,
    badge: 'May 2027 · New York City',
    title: 'Mobot Annual User Conference 2027',
    body: 'Our first-ever in-person user conference. Customer stories from the main stage, the Mobot Labs certification program, and a look at what the fleet does next. Unlimited members receive a guaranteed speaking slot.',
    href: '/unlimited',
    cta: 'Learn about Unlimited membership',
  },
  {
    icon: MapPin,
    badge: 'Conferences',
    title: 'STAREAST, STARWEST & industry events',
    body: 'Mobot exhibits at the major software testing conferences. Stop by the booth for the Bug Challenge: we run a series of tests on your app with the robots — if we can’t find a bug, you get 30 days of testing free.',
    href: '/contact',
    cta: 'Ask where we’ll be next',
  },
  {
    icon: Video,
    badge: 'Live sessions',
    title: 'Webinars on real-device mobile QA',
    body: 'Co-hosted sessions on test debt, deep link and push validation, and what it takes to ship hardware-dependent features with confidence. Upcoming sessions are announced to the newsletter first.',
    href: '/resources/blog',
    cta: 'Subscribe on the blog',
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Webinars & Events"
        title="Where to find the robots in person"
        intro="Live sessions and conferences on mobile QA, hardware-dependent testing, and what it takes to ship with confidence on real devices."
        primary={{ label: 'Notify Me', href: '/contact' }}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem] grid lg:grid-cols-3 gap-5">
          {events.map((e, i) => {
            const Icon = e.icon;
            return (
              <Reveal key={e.title} delay={i * 90}>
                <div className="h-full rounded-lg border border-slate-200 bg-white p-8 flex flex-col shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-md bg-[#e8f0fe] text-[#1d4ed8] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded bg-slate-100 text-slate-500">{e.badge}</span>
                  </div>
                  <h2 className="font-bold text-[#0a2540] text-xl mb-3">{e.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{e.body}</p>
                  <Link href={e.href} className="mt-6 text-sm font-semibold text-[#1d4ed8]">{e.cta} →</Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[64rem]">
          <SectionHeading
            eyebrow="Speak with us"
            title="Want Mobot at your event?"
            sub="Our team speaks on robotic testing, computer-vision test execution, and the economics of test automation at AI-driven release velocity."
            center
          />
          <div className="text-center mt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm">
              <Calendar className="w-4 h-4" /> Invite a speaker
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
