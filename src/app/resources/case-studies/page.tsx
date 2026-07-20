import Link from 'next/link';

export const metadata = { title: 'Case Studies' };

const cases = [
  {
    company: 'Citizen',
    stat: '30%+',
    label: 'Increase in QA Efficiency',
    detail: '10M+ active users · Automated 600 test cases weekly · App store rating 3.9 → 4.8',
    href: 'https://www.mobot.io/case-studies/citizen-gets-5-star-rating-eliminates-1-000s-of-manual-testing-hours',
  },
  {
    company: '#1 US Neobank',
    stat: '20h+',
    label: 'Hours of Manual Testing Eliminated Weekly',
    detail: '20M+ users · Increased device coverage by 2100% · Streamlined test processes',
    href: 'https://www.mobot.io/case-studies/how-the-1-neobank-used-mobot-to-eliminate-manual-testing',
  },
  {
    company: 'Rappi',
    stat: '$150k',
    label: 'in Recovered Revenue',
    detail: '35M+ monthly active users · Prevented losses from failed marketing flows',
    href: 'https://www.mobot.io/case-studies/how-rappi-scaled-martech-qa-with-computer-vision-and-robots',
  },
  {
    company: 'Sandboxx',
    stat: '4.2 → 4.8',
    label: 'App Store Rating Increase',
    detail: '3M+ global users · Improved app experience · 99.9% crash-free rate',
    href: 'https://www.mobot.io/case-studies/how-sandboxx-maintains-a-99-9-crash-free-rate-with-mobot',
  },
];

export default function Page() {
  return (
    <section className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
      <div className="mx-auto max-w-[64rem] px-6 py-20 lg:py-28">
        <p className="eyebrow text-sm mb-5">Resources</p>
        <h1 className="font-bold tracking-tight text-[#0a2540] text-4xl sm:text-5xl leading-[1.1] mb-6">
          Case Studies
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-[38rem]">
          High-signal QA, measured in outcomes: fewer escaped defects, faster releases, and hours
          of manual testing returned to engineering teams.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {cases.map((item) => (
            <a
              key={item.company}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-slate-200 bg-white p-8 hover:border-slate-300 hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all flex flex-col gap-2"
            >
              <div className="eyebrow text-xs mb-1">{item.company}</div>
              <div className="text-4xl font-bold text-[#1d4ed8]">{item.stat}</div>
              <div className="text-[#0a2540] font-bold text-lg leading-snug">{item.label}</div>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">{item.detail}</p>
              <div className="mt-auto pt-4 text-[#1d4ed8] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Read Case Study →
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/schedule-demo"
            className="inline-flex items-center px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
