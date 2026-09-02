import Link from 'next/link';
import { CalendarDays, MapPin, ArrowUpRight, Bot } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { upcomingEvents } from '@/data/events';

export default function EventBand() {
  const event = upcomingEvents()[0];
  if (!event) return null;

  return (
    <section className="px-6 py-6 section-alt border-b border-slate-200" aria-label="Upcoming event">
      <Reveal variant="fade">
        <div className="mx-auto max-w-[86rem] relative overflow-hidden rounded-lg border border-[#6d3fe0]/30 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-y-0 left-0 w-1.5 brand-gradient" aria-hidden="true" />
          <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-[#6d3fe0]/10 blur-3xl" aria-hidden="true" />
          <div className="relative grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-10 items-center px-7 py-6 lg:px-10">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-md brand-gradient text-white flex items-center justify-center shrink-0">
                <Bot className="w-6 h-6" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#6d3fe0]">
                  We&apos;re a {event.role.toLowerCase()} &middot; {event.organizer}
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a2540] leading-tight">{event.name}</h2>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold text-[#0a2540] mb-1.5">
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-4 h-4 text-[#1d4ed8]" /> {event.dateLabel}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#1d4ed8]" /> {event.venue ? `${event.venue}, ` : ''}{event.city}</span>
                {event.booth && <span className="inline-flex items-center gap-1.5">Booth {event.booth}</span>}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-[44rem]">
                See a robot physically test a real device, and walk through a verified defect report on your own app.
              </p>
            </div>

            <div className="flex flex-wrap lg:flex-col gap-3 lg:min-w-[13rem]">
              <Link
                href="/schedule-demo"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
              >
                Book time with us there
              </Link>
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-md border border-slate-300 text-[#0a2540] font-semibold hover:bg-slate-50 transition-colors text-sm"
              >
                Event details <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
