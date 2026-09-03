import Link from 'next/link';
import { FileSearch, Repeat, Video, UserCheck, XCircle, CheckCircle2, TriangleAlert, ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import DefectValidationFlow from '@/components/DefectValidationFlow';
import LabPhoto from '@/components/ui/LabPhoto';

export const metadata = {
  title: 'Defect Validation: Superior Signal-to-Noise',
  description:
    'Why a failed test is not a bug. Mobot reviews the forensic data, reproduces the failure in multiple environments, records video of the actual occurrence, and puts a QA analyst in the loop before anything reaches your team.',
};

const pillars = [
  {
    icon: FileSearch,
    title: 'We review all of the forensic data',
    lead: 'Network logs, device logs, screenshots, and timing, read together.',
    body:
      'A failed assertion tells you a screen did not match. It does not tell you why. Our analysts read the device log and the network log against the failure timestamp, alongside the screenshot at every step, to establish what actually happened: a crash, a 500 from your API, a race on cold start, or a screen that simply loaded late.',
    proof: ['Device log at the failure timestamp', 'Network calls and response codes', 'Per-step screenshots and the diff against baseline'],
  },
  {
    icon: Repeat,
    title: 'We recreate the defect in multiple environments',
    lead: 'Different device, different OS version, different app state.',
    body:
      'Before a defect is reported, it is re-run. On the same device to rule out a one-off, on a second device or OS version to establish the blast radius, and from a different app state where it matters: cold start versus backgrounded, cellular versus Wi-Fi, logged in versus fresh install. What you receive says where it reproduces and where it does not.',
    proof: ['Re-run on the original device', 'Reproduced on a second device or OS', 'App state and network conditions varied'],
  },
  {
    icon: Video,
    title: 'We provide video of the actual defect occurrence',
    lead: 'Recorded on the physical device as it happens.',
    body:
      'Every report includes video captured from the real device at the moment of failure, with the robot’s action in frame. There is no arguing about what the tester saw or whether the screenshot was taken too early. Your engineer watches the tap, watches the app respond, and sees the defect before opening a single file.',
    proof: ['Physical device, not screen capture from a simulator', 'The action and the response in one clip', 'Attached to the step where it happened'],
  },
  {
    icon: UserCheck,
    title: 'We keep a human in the loop',
    lead: 'A QA analyst reads the evidence and makes the call.',
    body:
      'Automation is good at noticing that something changed. It is bad at knowing whether that matters. A Mobot QA analyst reviews every failure, interprets the data, and decides: real defect, flaky run, or intended change. Only confirmed defects reach you, with the analyst’s note explaining what they found and how confident they are.',
    proof: ['Every failure reviewed before it is reported', 'Intended changes decided with you once, then never re-reported', 'Analyst note attached to every defect'],
  },
];

/** Two-column contrast: what arrives in your backlog from each approach. */
const contrast = [
  { q: 'What triggers a report', suite: 'Any assertion failure, including timing, selectors, and environment', mobot: 'A defect an analyst has confirmed' },
  { q: 'Evidence attached', suite: 'A stack trace and, sometimes, a screenshot', mobot: 'Video, device log, network log, per-step screenshots, repro steps' },
  { q: 'Reproduced before reporting', suite: 'No. Retry is your CI’s job', mobot: 'Yes, on the original device and at least one more environment' },
  { q: 'Where it ran', suite: 'Simulator, emulator, or a software-driven cloud device', mobot: 'A physical phone, operated mechanically by a robot' },
  { q: 'Who decides it is real', suite: 'The engineer who picks up the red build', mobot: 'A Mobot QA analyst, before your team sees it' },
  { q: 'First thing your engineer does', suite: 'Figure out whether it is a bug', mobot: 'Fix it' },
];

const faqs = [
  {
    q: 'How long does validation add before I hear about a defect?',
    a: 'Regression runs execute overnight and results are validated by morning. Analysts work the failure queue as the run completes, so validation happens in parallel with execution, not after it. For a P0 crash you are notified as soon as it is confirmed.',
  },
  {
    q: 'What happens to a failure the analyst decides is not a defect?',
    a: 'It is recorded in the platform with the analyst’s reason and does not reach your backlog. If it is an intended change, the baseline is updated with you once so it is never re-flagged. If it is flaky, it is tracked so a genuinely intermittent defect can still be caught over repeated runs.',
  },
  {
    q: 'Can I see the failures that were rejected as noise?',
    a: 'Yes. Every run, every step, and every analyst decision is visible in the Mobot platform. Validation removes noise from what gets pushed to Slack and Jira. It does not hide anything from you.',
  },
  {
    q: 'Can my own automation suite do this?',
    a: 'Partially. You can add retries, capture screenshots, and pull logs from a simulator. What you cannot get from a simulator is the real device behaviour, and what you cannot get from a script is a judgement about whether a change is a defect. That judgement is the step that turns a red build into a ticket an engineer will trust.',
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Defect validation"
        title={
          <>
            A failed test is not a bug. <span className="gradient-text">A verified defect is.</span>
          </>
        }
        intro="Automation suites and simulators report every failed assertion and leave your engineers to work out which ones matter. Mobot validates each failure before it reaches you: the forensic data is reviewed, the defect is reproduced in more than one environment, the occurrence is on video, and a QA analyst makes the call. The result is a superior signal-to-noise ratio, and a backlog your team believes."
        primary={{ label: 'See a verified defect report', href: '/resources/defect-reports/sample' }}
        secondary={{ label: 'Request a Demo', href: '/schedule-demo' }}
        aside={<DefectValidationFlow />}
      />

      {/* Signal vs noise */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="Signal-to-noise"
            title="Your automation suite is not short on failures. It is short on verdicts."
            sub="A red build from a scripted suite means one of five things, and only one of them is a bug in your app. Every other cause costs an engineer the same triage time and delivers nothing."
            className="mb-12"
          />
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <Reveal>
              <ul className="space-y-3">
                {[
                  { t: 'A locator or selector broke', d: 'The UI changed. The app works. The script does not.', noise: true },
                  { t: 'A timing wait was too short', d: 'The screen loaded 400 ms late on a shared cloud device.', noise: true },
                  { t: 'The environment failed', d: 'Simulator restart, expired session, cloud device unavailable.', noise: true },
                  { t: 'The change was intended', d: 'Copy, layout, or a redesigned flow nobody updated the test for.', noise: true },
                  { t: 'Your app has a defect', d: 'The one your engineers need to see. The one that is hardest to find in the pile.', noise: false },
                ].map((r) => (
                  <li
                    key={r.t}
                    className={`flex gap-4 rounded-lg border p-5 ${
                      r.noise ? 'border-slate-200 bg-white' : 'border-[#1d4ed8]/40 bg-[#e8f0fe]'
                    }`}
                  >
                    {r.noise ? (
                      <XCircle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-[#1d4ed8] shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className={`font-bold ${r.noise ? 'text-slate-500' : 'text-[#0a2540]'}`}>{r.t}</div>
                      <p className="text-sm text-slate-600 leading-relaxed mt-0.5">{r.d}</p>
                    </div>
                    <span className={`ml-auto self-start text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded whitespace-nowrap ${
                      r.noise ? 'bg-slate-100 text-slate-400' : 'bg-[#1d4ed8] text-white'
                    }`}>
                      {r.noise ? 'noise' : 'signal'}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-lg bg-[#0a2540] text-white p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute inset-0 dot-grid-dark opacity-70 pointer-events-none" aria-hidden />
                <div className="relative">
                  <TriangleAlert className="w-6 h-6 text-[#86b6ef] mb-5" />
                  <h3 className="text-2xl font-bold leading-snug">The retriage tax</h3>
                  <p className="text-white/70 leading-relaxed mt-4">
                    When four out of five red results are noise, engineers learn to distrust the fifth. Triage becomes
                    a chore that gets deferred, then batched, then skipped. The suite is still running. It has just
                    stopped changing what anyone does.
                  </p>
                  <p className="text-white/70 leading-relaxed mt-4">
                    Validation is the fix. Not fewer tests, and not fewer failures on the robots, but a filter between
                    the failure and your backlog that only a confirmed defect can pass. Your engineers should never be
                    the first people to ask whether a failure is real.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-md border border-white/15 p-4">
                      <div className="text-[10px] font-bold uppercase tracking-wide text-white/50">Automation suite</div>
                      <div className="text-lg font-bold mt-1">Failures, unranked</div>
                      <div className="text-xs text-white/60 mt-1">Your engineers sort them</div>
                    </div>
                    <div className="rounded-md border border-[#86b6ef]/40 bg-white/5 p-4">
                      <div className="text-[10px] font-bold uppercase tracking-wide text-[#86b6ef]">Mobot</div>
                      <div className="text-lg font-bold mt-1">Defects, verified</div>
                      <div className="text-xs text-white/60 mt-1">Analysts sorted them already</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="What validation means"
            title="Four things we do that a failed assertion never will"
            sub="Each one removes a category of noise. Together they are the reason a Mobot defect report goes straight to an engineer instead of back into a triage queue."
            center
            className="mb-14"
          />
          <div className="space-y-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 60}>
                  <div className="grid md:grid-cols-[3.5rem_1fr_18rem] gap-6 rounded-lg border border-slate-200 bg-white p-7 md:p-8 card-lift">
                    <div className="w-12 h-12 rounded-md bg-[#1d4ed8] text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#1d4ed8] mb-1">0{i + 1}</div>
                      <h3 className="text-xl font-bold text-[#0a2540]">{p.title}</h3>
                      <p className="font-semibold text-slate-700 mt-1">{p.lead}</p>
                      <p className="text-slate-600 leading-relaxed mt-3">{p.body}</p>
                    </div>
                    <ul className="md:border-l md:border-slate-200 md:pl-6 space-y-2.5 self-center">
                      {p.proof.map((x) => (
                        <li key={x} className="flex gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contrast table */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="What lands in your backlog"
            title="The same failure, reported two ways"
            sub="Simulators and scripted suites are built to run tests. They are not built to decide what a failure means. That work is left to you."
            className="mb-10"
          />
          <Reveal>
            <div className="rounded-lg border border-slate-200 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#0a2540] text-white">
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wide text-white/70 w-[28%]"> </th>
                      <th className="px-6 py-4 text-left w-[36%]">
                        <div className="font-bold">Simulators & automation suites</div>
                        <div className="text-[11px] text-white/50 font-normal mt-0.5">Appium · Maestro · XCUITest · cloud device farms</div>
                      </th>
                      <th className="px-6 py-4 text-left brand-gradient w-[36%]">
                        <div className="font-bold">Mobot</div>
                        <div className="text-[11px] text-white/70 font-normal mt-0.5">real devices · validated · human-verified</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {contrast.map((r, i) => (
                      <tr key={r.q} className={i % 2 ? 'bg-[#f8fafc]' : 'bg-white'}>
                        <td className="px-6 py-4 font-bold text-[#0a2540] align-top border-t border-slate-200">{r.q}</td>
                        <td className="px-6 py-4 text-slate-500 align-top border-t border-slate-200">{r.suite}</td>
                        <td className="px-6 py-4 text-[#0a2540] font-medium align-top border-t border-slate-200 bg-[#e8f0fe]/40">{r.mobot}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-6 items-center justify-between">
            <p className="text-sm text-slate-500 max-w-[40rem]">
              Every Mobot report is built from a real run on a physical device. Open the sanitized sample to see the
              observation, the analyst note, and the grouped steps exactly as your team would receive them.
            </p>
            <Link href="/resources/defect-reports/sample" className="inline-flex items-center gap-2 text-[#1d4ed8] font-semibold hover:text-[#1e40af]">
              Open the sample report <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lab photo band */}
      <section className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem] grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <LabPhoto name="DSC_3353" alt="Rows of real iOS and Android devices mounted in Mobot's robot racks" caption="The evidence in every report comes from physical devices in the New York lab." />
          </Reveal>
          <Reveal variant="right">
            <p className="eyebrow text-xs mb-4">Why real devices matter here</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] leading-tight">Validation only works when the evidence is real</h2>
            <p className="text-slate-600 leading-relaxed mt-5">
              Reproducing a crash on a simulator proves the simulator crashes. Reproducing it on an iPhone 13 running
              a developer beta, then on a Pixel on a carrier network, proves your users will hit it. Because Mobot’s
              robots operate physical devices, every log, every screenshot, and every second of video comes from the
              hardware your customers actually hold.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              That is also why the analyst’s verdict carries weight. They are not interpreting a model of a phone.
              They are watching the phone.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/why-real-devices" className="inline-flex items-center gap-2 text-[#1d4ed8] font-semibold hover:text-[#1e40af]">
                Why real devices <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/compare" className="inline-flex items-center gap-2 text-[#1d4ed8] font-semibold hover:text-[#1e40af]">
                Compare approaches <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-[56rem]">
          <SectionHeading eyebrow="Questions" title="Defect validation, in practice" className="mb-10" />
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6 font-bold text-[#0a2540]">
                  {f.q}
                  <span className="text-[#1d4ed8] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="text-slate-600 leading-relaxed mt-3 max-w-[44rem]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Get a verified defect report on your app"
        body="Send us a build. Robots run it on real devices, analysts validate every failure, and you get back defects your engineers can fix without a second look."
        primaryLabel="Request a Demo"
        secondaryLabel="See the sample report"
        secondaryHref="/resources/defect-reports/sample"
      />
    </>
  );
}
