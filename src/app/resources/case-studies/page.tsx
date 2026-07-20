import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'Case Studies' };

const cases = [
  {
    company: 'Citizen',
    logo: '/images/citizen-logo.svg',
    stat: '30%+',
    label: 'Increase in QA Efficiency',
    detail: '10M+ active users · Automated 600 test cases weekly · App store rating 3.9 → 4.8',
    href: 'https://www.mobot.io/case-studies/citizen-gets-5-star-rating-eliminates-1-000s-of-manual-testing-hours',
  },
  {
    company: '#1 US Neobank',
    logo: null,
    stat: '20h+',
    label: 'Hours of Manual Testing Eliminated Weekly',
    detail: '20M+ users · Increased device coverage by 2100% · Streamlined test processes',
    href: 'https://www.mobot.io/case-studies/how-the-1-neobank-used-mobot-to-eliminate-manual-testing',
  },
  {
    company: 'Rappi',
    logo: '/images/Rappi-Logo.svg',
    stat: '$150k',
    label: 'in Recovered Revenue',
    detail: '35M+ monthly active users · Prevented losses from failed marketing flows',
    href: 'https://www.mobot.io/case-studies/how-rappi-scaled-martech-qa-with-computer-vision-and-robots',
  },
  {
    company: 'Sandboxx',
    logo: null,
    stat: '4.2 → 4.8',
    label: 'App Store Rating Increase',
    detail: '3M+ global users · Improved app experience · 99.9% crash-free rate',
    href: 'https://www.mobot.io/case-studies/how-sandboxx-maintains-a-99-9-crash-free-rate-with-mobot',
  },
];

export default function Page() {
  return (
    <section className="border-b border-black/10">
      <div className="mx-auto max-w-[64rem] px-6 py-24 lg:py-32">
        <p className="eyebrow text-black/40 text-xs uppercase mb-5">Resources</p>
        <h1 className="font-bold tracking-tight text-4xl sm:text-5xl leading-[1.1] mb-6">
          Case Studies
        </h1>
        <p className="text-black/60 text-lg leading-relaxed mb-12 max-w-[38rem]">
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
              className="group rounded-2xl border border-black/10 bg-black/[0.02] p-8 hover:border-black/20 hover:bg-black/[0.04] transition-all flex flex-col gap-2"
            >
              {item.logo ? (
                <div className="relative h-6 w-24 mb-1">
                  <Image src={item.logo} alt={item.company} fill className="object-contain object-left brightness-0 opacity-60" />
                </div>
              ) : (
                <div className="eyebrow text-black/40 text-xs uppercase mb-1">{item.company}</div>
              )}
              <div className="text-4xl font-bold gradient-text">{item.stat}</div>
              <div className="text-black font-bold text-lg leading-snug">{item.label}</div>
              <p className="text-black/40 text-sm mt-1 leading-relaxed">{item.detail}</p>
              <div className="mt-auto pt-4 text-blue-ink text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Read Case Study →
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/schedule-demo"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#2f87c8] text-white font-medium hover:bg-[#3da6fc] transition-colors text-sm"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
