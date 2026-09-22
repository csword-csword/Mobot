import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CtaBand from '@/components/ui/CtaBand';

export const metadata = {
  title: 'Mobot Series A — Press Release',
  description:
    'Mobot launches the first robot-powered QA-as-a-Service testing platform for mobile apps with $12.5M Series A funding.',
};

export default function Page() {
  return (
    <>
      <article className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
        <div className="mx-auto max-w-[48rem] px-6 py-16 lg:py-24">
          <Link
            href="/press"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#1d4ed8] mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Press room
          </Link>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-3">Press release · August 18, 2022</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540] leading-tight mb-6">
            Mobot Launches the First Robot-Powered QA-as-a-Service Testing Platform for Mobile Apps with $12.5M
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Within hours, companies can enlist Mobot&apos;s fleet of physical robots to battle test their software on
            devices the way humans actually use them, catching bugs QA software can&apos;t detect.
          </p>
        </div>
      </article>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-[48rem] prose prose-slate prose-headings:text-[#0a2540] prose-a:text-[#1d4ed8]">
          <p>
            <strong>NEW YORK, N.Y., August 18, 2022</strong> — Today, Mobot publicly launched its QA-as-a-service
            platform and announced $12.5 million in Series A funding from Cota Capital, with participation from
            Heavybit, Uncorrelated Ventures, and others.
          </p>
          <p>
            Mobot&apos;s first-of-its-kind platform uses physical robots to battle test mobile applications. Companies
            serving millions of users, including Citizen, Persona, Branch, Mapbox, and Radar, use Mobot to test apps on
            hundreds of devices, platforms, and operating systems within hours.
          </p>
          <blockquote>
            &ldquo;Mobot has helped us increase our App Store rating from 4.2 to 4.8 and achieve a 99.9% crash-free
            rate,&rdquo; said Swamy Ramaswamy, CTO and COO at Sandboxx. &ldquo;Our app is responsible for helping
            military service members send and receive physical letters with family, so stability is crucial. Mobot is a
            critical part of our QA workflow and regularly uncovers issues that weren&apos;t surfaced by our internal
            software testing process.&rdquo;
          </blockquote>
          <p>
            Emulators and virtual QA environments cannot cover the edge cases that come from real devices,
            notifications, integrations, and OS fragmentation. Mobot automates those last-mile scenarios with
            mechanical robots on real hardware — so teams ship with fewer escaped defects and less manual QA grind.
          </p>
          <p>
            Challenging use cases Mobot automates include multi-device messaging, Bluetooth/Wi‑Fi hardware connections,
            push notifications and Live Activities, backwards-compatibility and camera coverage across manufacturers,
            and critical flows such as payments, login, MFA/biometrics, and backgrounded app behavior.
          </p>
          <p>
            Mobot was founded in 2018 by Eden Full Goh and is headquartered in New York. Investors include Cota Capital,
            Heavybit, Uncorrelated Ventures, and Y Combinator.
          </p>
          <p className="text-sm text-slate-500">
            <strong>Media contact:</strong>{' '}
            <a href="mailto:press@mobot.io">press@mobot.io</a>
          </p>
        </div>
      </section>

      <CtaBand title="See the robots test your app" body="Request a demo and leave with a clear view of how verified defect reports land in your queue." />
    </>
  );
}
