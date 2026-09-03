import Reveal from '@/components/ui/Reveal';

/**
 * Category-level comparison of the ways teams test mobile apps today.
 * Cells are short descriptive phrases (not just checkmarks) so the reader
 * sees *how* each approach falls short, with a tone: good / mixed / bad.
 */
type Tone = 'good' | 'mixed' | 'bad';

interface Cell {
  text: string;
  tone: Tone;
}

interface Row {
  label: string;
  hint?: string;
  cells: Cell[]; // emulator, device farm, scripted, offshore manual
  mobot: Cell;
}

const columns = [
  { name: 'Emulator / Simulator', sub: 'Xcode, Android Studio' },
  { name: 'Device Farm', sub: 'cloud phones, software-driven' },
  { name: 'Scripted Frameworks', sub: 'Appium · Maestro · XCUITest' },
  { name: 'Offshore Manual', sub: 'outsourced human testers' },
];

const g = (text: string): Cell => ({ text, tone: 'good' });
const m = (text: string): Cell => ({ text, tone: 'mixed' });
const b = (text: string): Cell => ({ text, tone: 'bad' });

const rows: Row[] = [
  {
    label: 'Real glass, real OS',
    hint: 'Is the device in the test the device in your user’s hand?',
    cells: [b('No — a model of a phone'), m('Rented, shared, software-driven'), m('Depends where it runs'), g('Yes')],
    mobot: g('Yes — reserved fleet, 300+ devices'),
  },
  {
    label: 'Mechanical execution',
    hint: 'Who touches the screen?',
    cells: [b('Injected events'), b('Injected events'), b('Injected events'), m('A human, by hand')],
    mobot: g('Robot fleet — real taps, swipes, gestures'),
  },
  {
    label: 'AI authoring + maintenance',
    hint: 'Who writes the tests and keeps them passing?',
    cells: [b('Your engineers'), b('Your engineers'), b('Scripts, maintained by you'), b('Manual test plans')],
    mobot: g('AI-generated, CV-driven, maintained by Mobot'),
  },
  {
    label: 'Peripherals, IoT & Bluetooth',
    cells: [b('No radio exists'), m('Limited'), m('Limited'), m('Yes, slow')],
    mobot: g('Yes — real pairing over real RF'),
  },
  {
    label: 'Biometrics & camera',
    cells: [b('Auto-approved / mocked'), m('Weak'), m('Weak'), g('Yes')],
    mobot: g('Yes — real enclave, real lens'),
  },
  {
    label: 'Deep links, push & 2FA',
    cells: [m('Partial'), m('Partial'), m('Fragile'), m('Yes, slow')],
    mobot: g('Yes — end-to-end, verified'),
  },
  {
    label: 'Defect validation',
    hint: 'Who decides a failure is a real bug?',
    cells: [b('Nobody — every failure is yours to triage'), b('Nobody — you triage'), b('Red build, no verdict'), m('Tester’s word, no forensics')],
    mobot: g('Forensics reviewed, reproduced, on video, analyst-confirmed'),
  },
  {
    label: 'Artifacts & ticketing',
    cells: [m('Logs'), m('Varies'), m('Varies'), m('Tickets, no evidence')],
    mobot: g('Video, logs, repro + Slack/Jira'),
  },
  {
    label: 'How it scales',
    hint: 'What you pay to run more',
    cells: [b('Cheap — and wrong'), m('Cloud hours'), b('Maintenance cost'), b('Headcount')],
    mobot: g('A service — flat with Unlimited'),
  },
];

const toneClass: Record<Tone, string> = {
  good: 'text-[#0a2540]',
  mixed: 'text-slate-500',
  bad: 'text-red-700/80',
};

const toneDot: Record<Tone, string> = {
  good: 'bg-[#15803d]',
  mixed: 'bg-amber-400',
  bad: 'bg-red-400',
};

export default function ApproachMatrix() {
  return (
    <Reveal>
      <div className="rounded-lg border border-slate-200 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse table-fixed text-sm">
            <colgroup>
              <col className="w-[19%]" />
              <col className="w-[15%]" />
              <col className="w-[15%]" />
              <col className="w-[15%]" />
              <col className="w-[15%]" />
              <col className="w-[21%]" />
            </colgroup>
            <thead>
              <tr className="bg-[#0a2540] text-white">
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-white/70">Approach</th>
                {columns.map((c) => (
                  <th key={c.name} className="px-4 py-4 text-center align-bottom">
                    <div className="font-bold">{c.name}</div>
                    <div className="text-[11px] text-white/50 font-normal mt-0.5">{c.sub}</div>
                  </th>
                ))}
                <th className="px-4 py-4 text-center align-bottom brand-gradient">
                  <div className="font-bold">Mobot</div>
                  <div className="text-[11px] text-white/70 font-normal mt-0.5">robotic · real devices · verified</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 === 1 ? 'bg-[#f8fafc]' : 'bg-white'}>
                  <th scope="row" className="px-5 py-4 text-left align-top">
                    <div className="font-bold text-[#0a2540]">{r.label}</div>
                    {r.hint && <div className="text-[11px] text-slate-400 font-normal mt-0.5 leading-snug">{r.hint}</div>}
                  </th>
                  {r.cells.map((c, j) => (
                    <td key={j} className="px-4 py-4 text-center align-top">
                      <span className={`inline-flex items-start gap-1.5 text-[13px] leading-snug ${toneClass[c.tone]}`}>
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${toneDot[c.tone]}`} />
                        {c.text}
                      </span>
                    </td>
                  ))}
                  <td className="px-4 py-4 text-center align-top bg-[#efeafd]/80 border-x border-[#6d3fe0]/30">
                    <span className="inline-flex items-start gap-1.5 text-[13px] font-bold text-[#4f2bc2] leading-snug">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#6d3fe0] shrink-0" />
                      {r.mobot.text}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center gap-6 px-5 py-4 border-t border-slate-200 text-xs text-slate-500">
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#15803d]" /> Covers the scenario</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400" /> Partial, slow, or fragile</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-400" /> Structurally can’t</span>
        </div>
      </div>
    </Reveal>
  );
}
