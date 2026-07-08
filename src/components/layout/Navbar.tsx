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
        <div className="bg-white border border-black/10 rounded-2xl p-2 min-w-[220px] shadow-xl">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="block px-3 py-2.5 rounded-xl hover:bg-black/5 transition-colors"
            >
              <div className="text-black text-sm font-light">{item.label}</div>
              <div className="text-black/40 text-xs mt-0.5">{item.description}</div>
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

  const solid = scrolled || mobileOpen;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/90 backdrop-blur-md border-b border-black/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[75rem] px-6 h-[72px] flex items-center justify-between gap-8">
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
        <div className="hidden lg:flex flex-1 items-center justify-center gap-7 text-sm">
          <Dropdown label="Products" items={products} scrolled={solid} />
          <Link
            href="/pricing"
            className={`transition-colors ${solid ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`}
          >
            Pricing
          </Link>
          <Link
            href="/customers"
            className={`transition-colors ${solid ? 'text-black/70 hover:text-black' : 'text-white/80 hover:text-white'}`}
          >
            Customers
          </Link>
          <Dropdown label="Learn" items={learn} scrolled={solid} />
          <Dropdown label="Company" items={company} scrolled={solid} />
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
        <div className="lg:hidden border-t border-black/10 bg-white px-6 py-6 space-y-1">
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
              className="block py-3 text-black/70 hover:text-black border-b border-black/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
