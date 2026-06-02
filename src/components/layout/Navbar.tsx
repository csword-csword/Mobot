'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const products = [
  { label: 'Mobot Managed', href: '/products/managed', description: 'Fully-managed mobile testing' },
  { label: 'Fleet Leasing', href: '/products/fleet-leasing', description: 'Lease a robot fleet for your team' },
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
        <div className="hidden lg:flex flex-1 items-center justify-center gap-7 text-sm">
          <Dropdown label="Products" items={products} />
          <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/customers" className="text-white/70 hover:text-white transition-colors">
            Customers
          </Link>
          <Dropdown label="Learn" items={learn} />
          <Dropdown label="Company" items={company} />
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
            { label: 'Mobot Managed', href: '/products/managed' },
            { label: 'Fleet Leasing', href: '/products/fleet-leasing' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Customers', href: '/customers' },
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
        </div>
      )}
    </nav>
  );
}
