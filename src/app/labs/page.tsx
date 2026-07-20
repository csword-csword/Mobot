import Link from 'next/link';
import LabsBridgeTimeline from '@/components/LabsBridgeTimeline';

export const metadata = { title: 'Mobot Labs — Early Access' };

const fitProfiles = [
  {
    title: 'Build-vs-Buy Teams',
    body: 'You\'ve weighed standing up your own robotic testing operation against a managed service. Labs lets you do both, on a single timeline.',
  },
  {
    title: 'High Test-Volume Programs',
    body: 'Continuous release cadences that outgrow a shared testing queue are exactly what a dedicated, owned lab is built for.',
  },
  {
    title: 'Security-Restricted Accounts',
    body: 'If your builds can\'t be shared externally long-term, an on-premise lab you own and operate is the path forward.',
  },
];

export default function Page() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[56rem] px-6 py-32 lg:py-40">
          <div className="flex items-center gap-3 mb-5">
            <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Mobot Labs</p>
            <span className="text-xs uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#3da6fc]/10 text-[#3da6fc]">
              Early access begins 2027
            </span>
          </div>
          <h1 className="font-bold tracking-tight text-4xl sm:text-5xl leading-[1.1] mb-6">
            Own Your Robotic Testing Lab
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-[42rem]">
            Mobot robots. Mobot&apos;s platform. Your team, trained and certified to run it. Mobot
            Labs is the next step for teams who want physical, expert-grade testing under their own
            roof &mdash; without building the operation from scratch.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[56rem]">
          <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4">The Bridge</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Start Today on Managed Service. Migrate When Labs Ships.
          </h2>
          <p className="text-white/60 leading-relaxed max-w-[42rem] mb-12">
            Early Access customers onboard now on Mobot Managed &mdash; our team builds your test
            cases and runs your testing today. When Labs ships, you migrate to your own robotic lab
            with Mobot training and certification, carrying your existing test suite with you.
            There&apos;s no gap in coverage between now and then.
          </p>
          <LabsBridgeTimeline />
        </div>
      </section>

      <section className="py-24 px-6 border-y border-white/10">
        <div className="mx-auto max-w-[64rem]">
          <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4 text-center">Who This Is For</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">Three Fit Profiles</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {fitProfiles.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8
                           shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]"
              >
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="mx-auto max-w-[36rem]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Apply for Early Access</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Early Access is a limited, application-based cohort. Tell us about your program and
            we&apos;ll follow up to see if it&apos;s a fit.
          </p>
          <Link
            href="/schedule-demo"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
          >
            Apply for Early Access
          </Link>
        </div>
      </section>
    </>
  );
}
