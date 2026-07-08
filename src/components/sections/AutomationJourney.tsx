'use client';

import { useState } from 'react';
import Link from 'next/link';

const stages = [
  {
    label: 'No Automation',
    slug: 'no',
    body: "Overwhelmed by manual testing and a growing backlog of repetitive tasks? Our AI-powered robots automate even the most complex use cases, freeing your QA team to focus on critical issues and your engineers on development. Eliminate manual bottlenecks to deliver higher-quality products faster and more efficiently.",
  },
  {
    label: 'Some Automation',
    slug: 'some',
    body: "Dealing with flaky tests and still spending too much time on manual testing? Mobot helps stabilize your testing process by reducing flakiness and automating more tasks. Our AI-powered robots handle repetitive actions reliably, allowing your team to focus on developing new features instead of fixing broken tests.",
  },
  {
    label: 'Mostly Automation',
    slug: 'mostly',
    body: "Even with most tests automated, do flaky tests keep breaking and complex scenarios remain untested? Mobot addresses these challenges by automating tests that are too complex for traditional frameworks. Our AI-powered robots manage intricate tasks, expanding your test coverage and improving reliability.",
  },
  {
    label: 'Full Automation',
    slug: 'full',
    body: 'Even if you\'ve automated everything you can, chances are you\'ve hit what we call the "automation ceiling." Complex use cases (such as multi-device interactions, Bluetooth, or deep linking) are likely still manual or untested. It\'s time to automate the unautomatable and achieve 100% coverage—and it starts with Mobot.',
  },
];

export default function AutomationJourney() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[80rem]">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-[52rem] mx-auto mb-6 text-[#0a2540]">
            No Matter How Complex Your Use Case, Accelerate to 100% Automation Coverage in Less Time
          </h2>
          <p className="text-slate-600 text-lg max-w-[44rem] mx-auto leading-relaxed">
            No matter where you are in your automation journey, Mobot takes you further. Whether
            you&apos;re stuck with manual tasks or striving for full automation, our AI-powered
            mechanical robots help you accelerate, optimize, and perfect your workflows.
          </p>
        </div>

        {/* Stage selector */}
        <div className="mb-3">
          <p className="eyebrow text-xs mb-4 text-center">
            Our Team Uses
          </p>
          <div className="flex flex-col sm:flex-row rounded-lg border border-slate-200 overflow-hidden">
            {stages.map((stage, i) => (
              <button
                key={stage.slug}
                onClick={() => setActive(i)}
                className={`flex-1 py-4 px-5 text-sm font-semibold transition-all ${
                  active === i
                    ? 'bg-[#e8f0fe] text-[#0a2540] border-b-2 sm:border-b-0 sm:border-r-2 border-[#1d4ed8]'
                    : 'text-slate-500 hover:text-[#0a2540] hover:bg-slate-50'
                }`}
              >
                {stage.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className="rounded-lg border border-slate-200 bg-white p-10 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-[52rem]">
            {stages[active].body}
          </p>
          <Link
            href="/schedule-demo"
            className="inline-flex px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
