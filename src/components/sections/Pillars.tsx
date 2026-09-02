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
    <section className="py-24 px-6 section-alt border-y border-slate-200">
      <div className="mx-auto max-w-[80rem]">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 max-w-[46rem] mx-auto leading-tight text-[#0a2540]">
          High-Signal QA: Every Defect Is Real
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((card, i) => (
            <div
              key={card.title}
              className="rounded-lg border border-slate-200 bg-white p-8 flex flex-col gap-4
                         card-lift"
            >
              <div className={`w-10 h-10 rounded-md flex items-center justify-center text-white font-bold text-sm ${i % 2 ? "bg-[#6d3fe0]" : "bg-[#1d4ed8]"}`}>
                {i + 1}
              </div>
              <h3 className="text-xl font-bold leading-snug text-[#0a2540]">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
