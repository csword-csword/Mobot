import ScheduleDemoForm from '@/components/forms/ScheduleDemoForm';
import HubSpotMeetingsEmbed from '@/components/forms/HubSpotMeetingsEmbed';

export const metadata = { title: 'Request a Demo' };

/**
 * Primary path: HubSpot Meetings embed (same scheduler as pre-cutover Webflow).
 * Secondary: first-party intake form → HubSpot Forms API when GUID is configured.
 */
export default function Page() {
  return (
    <section className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
      <div className="mx-auto max-w-[72rem] px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <p className="eyebrow text-sm mb-5">Get Started</p>
          <h1 className="font-bold tracking-tight text-[#0a2540] text-4xl sm:text-5xl leading-[1.1] mb-6">
            Request a demo
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            See Mobot test your app on real devices — and leave with a clear view of Credits vs
            Unlimited, plus how verified defect reports land in your queue.
          </p>
          <ul className="space-y-3">
            {[
              'A walkthrough of robots + analyst verification on real iOS and Android devices',
              'What a forensic defect report looks like (video, logs, repro steps)',
              'Pricing path for Credits and Mobot Unlimited',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-slate-700 text-base leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1d4ed8] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-slate-500 leading-relaxed">
            Prefer email?{' '}
            <a href="mailto:sales@teammobot.com" className="text-[#1d4ed8] font-semibold hover:underline">
              sales@teammobot.com
            </a>
            . Work email required on the form below.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <HubSpotMeetingsEmbed />
          <div>
            <h2 className="font-bold text-[#0a2540] text-lg mb-3">Or leave details and we&apos;ll follow up</h2>
            <ScheduleDemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
