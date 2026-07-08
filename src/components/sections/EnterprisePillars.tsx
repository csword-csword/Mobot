import Link from 'next/link';
import Image from 'next/image';

const pillars = [
  {
    number: '01',
    eyebrow: 'Increase Revenue',
    heading: 'Accelerate Revenue Growth Through Faster, High-Quality Releases',
    body: 'Mobot empowers mobile enterprises to release high-quality, user-centered products faster—capturing new users, driving engagement, and fueling revenue growth.',
    image: '/images/Accelerate-Revenue.svg',
  },
  {
    number: '02',
    eyebrow: 'Reduce Costs',
    heading: 'Reduce Operational Costs Across All Mobile Processes',
    body: 'Mobot eliminates manual tasks, enabling enterprises to scale efficiently without increasing operational costs—allowing teams to focus on higher-value activities.',
    image: '/images/Reduce-Operational-Costs-Across-All-Mobile-Processes.svg',
  },
  {
    number: '03',
    eyebrow: 'Mitigate Risk',
    heading: 'Mitigate Risk with Early Issue Detection and Data-Driven Insights',
    body: 'Mobot helps enterprises detect critical issues early to maintain reliability and user trust, leveraging data-driven insights for better decisions and reduced uncertainty.',
    image: '/images/Mitigate-Risk.svg',
  },
];

export default function EnterprisePillars() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[77rem]">
        <h2 className="text-5xl font-bold text-center leading-tight mb-20 max-w-[48rem] mx-auto">
          The Only Mobile Automation Platform Designed for{' '}
          <span className="gradient-text">Modern Enterprises</span>
        </h2>

        <div className="flex flex-col gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="grid md:grid-cols-[auto_1fr_auto_200px] gap-8 items-center
                         rounded-2xl border border-black/10 bg-black/[0.02] p-10
                         hover:border-black/20 transition-colors"
            >
              <div className="text-5xl font-bold gradient-text opacity-60 leading-none">
                {pillar.number}
              </div>
              <div>
                <p className="eyebrow text-black/40 text-xs uppercase mb-3">
                  {pillar.eyebrow}
                </p>
                <h3 className="text-2xl font-bold leading-snug mb-4">{pillar.heading}</h3>
                <p className="text-black/50 text-sm leading-relaxed max-w-[42rem]">{pillar.body}</p>
              </div>
              <div>
                <Link
                  href="/schedule-demo"
                  className="whitespace-nowrap inline-flex px-5 py-2.5 rounded-full border border-black/15
                             text-black hover:bg-black/5 transition-colors text-sm"
                >
                  Schedule a Demo →
                </Link>
              </div>
              <div className="hidden md:flex justify-end">
                <Image src={pillar.image} alt={pillar.eyebrow} width={160} height={120} className="opacity-80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
