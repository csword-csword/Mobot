import Reveal from '@/components/ui/Reveal';

/**
 * Cumulative engineering hours spent keeping a scripted suite passing, over
 * 12 months, at two release cadences — versus Mobot, where the line is flat.
 *
 * Illustrative model (labelled as such on the page): 300-test suite, 12% of
 * tests need repair per release, 1.5 h per repair, plus 4 h/week flake triage.
 *   weekly releases  → ~(0.12·300·1.5)·4.3 + 4·4.3 ≈ 250 h/month
 *   daily (AI-assisted) releases → ~(0.12·300·1.5)·21 + 8·4.3 ≈ 1,170 h/month
 * The curves are cumulative and drawn on a 0–14,000 h axis.
 */

const W = 1000;
const H = 520;
const L = 70;
const R = 30;
const T = 30;
const B = 60;
const plotW = W - L - R;
const plotH = H - T - B;
const MAX_H = 14000;

function x(month: number) {
  return L + (month / 12) * plotW;
}
function y(hours: number) {
  return T + plotH - (hours / MAX_H) * plotH;
}

function series(perMonth: number) {
  return Array.from({ length: 13 }, (_, m) => ({ m, h: perMonth * m }));
}

const weekly = series(250);
const daily = series(1170);

function toPath(pts: { m: number; h: number }[]) {
  return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(p.m).toFixed(1)},${y(p.h).toFixed(1)}`).join(' ');
}

const yTicks = [0, 3500, 7000, 10500, 14000];

export default function TestDebtChart() {
  const dailyEnd = daily[12];
  const weeklyEnd = weekly[12];

  return (
    <Reveal>
      <div className="rounded-lg border border-slate-200 bg-white p-6 md:p-10 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-[#0a2540]">Script maintenance is a cost that scales with velocity</h3>
            <p className="text-slate-500 text-sm mt-1">
              Cumulative engineering hours to keep a 300-test scripted suite passing, over 12 months.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs text-slate-600">
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#dc2626]" /> Daily (AI-assisted) releases</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#f59e0b]" /> Weekly releases</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#1d4ed8]" /> Mobot</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full min-w-[640px] h-auto"
            role="img"
            aria-label="Line chart: cumulative engineering hours spent maintaining a scripted test suite rise to roughly 14,000 hours over 12 months at daily release cadence and roughly 3,000 at weekly cadence, while Mobot stays at zero engineering hours."
          >
            {yTicks.map((t) => (
              <g key={t}>
                <line x1={L} y1={y(t)} x2={W - R} y2={y(t)} stroke="rgba(15,23,42,0.08)" />
                <text x={L - 10} y={y(t) + 4} textAnchor="end" fontSize={12} fill="rgba(15,23,42,0.45)">
                  {t.toLocaleString('en-US')}
                </text>
              </g>
            ))}
            {[0, 2, 4, 6, 8, 10, 12].map((m) => (
              <text key={m} x={x(m)} y={H - B + 22} textAnchor="middle" fontSize={12} fill="rgba(15,23,42,0.45)">
                {m === 0 ? 'Month 0' : `M${m}`}
              </text>
            ))}
            <text x={L + plotW / 2} y={H - 12} textAnchor="middle" fontSize={11} letterSpacing={2} fill="rgba(15,23,42,0.4)">
              MONTHS
            </text>
            <text x={-(T + plotH / 2)} y={18} transform="rotate(-90)" textAnchor="middle" fontSize={11} letterSpacing={2} fill="rgba(15,23,42,0.4)">
              ENGINEERING HOURS
            </text>

            {/* Area washes */}
            <path d={`${toPath(daily)} L${x(12)},${y(0)} L${x(0)},${y(0)} Z`} fill="rgba(220,38,38,0.06)" />

            {/* Lines (draw on reveal) */}
            <path d={toPath(daily)} fill="none" stroke="#dc2626" strokeWidth={2.5} strokeLinecap="round" pathLength={1} className="draw-stroke" />
            <path d={toPath(weekly)} fill="none" stroke="#f59e0b" strokeWidth={2.5} strokeLinecap="round" pathLength={1} className="draw-stroke" style={{ animationDelay: '0.2s' }} />
            <line x1={x(0)} y1={y(0) - 2} x2={x(12)} y2={y(0) - 2} stroke="#1d4ed8" strokeWidth={3} strokeLinecap="round" pathLength={1} className="draw-stroke" style={{ animationDelay: '0.4s' }} />

            {/* End markers */}
            <circle cx={x(12)} cy={y(dailyEnd.h)} r={6} fill="#dc2626" stroke="#fff" strokeWidth={2} />
            <circle cx={x(12)} cy={y(weeklyEnd.h)} r={6} fill="#f59e0b" stroke="#fff" strokeWidth={2} />
            <circle cx={x(12)} cy={y(0) - 2} r={6} fill="#1d4ed8" stroke="#fff" strokeWidth={2} />

            {/* Callouts */}
            <g>
              <rect x={x(6.4)} y={y(12600)} width={300} height={78} rx={8} fill="#fff" stroke="rgba(220,38,38,0.35)" />
              <text x={x(6.4) + 16} y={y(12600) + 30} fontSize={15} fontWeight={700} fill="#dc2626">
                ~7 engineers, full time
              </text>
              <text x={x(6.4) + 16} y={y(12600) + 54} fontSize={12} fill="rgba(15,23,42,0.6)">
                just to keep the suite green at daily cadence
              </text>
            </g>
            <g>
              <rect x={x(6.4)} y={y(3400)} width={300} height={78} rx={8} fill="#fff" stroke="rgba(29,78,216,0.35)" />
              <text x={x(6.4) + 16} y={y(3400) + 30} fontSize={15} fontWeight={700} fill="#1d4ed8">
                Mobot: 0 engineering hours
              </text>
              <text x={x(6.4) + 16} y={y(3400) + 54} fontSize={12} fill="rgba(15,23,42,0.6)">
                authoring, maintenance, and triage are the platform&apos;s job
              </text>
            </g>
          </svg>
        </div>

        <p className="mt-6 text-xs text-slate-400 leading-relaxed">
          Illustrative model: 300 end-to-end tests, 12% needing repair after each release, 1.5 hours per
          repair, plus weekly flake triage (4 h at weekly cadence, 8 h at daily). Engineer-equivalents
          assume ~1,800 productive hours per year. Use the calculator below with your own numbers.
        </p>
      </div>
    </Reveal>
  );
}
