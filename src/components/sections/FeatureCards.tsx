const cards = [
  {
    title: 'Acquire and Retain Your Users',
    body: 'Users leaving your app? Mobot ensures seamless app experiences by rigorously testing before and after launch, helping you acquire and retain users effectively.',
  },
  {
    title: 'Drive Higher Adoption and Conversions',
    body: 'Enhance your marketing and growth efforts by ensuring all user journeys—from deep links to in-app promotions—work flawlessly, boosting engagement and increasing conversions.',
  },
  {
    title: 'Eliminate Manual Work and Focus on Innovation',
    body: 'Team bogged down with manual work? Get your test suite to 100% coverage with Mobot, freeing your team to focus on innovation instead of manual tasks and regressions.',
  },
];

export default function FeatureCards() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[77rem]">
        <h2 className="text-5xl font-bold text-center mb-16 max-w-[40rem] mx-auto leading-tight">
          Unlock Unmatched Efficiency with AI and Robotics
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-black/10 bg-black/[0.02] p-8 flex flex-col gap-4
                         hover:border-black/20 hover:bg-black/[0.04] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#3da6fc]/10 border border-[#3da6fc]/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#86bff2] to-[#3da6fc]" />
              </div>
              <h3 className="text-xl font-bold leading-snug">{card.title}</h3>
              <p className="text-black/50 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
