import Link from 'next/link';
import { Calendar, CalendarDays, MapPin, Mic, Video, ArrowUpRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import { upcomingEvents } from '@/data/events';

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
  const upcoming = upcomingEvents();
  return (
    <>
      <PageHero
        eyebrow="Webinars & Events"
        title="Where to find the robots in person"
        intro="Live sessions and conferences on mobile QA, hardware-dependent testing, and what it takes to ship with confidence on real devices."
        primary={{ label: 'Notify Me', href: '/contact' }}
      />

      {upcoming.length > 0 && (
        <section className="py-16 px-6 border-b border-slate-200">
          <div className="mx-auto max-w-[80rem]">
            <SectionHeading eyebrow="Up next" title="Meet Mobot in person" className="mb-8" />
            <div className="grid gap-5">
              {upcoming.map((e, i) => (
                <Reveal key={e.slug} delay={i * 80}>
                  <div className="relative overflow-hidden rounded-lg border border-[#6d3fe0]/30 bg-white p-8 shadow-[0_1px_3px_rgba(15,23,42,0.08)] grid lg:grid-cols-[1fr_auto] gap-8 items-center">
                    <div className="absolute inset-y-0 left-0 w-1.5 brand-gradient" aria-hidden="true" />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#6d3fe0] mb-2">{e.role} &middot; {e.organizer}</p>
                      <h2 className="text-2xl font-bold text-[#0a2540] mb-3">{e.name}</h2>
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold text-[#0a2540] mb-3">
                        <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-4 h-4 text-[#1d4ed8]" /> {e.dateLabel}</span>
                        <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#1d4ed8]" /> {e.venue ? `${e.venue}, ` : ''}{e.city}</span>
                        {e.booth && <span>Booth {e.booth}</span>}
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed max-w-[44rem]">{e.blurb}</p>
                    </div>
                    <div className="flex flex-wrap lg:flex-col gap-3 lg:min-w-[13rem]">
                      <Link href="/schedule-demo" className="inline-flex justify-center px-5 py-2.5 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm">
                        Book time with us there
                      </Link>
                      <a href={e.url} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-1.5 px-5 py-2.5 rounded-md border border-slate-300 text-[#0a2540] font-semibold hover:bg-slate-50 transition-colors text-sm">
                        Event details <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

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
