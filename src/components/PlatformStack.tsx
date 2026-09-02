import Reveal from '@/components/ui/Reveal';

export const platformLayers = [
  {
    n: '04',
    name: 'Test Authoring',
    sub: 'Script generation & optimization',
    body: 'AI explores your app builds and auto-generates test scripts across critical user journeys, then validates and optimizes each script for coverage and stability before it reaches the fleet.',
    tags: ['Auto-generated scripts', 'Script validation', 'Coverage optimization'],
    accent: 'from-[#d55181] to-[#9085e9]',
  },
  {
    n: '03',
    name: 'Test Management',
    sub: 'Orchestration, defects & analytics',
    body: 'Manages test suites and the execution queue — assigning scripts to robots and devices, tracking every run and robot action, and reporting defects and analytics same-day.',
    tags: ['Suite management', 'Queue & scheduling', 'Defect reporting', 'Run analytics'],
    accent: 'from-[#9085e9] to-[#3987e5]',
  },
  {
    n: '02',
    name: 'AI Driver',
    sub: 'Computer-vision test execution',
    body: 'Executes test scripts on physical hardware with minimal manual intervention — computer vision recognizes on-screen UI and drives taps, swipes, and gestures.',
    tags: ['CV-driven interaction', 'Scripted execution', 'Limited manual touch'],
    accent: 'from-[#3987e5] to-[#1d4ed8]',
  },
  {
    n: '01',
    name: 'Robot Fleet',
    sub: 'Real devices, real gestures',
    body: 'Mechanical robots physically drive real iOS and Android devices the way humans actually use them — up to 3 devices at once for parallel, cross-OS coverage.',
    tags: ['Up to 3 devices / robot', 'iOS + Android', 'Physical, not emulated'],
    accent: 'from-[#1d4ed8] to-[#0a2540]',
    dark: true,
  },
];

interface PlatformStackProps {
  /** Render the section chrome (eyebrow/heading). */
  withHeading?: boolean;
  compact?: boolean;
}

export default function PlatformStack({ withHeading = true, compact }: PlatformStackProps) {
  return (
    <div>
      {withHeading && (
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-16 items-end mb-8">
          <div>
            <p className="eyebrow text-xs mb-3">The Mobot Platform</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] leading-tight">
              Automate the unautomatable,{' '}
              <span className="gradient-text">end to end</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed max-w-[24rem]">
            Four layers that take a mobile app from generated test script to validated release &mdash;
            executed by robots on real iOS &amp; Android devices, not emulators.
          </p>
        </div>
      )}

      <Reveal variant="fade" threshold={0.2}>
        <div className="flex flex-col gap-3">
          {platformLayers.map((l, i) => (
            <div
              key={l.n}
              className={`layer-in rounded-lg border ${
                l.dark
                  ? 'bg-[#0a2540] border-[#0a2540] text-white'
                  : 'bg-white border-slate-200 shadow-[0_1px_3px_rgba(15,23,42,0.08)]'
              } ${compact ? 'px-5 py-4' : 'px-6 py-6 md:px-8'} grid md:grid-cols-[7rem_13rem_1fr_auto] gap-4 md:gap-8 items-center`}
              style={{ animationDelay: `${i * 140}ms` }}
            >
              <div>
                <div className={`text-xs font-bold tracking-[0.15em] ${l.dark ? 'text-[#86b6ef]' : 'text-[#1d4ed8]'}`}>
                  LAYER {l.n}
                </div>
                <div className={`mt-2 h-1 w-16 rounded-full bg-gradient-to-r ${l.accent}`} />
              </div>
              <div>
                <div className={`font-bold ${compact ? 'text-base' : 'text-xl'} ${l.dark ? 'text-white' : 'text-[#0a2540]'}`}>
                  {l.name}
                </div>
                <div className={`text-[11px] font-bold uppercase tracking-[0.12em] mt-1 ${l.dark ? 'text-white/50' : 'text-slate-400'}`}>
                  {l.sub}
                </div>
              </div>
              <p className={`text-sm leading-relaxed ${l.dark ? 'text-white/75' : 'text-slate-600'}`}>{l.body}</p>
              {!compact && (
                <div className="flex flex-wrap gap-2 md:max-w-[17rem] md:justify-end">
                  {l.tags.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                        l.dark ? 'bg-white/10 text-white/85' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-5 flex items-center gap-4 text-xs text-slate-400">
        <span className="whitespace-nowrap font-medium">
          300+ real devices &middot; iOS + Android &middot; human-in-the-loop QA validation
        </span>
        <span className="flex-1 h-px bg-slate-200" />
        <span className="font-bold tracking-[0.2em] text-[#1d4ed8]">MOBOT</span>
      </div>
    </div>
  );
}
