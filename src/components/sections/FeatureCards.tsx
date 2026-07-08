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
      <div className="mx-auto max-w-[80rem]">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 max-w-[42rem] mx-auto leading-tight text-[#0a2540]">
          Unlock Unmatched Efficiency with AI and Robotics
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-slate-200 bg-white p-8 flex flex-col gap-4
                         hover:border-slate-300 hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all"
            >
              <div className="w-10 h-10 rounded-md bg-[#1d4ed8] flex items-center justify-center">
                <div className="w-3 h-3 rounded-sm bg-white" />
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
