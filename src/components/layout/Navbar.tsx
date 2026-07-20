'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const solutions = [
  { label: 'Push Notifications & Deep Linking', href: '/solutions/push-notifications-deep-linking', description: 'A push that never arrives, a link that opens the wrong screen' },
  { label: 'Bluetooth & Connected Devices (IoT)', href: '/solutions/bluetooth-connected-devices', description: 'No emulator exists for this scenario at all' },
  { label: 'Biometrics & Payments', href: '/solutions/biometrics-payments', description: 'Face ID, Touch ID, and payment flows end to end' },
  { label: 'Camera, Sensors & Location', href: '/solutions/camera-sensors-location', description: 'Barcode scans, AR, GPS, network transitions' },
  { label: 'Release Regression Testing', href: '/solutions/release-regression-testing', description: 'Full regression on real devices, overnight' },
];

const resources = [
  { label: 'Defect Reports', href: '/resources/defect-reports', description: 'See a sample verified defect report' },
  { label: 'Blog & Q&A with QA', href: '/resources/blog', description: 'Notes from Mobot’s QA analysts' },
  { label: 'Webinars & Events', href: '/resources/webinars-events', description: 'Live sessions on mobile QA' },
  { label: 'Case Studies', href: '/resources/case-studies', description: 'Outcomes from real Mobot customers' },
];

interface DropdownItem {
  label: string;
  href: string;
  description: string;
  external?: boolean;
}

function Dropdown({ label, items }: { label: string; items: DropdownItem[] }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-slate-600 hover:text-[#0a2540] transition-colors py-1 font-medium">
        {label}
        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
      </button>
      <div className="absolute top-full left-0 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
        <div className="bg-white border border-slate-200 rounded-md p-2 min-w-[280px] shadow-lg">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="block px-3 py-2.5 rounded-sm hover:bg-slate-50 transition-colors"
            >
              <div className="text-[#0a2540] text-sm font-semibold">{item.label}</div>
              <div className="text-slate-500 text-xs mt-0.5">{item.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const mobileLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Why Real Devices', href: '/why-real-devices' },
  ...solutions.map((s) => ({ label: s.label, href: s.href })),
  { label: 'Pricing', href: '/pricing' },
  { label: 'Mobot Labs', href: '/labs' },
  ...resources.map((r) => ({ label: r.label, href: r.href })),
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="mx-auto max-w-[84rem] px-6 h-[72px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src="/images/Mobot-Logo-Navy.svg" alt="Mobot" width={100} height={28} priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-6 text-sm">
          <Link href="/how-it-works" className="text-slate-600 hover:text-[#0a2540] transition-colors font-medium whitespace-nowrap">
            How It Works
          </Link>
          <Link href="/why-real-devices" className="text-slate-600 hover:text-[#0a2540] transition-colors font-medium whitespace-nowrap">
            Why Real Devices
          </Link>
          <Dropdown label="Solutions" items={solutions} />
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

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <Link href="/schedule-demo" className="text-sm font-semibold text-slate-600 hover:text-[#0a2540] transition-colors whitespace-nowrap">
            Log In
          </Link>
          <Link
            href="/resources/defect-reports"
            className="inline-flex text-sm font-semibold px-5 py-2.5 rounded-md bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-colors whitespace-nowrap"
          >
            Get a Sample Report
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden text-[#0a2540] p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-6 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto">
          {mobileLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-slate-600 hover:text-[#0a2540] border-b border-slate-100 font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resources/defect-reports"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex w-full justify-center text-sm font-semibold px-5 py-3 rounded-md bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-colors"
          >
            Get a Sample Report
          </Link>
        </div>
      )}
    </nav>
  );
}
