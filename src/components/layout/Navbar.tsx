'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Zap } from 'lucide-react';

const products = [
  { label: 'Mobot Managed', href: '/products/managed', description: 'Fully-managed mobile testing' },
  { label: 'Mobot Live', href: '/products/live', description: 'Self-service mobile testing' },
  { label: 'Mobot Insights', href: '/products/insights', description: 'Mobile campaign monitoring' },
  { label: 'Integrations', href: '/integrations', description: 'Integrate with your favorite apps' },
];

const learn = [
  { label: 'Blog', href: '/blog', description: 'Explore latest mobile QA news' },
  { label: 'Resources', href: '/resources', description: 'Free mobile app quality resources' },
];

const company = [
  { label: 'About', href: '/about', description: 'Learn more about Mobot' },
  { label: 'Get in Touch', href: '/schedule-demo', description: 'Schedule a demo or reach out' },
  { label: 'Careers', href: 'https://boards.greenhouse.io/teammobot', description: 'Join the Mobot team', external: true },
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
      <button className="flex items-center gap-1 text-white/70 hover:text-white transition-colors py-1">
        {label}
        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
      </button>
      <div className="absolute top-full left-0 pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-2 min-w-[220px] shadow-xl">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="block px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="text-white text-sm font-light">{item.label}</div>
              <div className="text-white/40 text-xs mt-0.5">{item.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[75rem] px-6 h-[72px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src="/images/Mobot-Logo.svg" alt="Mobot" width={100} height={28} priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7 text-sm">
          <Dropdown label="Products" items={products} />
          <Link href="/why-mobot" className="text-white/70 hover:text-white transition-colors">
            Why Mobot
          </Link>
          <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/customers" className="text-white/70 hover:text-white transition-colors">
            Customers
          </Link>
          <Dropdown label="Learn" items={learn} />
          <Dropdown label="Company" items={company} />
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 text-sm shrink-0">
          <a
            href="https://app.teammobot.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors px-2"
          >
            Login
          </a>
          <Link
            href="/playground"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            <Zap className="w-3.5 h-3.5" />
            Try Mobot
          </Link>
          <Link
            href="/schedule-demo"
            className="px-4 py-2 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors"
          >
            Schedule a Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#050505] px-6 py-6 space-y-1">
          {[
            { label: 'Why Mobot', href: '/why-mobot' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Customers', href: '/customers' },
            { label: 'Products', href: '/products/managed' },
            { label: 'Integrations', href: '/integrations' },
            { label: 'Blog', href: '/blog' },
            { label: 'Resources', href: '/resources' },
            { label: 'About', href: '/about' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white/70 hover:text-white border-b border-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/playground"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-white/20 text-white text-sm"
            >
              <Zap className="w-4 h-4" /> Try Mobot
            </Link>
            <Link
              href="/schedule-demo"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-4 py-3 rounded-full bg-[#2f87c8] text-white text-sm"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
