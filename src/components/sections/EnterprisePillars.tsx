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
    <section className="py-28 px-6 section-alt border-y border-slate-200">
      <div className="mx-auto max-w-[80rem]">
        <h2 className="text-4xl sm:text-5xl font-bold text-center leading-tight mb-20 max-w-[48rem] mx-auto text-[#0a2540]">
          The Only Mobile Automation Platform Designed for Modern Enterprises
        </h2>

        <div className="flex flex-col gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="grid md:grid-cols-[auto_1fr_auto_200px] gap-8 items-center
                         rounded-lg border border-slate-200 bg-white p-10
                         hover:border-slate-300 hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all"
            >
              <div className="text-5xl font-bold text-[#1d4ed8]/40 leading-none">
                {pillar.number}
              </div>
              <div>
                <p className="eyebrow text-xs mb-3">
                  {pillar.eyebrow}
                </p>
                <h3 className="text-2xl font-bold leading-snug mb-4 text-[#0a2540]">{pillar.heading}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-[42rem]">{pillar.body}</p>
              </div>
              <div>
                <Link
                  href="/schedule-demo"
                  className="whitespace-nowrap inline-flex px-5 py-2.5 rounded-md border border-slate-300
                             text-[#0a2540] font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm"
                >
                  Request a Demo
                </Link>
              </div>
              <div className="hidden md:flex justify-end">
                <Image src={pillar.image} alt={pillar.eyebrow} width={160} height={120} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
