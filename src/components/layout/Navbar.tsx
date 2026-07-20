'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
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

function Dropdown({ label, items, scrolled }: { label: string; items: DropdownItem[]; scrolled: boolean }) {
  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-1 transition-colors py-1 ${
          scrolled ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'
        }`}
      >
        {label}
        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
      </button>
      <div className="absolute top-full left-0 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
        <div className="bg-white border border-black/10 rounded-2xl p-2 min-w-[280px] shadow-xl">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="block px-3 py-2.5 rounded-xl hover:bg-black/5 transition-colors"
            >
              <div className="text-black text-sm font-semibold">{item.label}</div>
              <div className="text-black/40 text-xs mt-0.5">{item.description}</div>
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Only the homepage has a full-bleed dark hero to float a transparent nav over;
  // every other page is plain white from the top, so the nav stays solid there.
  const solid = !isHome || scrolled || mobileOpen;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/90 backdrop-blur-md border-b border-black/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[84rem] px-6 h-[72px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src={solid ? '/images/Mobot-Logo-Dark.svg' : '/images/Mobot-Logo.svg'}
            alt="Mobot"
            width={100}
            height={28}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-6 text-sm">
          <Link
            href="/how-it-works"
            className={`transition-colors font-medium whitespace-nowrap ${solid ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`}
          >
            How It Works
          </Link>
          <Link
            href="/why-real-devices"
            className={`transition-colors font-medium whitespace-nowrap ${solid ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`}
          >
            Why Real Devices
          </Link>
          <Dropdown label="Solutions" items={solutions} scrolled={solid} />
          <Link
            href="/pricing"
            className={`transition-colors font-medium ${solid ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`}
          >
            Pricing
          </Link>
          <Link
            href="/labs"
            className={`flex items-center gap-1.5 transition-colors font-medium whitespace-nowrap ${solid ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`}
          >
            Mobot Labs
            <span className={`text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded ${solid ? 'bg-black/5 text-blue-ink' : 'bg-white/15 text-white'}`}>
              2027
            </span>
          </Link>
          <Dropdown label="Resources" items={resources} scrolled={solid} />
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <Link
            href="/schedule-demo"
            className={`text-sm font-semibold transition-colors whitespace-nowrap ${solid ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`}
          >
            Log In
          </Link>
          <Link
            href="/resources/defect-reports"
            className="inline-flex text-sm font-semibold px-5 py-2.5 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors whitespace-nowrap"
          >
            Get a Sample Report
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className={`lg:hidden p-1 ${solid ? 'text-black' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-black/10 bg-white px-6 py-6 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto">
          {mobileLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-black/70 hover:text-black border-b border-black/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resources/defect-reports"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex w-full justify-center text-sm font-semibold px-5 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors"
          >
            Get a Sample Report
          </Link>
        </div>
      )}
    </nav>
  );
}
