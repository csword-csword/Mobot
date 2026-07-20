const redPath =
  'M60.0,460.0 L87.9,439.0 L115.8,419.1 L143.6,400.1 L171.5,382.1 L199.4,364.9 L227.3,348.5 ' +
  'L255.2,333.0 L283.0,318.2 L310.9,304.2 L338.8,290.8 L366.7,278.1 L394.5,266.0 L422.4,254.5 ' +
  'L450.3,243.5 L478.2,233.1 L506.1,223.2 L533.9,213.8 L561.8,204.8 L589.7,196.3 L617.6,188.2 ' +
  'L645.5,180.5 L673.3,173.1 L701.2,166.2 L729.1,159.5 L757.0,153.2 L784.8,147.2 L812.7,141.5 ' +
  'L840.6,136.0 L868.5,130.9 L896.4,125.9 L924.2,121.3 L952.1,116.8 L980.0,112.6';

const xTicks = [
  { x: 60.0, label: '0' },
  { x: 171.5, label: '200' },
  { x: 283.0, label: '400' },
  { x: 394.5, label: '600' },
  { x: 506.1, label: '800' },
  { x: 617.6, label: '1000' },
  { x: 729.1, label: '1200' },
  { x: 840.6, label: '1400' },
  { x: 952.1, label: '1600' },
];

const yTicks = [
  { y: 30, label: '100%' },
  { y: 137.5, label: '75%' },
  { y: 245, label: '50%' },
  { y: 352.5, label: '25%' },
  { y: 460, label: '0%' },
];

export default function FlakinessAtScaleChart() {
  return (
    <section className="py-24 px-6" aria-label="Chart: build failure probability compounds with test suite size">
      <div className="mx-auto max-w-[64rem]">
        <p className="eyebrow text-xs mb-4 text-center">The Cost of Noise</p>
        <h2 className="text-3xl font-bold text-[#0a2540] mb-2 text-center">Why Your Builds Are Always Red</h2>
        <p className="text-slate-500 text-sm text-center mb-6 max-w-[36rem] mx-auto">
          Chance at least one flaky test fails the build &mdash; even at a 0.1% per-test flake rate.
        </p>

        <div className="flex items-center justify-center gap-6 mb-8 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" /> False build failure risk
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1d4ed8]" /> Mobot: human-verified results
          </span>
        </div>

        <div
          className="rounded-lg border border-slate-200 bg-white p-6 md:p-10
                     shadow-[0_1px_3px_rgba(15,23,42,0.08)] overflow-x-auto"
        >
          <svg
            viewBox="0 0 1000 560"
            className="w-full min-w-[760px] h-auto"
            role="img"
            aria-label="Line chart: probability of a false build failure rises from 0% to about 80% as test runs per build increase from 0 to 1600, while Mobot's human-verified result rate stays near 0% throughout."
          >
            {/* gridlines */}
            {yTicks.map((t) => (
              <line key={t.label} x1={60} y1={t.y} x2={980} y2={t.y} stroke="rgba(15,23,42,0.08)" strokeWidth={1} />
            ))}
            {yTicks.map((t) => (
              <text key={t.label} x={48} y={t.y + 4} textAnchor="end" fontSize={13} fill="rgba(15,23,42,0.4)">
                {t.label}
              </text>
            ))}
            {xTicks.map((t) => (
              <text key={t.label} x={t.x} y={480} textAnchor="middle" fontSize={13} fill="rgba(15,23,42,0.4)">
                {t.label}
              </text>
            ))}
            <text
              x={520}
              y={512}
              textAnchor="middle"
              fontSize={12}
              letterSpacing={2}
              fill="rgba(15,23,42,0.35)"
            >
              TEST RUNS PER BUILD
            </text>
            <text
              x={-245}
              y={20}
              textAnchor="middle"
              fontSize={12}
              letterSpacing={2}
              fill="rgba(15,23,42,0.35)"
              transform="rotate(-90)"
            >
              P(FALSE BUILD FAILURE)
            </text>

            {/* reference line at 800 runs */}
            <line
              x1={506.1}
              y1={30}
              x2={506.1}
              y2={460}
              stroke="rgba(220,38,38,0.35)"
              strokeWidth={1.5}
              strokeDasharray="4 5"
            />

            {/* Mobot flat line */}
            <line x1={60} y1={458} x2={980} y2={458} stroke="#1d4ed8" strokeWidth={2} strokeLinecap="round" />
            <circle cx={784.8} cy={458} r={5} fill="#1d4ed8" stroke="#ffffff" strokeWidth={2} />

            {/* risk curve */}
            <path d={redPath} fill="none" stroke="#dc2626" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={506.1} cy={223.2} r={6} fill="#dc2626" stroke="#ffffff" strokeWidth={2} />

            {/* callout: risk headline */}
            <g>
              <rect x={560} y={90} width={380} height={112} rx={10} fill="rgba(15,23,42,0.06)" stroke="rgba(15,23,42,0.12)" />
              <text x={582} y={122} fontSize={16} fontWeight={700} fill="#dc2626">
                ~80% of builds fail erroneously
              </text>
              <text x={582} y={148} fontSize={13} fill="rgba(15,23,42,0.55)">
                at 800 test opportunities &mdash; 4 of 5 red
              </text>
              <text x={582} y={168} fontSize={13} fill="rgba(15,23,42,0.55)">
                builds are noise, not bugs
              </text>
            </g>

            {/* callout: Mobot */}
            <g>
              <rect x={560} y={330} width={380} height={92} rx={10} fill="rgba(15,23,42,0.06)" stroke="rgba(29,78,216,0.3)" />
              <text x={582} y={362} fontSize={16} fontWeight={700} fill="#1d4ed8">
                Mobot: human-verified results
              </text>
              <text x={582} y={388} fontSize={13} fill="rgba(15,23,42,0.55)">
                noise stops before it reaches your team
              </text>
            </g>
          </svg>
        </div>

        <p className="text-slate-400 text-sm text-center mt-8">
          Flakiness compounds with scale. Verification doesn&apos;t.
        </p>
      </div>
    </section>
  );
}
