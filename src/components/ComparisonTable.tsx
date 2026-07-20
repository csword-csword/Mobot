import { Fragment } from 'react';

type Level = 'strong' | 'partial' | 'none';

const columns = [
  { name: 'Scripted Frameworks', sub: 'Appium · Maestro · XCUITest' },
  { name: 'Device Clouds', sub: 'cloud device farms' },
  { name: 'QA-as-a-Service', sub: 'software-based managed suites' },
];

const groups: { heading: string; rows: { label: string; values: Level[] }[] }[] = [
  {
    heading: 'The Physical Layer',
    rows: [
      { label: 'Physical actuation — real taps on real glass', values: ['none', 'none', 'none', 'strong'] },
      { label: 'Real hardware, iOS and Android', values: ['partial', 'strong', 'partial', 'strong'] },
      { label: 'Real-world inputs — camera, Bluetooth, peripherals', values: ['none', 'none', 'partial', 'strong'] },
      { label: 'IoT and external device scenarios', values: ['none', 'none', 'none', 'strong'] },
    ],
  },
  {
    heading: 'Signal Quality',
    rows: [
      { label: 'Every reported defect verified by a human expert', values: ['none', 'none', 'strong', 'strong'] },
      { label: 'Forensic defect reports — video, logs, reproduction', values: ['partial', 'partial', 'strong', 'strong'] },
      { label: 'Fully managed, 5x24 operations', values: ['none', 'none', 'strong', 'strong'] },
    ],
  },
  {
    heading: 'Where Other Approaches Win',
    rows: [
      { label: 'Speed per individual test run', values: ['strong', 'strong', 'partial', 'partial'] },
      { label: 'OS and device-matrix breadth', values: ['partial', 'strong', 'partial', 'partial'] },
    ],
  },
];

function StatusDot({ level, accent }: { level: Level; accent: string }) {
  if (level === 'none') {
    return <span className="inline-block w-4 h-4 rounded-full border-2" style={{ borderColor: accent }} />;
  }
  if (level === 'partial') {
    return (
      <span
        className="inline-block w-4 h-4 rounded-full border-2"
        style={{ borderColor: accent, background: `linear-gradient(90deg, ${accent} 50%, transparent 50%)` }}
      />
    );
  }
  return <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: accent, border: `2px solid ${accent}` }} />;
}

export default function ComparisonTable() {
  const neutral = 'rgba(10,10,10,0.3)';
  const accent = '#2f87c8';

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-[64rem]">
        <div className="rounded-2xl border border-black/10 bg-white p-8 md:p-10 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
          <p className="eyebrow text-black/40 text-xs uppercase mb-4">The Proof</p>
          <h2 className="text-3xl font-bold mb-2">How Mobile Testing Approaches Compare</h2>
          <p className="text-black/50 text-sm mb-8">
            Scripted automation is noisy. Simulators are blind. Here&apos;s where each approach
            actually stands.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse table-fixed">
              <colgroup>
                <col className="w-[32%]" />
                <col className="w-[17%]" />
                <col className="w-[17%]" />
                <col className="w-[17%]" />
                <col className="w-[17%]" />
              </colgroup>
              <thead>
                <tr>
                  <th />
                  {columns.map((c) => (
                    <th key={c.name} className="px-2 pb-4 text-center align-bottom">
                      <div className="text-sm font-bold text-black">{c.name}</div>
                      <div className="text-xs text-black/40 mt-1">{c.sub}</div>
                    </th>
                  ))}
                  <th className="px-2 pb-4 text-center align-bottom rounded-t-xl border border-b-0 border-[#2f87c8]/40 bg-[#2f87c8]/[0.06]">
                    <div className="text-sm font-bold text-blue-ink">Mobot</div>
                    <div className="text-xs text-black/50 mt-1">robotic + expert-verified</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group) => (
                  <Fragment key={group.heading}>
                    <tr>
                      <td colSpan={5} className="pt-6 pb-2 eyebrow text-xs uppercase text-blue-ink">
                        {group.heading}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label} className="border-t border-black/5">
                        <td className="py-3 pr-4 text-sm text-black/70">{row.label}</td>
                        {row.values.slice(0, 3).map((v, i) => (
                          <td key={i} className="py-3 px-2 text-center">
                            <StatusDot level={v} accent={neutral} />
                          </td>
                        ))}
                        <td className="py-3 px-2 text-center border-x border-[#2f87c8]/40 bg-[#2f87c8]/[0.04]">
                          <StatusDot level={row.values[3]} accent={accent} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
                <tr>
                  <td colSpan={4} />
                  <td className="rounded-b-xl border border-t-0 border-[#2f87c8]/40 bg-[#2f87c8]/[0.06] h-2" />
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-6 mt-6 text-xs text-black/40">
            <span className="flex items-center gap-2"><StatusDot level="strong" accent={neutral} /> Strong</span>
            <span className="flex items-center gap-2"><StatusDot level="partial" accent={neutral} /> Partial / with limits</span>
            <span className="flex items-center gap-2"><StatusDot level="none" accent={neutral} /> Not supported</span>
          </div>

          <p className="mt-8 pt-8 border-t border-black/10 text-black/70 leading-relaxed">
            Software-injected automation on real devices still fakes the physical layer.{' '}
            <span className="text-blue-ink font-semibold">
              Mobot: real world in, real device under test.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
