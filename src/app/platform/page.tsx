import Link from 'next/link';
import { Sparkles, ListChecks, Eye, Bot, UserCheck, Layers } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import LogoCloud from '@/components/ui/LogoCloud';
import PlatformStack from '@/components/PlatformStack';
import RobotTapGraphic from '@/components/RobotTapGraphic';
import DeviceGrid from '@/components/DeviceGrid';
import SampleDefectReport from '@/components/SampleDefectReport';
import CvAuthoringVisual from '@/components/compare/CvAuthoringVisual';
import LabPhoto from '@/components/ui/LabPhoto';

export const metadata = {
  title: 'The Mobot Platform',
  description:
    'Four layers that take a mobile app from generated test script to validated release — executed by robots on real iOS and Android devices, not emulators.',
};

const layerDetails = [
  {
    n: '04',
    icon: Sparkles,
    name: 'Test Authoring',
    title: 'Coverage that writes itself — and holds up',
    body: 'AI explores your app build and generates test scripts across the user journeys that matter: onboarding, login, payments, notifications, and the hardware-dependent flows that never make it into a scripted suite. Each script is validated and optimized for coverage and stability before it reaches the fleet.',
    points: [
      'Auto-generated scripts from your build — no code, no YAML, no recorder',
      'Validation pass catches ambiguous steps before a robot ever runs them',
      'Coverage optimization prioritizes the journeys that reach production broken',
    ],
    visual: 'cv',
  },
  {
    n: '03',
    icon: ListChecks,
    name: 'Test Management',
    title: 'Orchestration, defects, and analytics — same day',
    body: 'Suites are assigned to robots and devices, queued and scheduled around your release calendar, and tracked action by action. When a run finishes, defects and analytics are reported the same day into the Mobot platform and the tools your team already lives in.',
    points: [
      'Suite management and queue scheduling across the fleet',
      'Side-by-side baseline vs. actual screenshots for every step',
      'Defect patterns across devices, OS versions, and builds',
      'Slack, Jira, and TestRail integrations',
    ],
    visual: 'report',
  },
  {
    n: '02',
    icon: Eye,
    name: 'AI Driver',
    title: 'Computer vision executes the test on real hardware',
    body: 'The AI Driver looks at the screen the way a person does. It recognizes on-screen UI — buttons, fields, dialogs, system prompts — and drives the robot to tap, swipe, and gesture with minimal manual intervention. There are no selectors to break, so a redesign doesn’t turn into a repair sprint.',
    points: [
      'CV-driven interaction: reads the rendered screen, not the view hierarchy',
      'Scripted execution with human intervention only where the OS demands a person',
      'Consistent, identical execution on every run, on every device',
    ],
    visual: 'robot',
  },
  {
    n: '01',
    icon: Bot,
    name: 'Robot Fleet',
    title: 'Real devices, real gestures, in parallel',
    body: 'Mechanical robots physically drive real iOS and Android devices the way humans actually use them. Each robot handles up to three devices at once for parallel, cross-OS coverage — and because the input is a real tap on real glass, the digitizer, radios, camera, and secure enclave are all in play.',
    points: [
      '300+ real iOS and Android phones and tablets, current and legacy OS versions',
      'Up to 3 devices per robot for multi-device and cross-platform scenarios',
      'Physical, not emulated: push, Bluetooth, biometrics, camera, carrier networks',
    ],
    visual: 'devices',
  },
];

function Visual({ kind }: { kind: string }) {
  if (kind === 'cv') return <CvAuthoringVisual />;
  if (kind === 'report') return <SampleDefectReport />;
  if (kind === 'robot') return <RobotTapGraphic />;
  if (kind === 'devices') {
    return (
      <div className="space-y-4">
        <LabPhoto name="DSC_3408" alt="A robot arm suspended between two phones on the test rig" caption="A Mobot cell in the New York lab — one robot, multiple real devices." />
        <DeviceGrid />
      </div>
    );
  }
  return <DeviceGrid />;
}

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="The Mobot Platform"
        title={
          <>
            Automate the unautomatable,{' '}
            <span className="text-[#1d4ed8]">end to end</span>
          </>
        }
        intro="Four layers that take a mobile app from generated test script to validated release — executed by robots on real iOS and Android devices, not emulators, and verified by QA analysts before anything reaches your team."
        primary={{ label: 'Request a Demo', href: '/schedule-demo' }}
        secondary={{ label: 'See How It Works', href: '/how-it-works' }}
        aside={<LabPhoto name="DSC_3356" alt="Robot stylus arm poised over a phone on its stage in the Mobot lab" priority caption="Robot cell, Mobot lab, New York." />}
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-[80rem]">
          <PlatformStack />
        </div>
      </section>

      <section className="py-16 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <LogoCloud />
        </div>
      </section>

      {layerDetails.map((l, i) => {
        const Icon = l.icon;
        const flip = i % 2 === 1;
        return (
          <section key={l.n} className={`py-24 px-6 ${i % 2 === 1 ? 'section-alt border-y border-slate-200' : ''}`} id={`layer-${l.n}`}>
            <div className={`mx-auto max-w-[80rem] grid lg:grid-cols-2 gap-14 items-center`}>
              <Reveal variant={flip ? 'right' : 'left'} className={flip ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-md bg-[#e8f0fe] text-[#1d4ed8] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="eyebrow text-xs">Layer {l.n} · {l.name}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] leading-tight mb-4">{l.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{l.body}</p>
                <ul className="space-y-3">
                  {l.points.map((p) => (
                    <li key={p} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1d4ed8] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <div className={flip ? 'lg:order-1' : ''}>
                <Visual kind={l.visual} />
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="Human in the loop"
            title="Robot tested. Human verified."
            sub="Automation finds candidates. QA analysts decide what is real. Every failure is reviewed before it reaches you, so a red result is never something your engineers have to chase down first."
            center
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { icon: UserCheck, t: 'Every failure triaged', d: 'A QA analyst reviews each failed step, reproduces it, and attaches notes before it is reported.' },
              { icon: Layers, t: 'Noise stops at the analyst', d: 'A renamed button or a copy change is flagged once, decided with you, and never reported as a bug again.' },
              { icon: Bot, t: 'Robots do the boring part', d: 'Robots run the regression identically every time — what reaches your backlog is a real, reproducible defect.' },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.t} delay={i * 90}>
                  <div className="h-full rounded-lg border border-slate-200 bg-white p-8 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
                    <div className="w-10 h-10 rounded-md bg-[#1d4ed8] text-white flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-[#0a2540] text-lg mb-2">{c.t}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{c.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link href="/resources/defect-reports" className="text-[#1d4ed8] font-semibold hover:text-[#1e40af] transition-colors">
              See a sample verified defect report →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="See the platform on your app"
        body="Point us at a build. AI-assisted authoring proposes coverage, the fleet runs it overnight, and you review verified results by morning."
      />
    </>
  );
}
