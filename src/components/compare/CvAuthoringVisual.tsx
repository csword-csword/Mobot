import Reveal from '@/components/ui/Reveal';

/**
 * Side-by-side: a selector-based script that breaks on a UI refactor, versus
 * computer vision that recognizes the same button the way a person does.
 */
export default function CvAuthoringVisual() {
  return (
    <div className="grid lg:grid-cols-2 gap-5">
      {/* Scripted */}
      <Reveal variant="left">
        <div className="h-full rounded-lg border border-slate-200 bg-white overflow-hidden shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
            <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Scripted framework</div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
              FAILS AFTER REFACTOR
            </span>
          </div>
          <pre className="px-5 py-4 text-[12.5px] leading-relaxed text-slate-700 overflow-x-auto font-mono bg-[#0f172a] text-slate-200">
{`// checkout.spec.js
const btn = await driver.$(
  '//XCUIElementTypeButton[@name="Continue"]'
);
await btn.waitForDisplayed({ timeout: 8000 });
await btn.click();

`}<span className="text-red-400">{`✖ NoSuchElementError: element not found
  after design system update renamed
  "Continue" → "Next step"`}</span>
          </pre>
          <div className="px-5 py-4 text-sm text-slate-600 leading-relaxed">
            The app works perfectly. The test is red. An engineer now spends an hour finding out that
            nothing was wrong &mdash; and this happens for every affected test, every release.
          </div>
        </div>
      </Reveal>

      {/* Computer vision */}
      <Reveal variant="right" delay={120}>
        <div className="h-full rounded-lg border-2 border-[#1d4ed8] bg-white overflow-hidden shadow-[0_8px_20px_rgba(29,78,216,0.14)]">
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-[#e8f0fe]">
            <div className="text-xs font-bold uppercase tracking-wide text-[#1d4ed8]">Mobot · computer vision</div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
              STILL PASSES
            </span>
          </div>
          <div className="px-5 py-5 grid grid-cols-[6.5rem_1fr] gap-5 items-center">
            {/* mini phone with scan line */}
            <div className="relative mx-auto w-[6rem] h-[11.5rem] rounded-[1.1rem] border-2 border-[#0a2540]/25 bg-[#f8fafc] overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-[#1d4ed8] shadow-[0_0_10px_2px_rgba(29,78,216,0.5)] animate-scan" />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0a2540]/30" />
              <div className="absolute inset-x-3 top-9 space-y-2">
                <div className="h-2 rounded bg-slate-200" />
                <div className="h-2 rounded bg-slate-200 w-4/5" />
                <div className="h-8 rounded bg-slate-100 border border-slate-200 mt-3" />
                <div className="h-8 rounded bg-slate-100 border border-slate-200" />
              </div>
              <div className="absolute inset-x-3 bottom-4 h-8 rounded-md bg-[#1d4ed8] flex items-center justify-center text-[9px] font-bold text-white ring-2 ring-[#1d4ed8]/30 ring-offset-2">
                Next step
              </div>
            </div>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-[12px] text-[#0a2540]">
                <span className="text-[#1d4ed8]">step 4:</span> tap the primary action at the bottom of the checkout screen
              </div>
              <p>
                The robot reads the screen like a person: a primary button, bottom of the checkout
                flow, with continue-style copy. Rename it, restyle it, move it &mdash; the test still
                finds it, taps it on real glass, and verifies what happens next.
              </p>
            </div>
          </div>
          <div className="px-5 pb-5 grid grid-cols-3 gap-2 text-[11px]">
            {[
              ['No selectors', 'Nothing to break'],
              ['No scripting', 'AI authors from your build'],
              ['Real tap', 'On a real device'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-md border border-slate-200 p-2.5">
                <div className="font-bold text-[#0a2540]">{t}</div>
                <div className="text-slate-500">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
