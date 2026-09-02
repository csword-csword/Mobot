'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
  description: string;
  badge?: string;
  external?: boolean;
}

const platform: DropdownItem[] = [
  { label: 'The Platform', href: '/platform', description: 'Four layers from generated script to validated release' },
  { label: 'How It Works', href: '/how-it-works', description: 'Robots, real devices, expert analysts — end to end' },
  { label: 'Why Real Devices', href: '/why-real-devices', description: 'Scripted automation is noisy. Simulators are blind.' },
  { label: 'Device Fleet', href: '/devices', description: '300+ real iOS and Android devices' },
  { label: 'Integrations', href: '/integrations', description: 'Slack, Jira, TestRail, and your release process' },
  { label: 'Mobot Unlimited', href: '/unlimited', description: 'Unlimited testing. One flat rate.', badge: 'Flagship' },
];

const solutions: DropdownItem[] = [
  { label: 'Push Notifications & Deep Linking', href: '/solutions/push-notifications-deep-linking', description: 'A push that never arrives, a link that opens the wrong screen' },
  { label: 'Bluetooth & Connected Devices (IoT)', href: '/solutions/bluetooth-connected-devices', description: 'No emulator exists for this scenario at all' },
  { label: 'Biometrics & Payments', href: '/solutions/biometrics-payments', description: 'Face ID, Touch ID, and payment flows end to end' },
  { label: 'Camera, Sensors & Location', href: '/solutions/camera-sensors-location', description: 'Barcode scans, AR, GPS, network transitions' },
  { label: 'Release Regression Testing', href: '/solutions/release-regression-testing', description: 'Full regression on real devices, overnight' },
  { label: 'All Solutions', href: '/solutions', description: 'Every defect class emulators can’t see' },
];

const compare: DropdownItem[] = [
  { label: 'Mobot vs. Appium', href: '/compare/mobot-vs-appium', description: 'Real devices vs. injected events in code' },
  { label: 'Mobot vs. Maestro', href: '/compare/mobot-vs-maestro', description: 'Robots vs. YAML flows on simulators' },
  { label: 'Mobot vs. QA Wolf', href: '/compare/mobot-vs-qa-wolf', description: 'Managed robots vs. managed scripts' },
  { label: 'All Comparisons', href: '/compare', description: 'How Mobot stacks up, feature by feature' },
];

const resources: DropdownItem[] = [
  { label: 'Sample Defect Report', href: '/resources/defect-reports', description: 'See a verified, forensic defect report' },
  { label: 'Customers & Case Studies', href: '/customers', description: 'Outcomes from real Mobot customers' },
  { label: 'Blog & Reports', href: '/resources/blog', description: 'Test debt, deep linking, and the state of mobile QA' },
  { label: 'Webinars & Events', href: '/resources/webinars-events', description: 'Live sessions on mobile QA' },
  { label: 'FAQ', href: '/faq', description: 'Everything teams ask before they start' },
];

function Dropdown({ label, items, wide }: { label: string; items: DropdownItem[]; wide?: boolean }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-slate-600 hover:text-[#0a2540] transition-colors py-1 font-medium whitespace-nowrap">
        {label}
        <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute top-full left-0 pt-3 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-150 z-50">
        <div className={`bg-white border border-slate-200 rounded-md p-2 shadow-lg ${wide ? 'min-w-[560px] grid grid-cols-2 gap-1' : 'min-w-[300px]'}`}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="block px-3 py-2.5 rounded-sm hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-2 text-[#0a2540] text-sm font-semibold">
                {item.label}
                {item.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-[#e8f0fe] text-[#1d4ed8]">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="text-slate-500 text-xs mt-0.5">{item.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const mobileGroups: { heading: string; items: { label: string; href: string }[] }[] = [
  { heading: 'Platform', items: platform.map((i) => ({ label: i.label, href: i.href })) },
  { heading: 'Solutions', items: solutions.map((i) => ({ label: i.label, href: i.href })) },
  { heading: 'Compare', items: compare.map((i) => ({ label: i.label, href: i.href })) },
  {
    heading: 'Company',
    items: [
      { label: 'Customers', href: '/customers' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Mobot Labs', href: '/labs' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  { heading: 'Resources', items: resources.map((i) => ({ label: i.label, href: i.href })) },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="mx-auto max-w-[86rem] px-6 h-[72px] flex items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <Image src="/images/Mobot-Logo-Navy.svg" alt="Mobot" width={100} height={28} priority />
        </Link>

        <div className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-6 text-sm">
          <Dropdown label="Platform" items={platform} wide />
          <Dropdown label="Solutions" items={solutions} wide />
          <Dropdown label="Compare" items={compare} />
          <Link href="/customers" className="text-slate-600 hover:text-[#0a2540] transition-colors font-medium">
            Customers
          </Link>
          <Link href="/pricing" className="text-slate-600 hover:text-[#0a2540] transition-colors font-medium">
            Pricing
          </Link>
          <Link href="/labs" className="flex items-center gap-1.5 text-slate-600 hover:text-[#0a2540] transition-colors font-medium whitespace-nowrap">
            Mobot Labs
            <span className="text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-[#e8f0fe] text-[#1d4ed8]">
              2027
            </span>
          </Link>
          <Dropdown label="Resources" items={resources} />
        </div>

        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href="https://app.teammobot.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-600 hover:text-[#0a2540] transition-colors whitespace-nowrap"
          >
            Log In
          </a>
          <Link
            href="/schedule-demo"
            className="inline-flex text-sm font-semibold px-5 py-2.5 rounded-md bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-colors whitespace-nowrap"
          >
            Request a Demo
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden text-[#0a2540] p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-6 max-h-[calc(100vh-72px)] overflow-y-auto">
          {mobileGroups.map((group) => (
            <div key={group.heading} className="mb-5">
              <div className="eyebrow text-xs mb-2">{group.heading}</div>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-slate-700 hover:text-[#0a2540] border-b border-slate-100 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/schedule-demo"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex w-full justify-center text-sm font-semibold px-5 py-3 rounded-md bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-colors"
          >
            Request a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
