'use client';

import { useState } from 'react';
import Link from 'next/link';

const tabs = [
  {
    id: 'engineering',
    label: 'Engineering',
    eyebrow: 'Mobot for Engineering',
    heading: 'Automate tasks and accelerate development with AI-driven automation',
    body: "Engineering teams bogged down by manual processes and inefficiencies can't focus on innovation, leading to slow releases and technical debt.",
    cards: [
      {
        title: 'Focus on Innovation, Not Hotfixes',
        body: 'Catch issues before they reach your users so your engineers can prioritize building new features.',
      },
      {
        title: 'Reduce Engineering-Driven Testing',
        body: "Engineers want to build, not be burdened by manual testing. Automate the un-automatable and free up your team.",
      },
      {
        title: 'Accelerate Release Cycles',
        body: "Don't let bugs delay your releases. Release faster and maximize adoption by eliminating post-launch issues.",
      },
    ],
  },
  {
    id: 'qa',
    label: 'QA',
    eyebrow: 'Mobot for QA',
    heading: 'Catch bugs before they reach your users and release with confidence',
    body: 'QA teams overwhelmed by repetitive manual testing struggle to keep up with tight deadlines, leading to missed bugs, inconsistent results, and slower releases.',
    cards: [
      {
        title: 'Achieve 100% Test Coverage',
        body: 'Traditional automation is flaky and slow to set up. Mobot gets you to 100% coverage in a fraction of the time.',
      },
      {
        title: 'Eliminate Manual Testing',
        body: 'Repetitive tasks are error-prone and time-consuming. Our robots unlock QA speed and precision.',
      },
      {
        title: 'Automate the "Unautomatable"',
        body: "Edge cases shouldn't be worrisome. Mobot successfully automates scenarios where traditional solutions fail.",
      },
    ],
  },
  {
    id: 'product',
    label: 'Product',
    eyebrow: 'Mobot for Product',
    heading: 'Drive higher feature adoption and ensure a seamless user experience',
    body: 'Product teams hindered by slow testing cycles miss market opportunities, resulting in delayed feature launches and lost growth.',
    cards: [
      {
        title: 'Increase Feature Adoption',
        body: 'Unreliable features can prevent adoption. Deliver a consistent experience to drive feature usage and engagement.',
      },
      {
        title: 'Reduce User Churn',
        body: 'Bugs—no matter how big or small—drive users away. Improve app stability to keep users engaged and loyal.',
      },
      {
        title: 'Protect Your Roadmap',
        body: 'Unexpected bugs can derail your product roadmap. Safeguard your release plans by identifying and resolving issues early.',
      },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    eyebrow: 'Mobot for Marketing',
    heading: 'Protect your brand and avoid campaign disruption across all channels',
    body: 'Marketing teams dealing with broken campaign flows lose conversions and revenue, as buggy features lead to poor user experiences.',
    cards: [
      {
        title: 'Increase Customer Lifetime Value (LTV)',
        body: 'Frustrated users churn quickly. Mobot ensures a seamless app experience to boost long-term retention and value.',
      },
      {
        title: 'Improve Mobile Campaign Performance',
        body: 'Buggy experiences hurt campaigns. Mobot tests real-world conditions to ensure flawless execution across devices.',
      },
      {
        title: 'Minimize Revenue Loss',
        body: 'Broken links and disrupted flows lead to lost conversions. Keep your mobile campaigns intact to drive more revenue.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    eyebrow: 'Mobot for Support',
    heading: 'Reduce support tickets by delivering stable, reliable features',
    body: 'Support teams overwhelmed by unresolved app issues face higher ticket volumes, leading to frustrated users and increased churn.',
    cards: [
      {
        title: 'Speed Up Issue Resolution',
        body: 'Support teams lose time replicating bugs. Improve app reliability to make issue reproduction faster and more efficient.',
      },
      {
        title: 'Keep Users Coming Back',
        body: 'Recurring app problems drive users away. Deliver a smoother, more dependable experience to build trust.',
      },
      {
        title: 'Reduce Ticket Volume and Resolution Time',
        body: 'Frequent app issues flood support with tickets. Resolve problems faster by catching bugs before they reach users.',
      },
    ],
  },
];

export default function RolesTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="use-cases" className="py-28 px-6">
      <div className="mx-auto max-w-[77rem]">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="eyebrow text-xs mb-5">
            Unified Automation for Every Team
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-[50rem] mx-auto mb-6 text-[#0a2540]">
            Mobot&apos;s AI-Powered Mechanical Robots Connect Mobile Teams and Elevate Quality
          </h2>
          <p className="text-slate-600 text-lg max-w-[42rem] mx-auto leading-relaxed">
            Mobot integrates your mobile teams on a single platform, automating essential workflows
            and breaking down barriers to speed up deployments and improve quality. Choose your role
            to discover how Mobot supports your entire organization.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-[#1d4ed8] text-white'
                  : 'border border-slate-300 text-slate-600 hover:text-[#0a2540] hover:border-slate-400'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="rounded-lg border border-slate-200 bg-white p-8 md:p-12 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
          <p className="eyebrow text-xs mb-4">{tab.eyebrow}</p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug mb-4 text-[#0a2540]">{tab.heading}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{tab.body}</p>
              <Link
                href="/schedule-demo"
                className="inline-flex mt-6 px-5 py-2.5 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
              >
                Request a Demo
              </Link>
            </div>

            {/* Bento cards */}
            <div className="grid gap-4">
              {tab.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-md border border-slate-200 bg-slate-50 p-5
                             hover:border-slate-300 transition-colors"
                >
                  <h4 className="text-[#0a2540] font-bold text-sm mb-1.5">{card.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
