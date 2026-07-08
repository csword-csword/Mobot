import Image from 'next/image';

const stats = [
  {
    stat: '30%+',
    label: 'Increase in QA Efficiency',
    company: 'Citizen',
    logo: '/images/citizen-logo.svg',
    detail: '10M+ Active Users · Automated 600 test cases weekly · App store rating 3.9→4.8',
    href: 'https://www.mobot.io/case-studies/citizen-gets-5-star-rating-eliminates-1-000s-of-manual-testing-hours',
  },
  {
    stat: '20h+',
    label: 'Hours of Manual Testing Eliminated Weekly',
    company: '#1 US Neobank',
    logo: null,
    detail: '20M+ Users · Increased device coverage by 2100% · Streamlined test processes',
    href: 'https://www.mobot.io/case-studies/how-the-1-neobank-used-mobot-to-eliminate-manual-testing',
  },
  {
    stat: '$150k',
    label: 'in Recovered Revenue',
    company: 'Rappi',
    logo: '/images/Rappi-Logo.svg',
    detail: '35M+ Monthly Active Users · Prevented losses from failed marketing flows',
    href: 'https://www.mobot.io/case-studies/how-rappi-scaled-martech-qa-with-computer-vision-and-robots',
  },
  {
    stat: '600+',
    label: 'Deep Link Issues Resolved',
    company: 'Top 10 Social Platform',
    logo: null,
    detail: '300M+ Monthly Active Users · 10,000+ links tested · 50+ unique channels weekly',
    href: 'https://www.mobot.io/case-studies/how-a-top-10-social-network-bolstered-user-activations-with-deep-link-monitoring',
  },
  {
    stat: '4.2→4.8',
    label: 'App Store Rating Increase',
    company: 'Sandboxx',
    logo: '/images/Sandboxx.svg',
    detail: '3M+ Global Users · Improved app experience · Enhanced user retention',
    href: 'https://www.mobot.io/case-studies/how-sandboxx-maintains-a-99-9-crash-free-rate-with-mobot',
  },
];

export default function StatsGrid() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[77rem]">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold leading-tight mb-5 max-w-[44rem] mx-auto">
            <span className="gradient-text">The Numbers Don&apos;t Lie:</span>{' '}
            See the Impact of Mobot
          </h2>
          <p className="text-black/50 text-lg max-w-[40rem] mx-auto leading-relaxed">
            Whether you&apos;re in engineering, QA, product, or marketing, Mobot drives the outcomes
            that matter most—faster releases, fewer bugs, reduced costs, and more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((item) => (
            <a
              key={item.stat}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-black/10 bg-black/[0.02] p-8
                         hover:border-black/20 hover:bg-black/[0.04] transition-all flex flex-col gap-3"
            >
              {item.logo ? (
                <div className="relative h-6 w-24 mb-1">
                  <Image src={item.logo} alt={item.company} fill className="object-contain object-left brightness-0 opacity-60" />
                </div>
              ) : (
                <div className="eyebrow text-black/40 text-xs uppercase mb-1">{item.company}</div>
              )}
              <div className="text-5xl font-bold gradient-text">{item.stat}</div>
              <div className="text-black font-bold text-lg leading-snug">{item.label}</div>
              <p className="text-black/40 text-sm mt-1 leading-relaxed">{item.detail}</p>
              <div className="mt-auto pt-4 text-blue-ink text-sm group-hover:translate-x-1 transition-transform">
                Read Case Study →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
