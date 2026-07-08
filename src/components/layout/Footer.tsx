import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const columns = [
  {
    heading: 'Product',
    links: [
      { label: 'Mobot Managed', href: '/products/managed' },
      { label: 'Fleet Leasing', href: '/products/fleet-leasing' },
      { label: 'For Engineers', href: '/for-engineers' },
      { label: 'For Marketers', href: '/for-marketers' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'Resources', href: '/resources' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: 'https://boards.greenhouse.io/teammobot', external: true },
      { label: 'Press', href: '/press' },
      { label: 'YC Startup Support', href: '/yc-startup-support' },
    ],
  },
  {
    heading: 'Compare',
    links: [
      { label: 'Mobot vs. Kobiton', href: '/compare/mobot-vs-kobiton' },
      { label: 'Mobot vs. Waldo', href: '/compare/mobot-vs-waldo' },
      { label: 'Mobot vs. Rainforest QA', href: '/compare/mobot-vs-rainforest-qa' },
      { label: 'Mobot vs. Sauce Labs', href: '/compare/mobot-vs-sauce-labs' },
      { label: 'Mobot vs. Testlio', href: '/compare/mobot-vs-testlio' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a2540]">
      <div className="mx-auto max-w-[80rem] px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/">
              <Image src="/images/Mobot-Logo.svg" alt="Mobot" width={100} height={28} />
            </Link>
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-[220px]">
              Enterprise-grade mobile QA, powered by real mechanical robots and real devices.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://twitter.com/teammobot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-xs"
                aria-label="Twitter / X"
              >
                𝕏
              </a>
              <a
                href="https://www.linkedin.com/company/team-mobot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact + bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/schedule-demo"
              className="text-sm font-semibold px-4 py-2 rounded-md bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-colors"
            >
              Contact Sales
            </Link>
            <a
              href="mailto:sales@teammobot.com"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              sales@teammobot.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-white/40">
            <span>New York, NY &middot; &copy; Mobot. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="/cookie-policy" className="hover:text-white/70 transition-colors">Cookie Policy</Link>
              <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
