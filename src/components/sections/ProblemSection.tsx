export default function ProblemSection() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[77rem]">
        <div className="text-center mb-14">
          <p className="eyebrow text-black/40 text-xs uppercase mb-5">The Problem</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-[42rem] mx-auto">
            Scripted Automation Is Noisy. Simulators Are Blind.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-10">
            <h3 className="text-xl font-bold mb-3">Noisy</h3>
            <p className="text-black/60 text-sm leading-relaxed">
              Scripted frameworks&mdash;wherever they run&mdash;produce flaky false failures from
              timing issues, brittle selectors, and environment drift. Teams burn engineering hours
              triaging failures that aren&apos;t bugs.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-10">
            <h3 className="text-xl font-bold mb-3">Blind</h3>
            <p className="text-black/60 text-sm leading-relaxed">
              Emulators and simulators structurally cannot exercise push notifications, Bluetooth,
              biometrics, camera hardware, or carrier network transitions&mdash;so they pass tests
              that fail in the real world.
            </p>
          </div>
        </div>

        <p className="text-center text-black/50 text-base mt-10 max-w-[42rem] mx-auto leading-relaxed">
          Emulators and scripted frameworks cover the first 80%. Mobot covers the 20% that actually
          ships broken&mdash;the last mile of mobile QA, where user trust is won or lost.
        </p>
      </div>
    </section>
  );
}
