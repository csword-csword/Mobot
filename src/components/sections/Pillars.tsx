const pillars = [
  {
    title: 'Physical Testing on Real Devices',
    body: 'Robots execute tests on actual phones and tablets—real taps, real swipes, real sensors—not simulated input events. Hardware-dependent defects are invisible to emulators, and they’re the ones that hit production.',
  },
  {
    title: 'Expert-Verified Results',
    body: 'Every defect is triaged and verified by a Mobot QA analyst before it reaches your team. You only ever see verified, reproducible defects with forensic evidence attached—the noise never makes it to your backlog.',
  },
  {
    title: 'A Platform Built for Scale',
    body: 'Mobot’s software authors test cases, executes massively in parallel across the robot fleet, and delivers deep defect forensics. This isn’t a body shop with robots—it’s a repeatable, consistent platform.',
  },
  {
    title: 'Always-On Operations',
    body: 'Onshore and offshore operations deliver 5x24 testing coverage. Submit a build at end of day, get verified results by morning.',
  },
];

export default function Pillars() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[77rem]">
        <h2 className="text-5xl font-bold text-center mb-16 max-w-[46rem] mx-auto leading-tight">
          <span className="gradient-text">High-Signal QA</span>: Every Defect Is Real
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((card, i) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4
                         hover:border-white/20 hover:bg-white/[0.07] transition-colors
                         shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2f87c8] flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold leading-snug">{card.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
