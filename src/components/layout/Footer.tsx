import Link from 'next/link';
import Image from 'next/image';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const columns = [
  {
    heading: 'Platform',
    links: [
      { label: 'The Platform', href: '/platform' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Why Real Devices', href: '/why-real-devices' },
      { label: 'Device Fleet', href: '/devices' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Mobot Unlimited', href: '/unlimited' },
      { label: 'Mobot Labs', href: '/labs' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Push Notifications & Deep Linking', href: '/solutions/push-notifications-deep-linking' },
      { label: 'Bluetooth & Connected Devices', href: '/solutions/bluetooth-connected-devices' },
      { label: 'Biometrics & Payments', href: '/solutions/biometrics-payments' },
      { label: 'Camera, Sensors & Location', href: '/solutions/camera-sensors-location' },
      { label: 'Release Regression Testing', href: '/solutions/release-regression-testing' },
    ],
  },
  {
    heading: 'Compare',
    links: [
      { label: 'Mobot vs. Appium', href: '/compare/mobot-vs-appium' },
      { label: 'Mobot vs. Maestro', href: '/compare/mobot-vs-maestro' },
      { label: 'Mobot vs. QA Wolf', href: '/compare/mobot-vs-qa-wolf' },
      { label: 'All Comparisons', href: '/compare' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Sample Defect Report', href: '/resources/defect-reports' },
      { label: 'Customers & Case Studies', href: '/customers' },
      { label: 'Blog & Reports', href: '/resources/blog' },
      { label: 'Webinars & Events', href: '/resources/webinars-events' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: 'https://boards.greenhouse.io/teammobot', external: true },
      { label: 'Security & Compliance', href: '/security' },
      { label: 'Contact', href: '/contact' },
      { label: 'Request a Demo', href: '/schedule-demo' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a2540]">
      <div className="brand-rule" aria-hidden="true" />
      <div className="mx-auto max-w-[86rem] px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/">
              <Image src="/images/Mobot-Logo.svg" alt="Mobot" width={100} height={28} />
            </Link>
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-[220px]">
              Real robots. Real devices. Real defects. The physical testing platform for mobile
              teams.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://twitter.com/teammobot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-xs font-bold"
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
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">{col.heading}</h3>
              <ul className="space-y-2.5">
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

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/schedule-demo"
              className="text-sm font-semibold px-4 py-2 rounded-md bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-colors"
            >
              Contact Sales
            </Link>
            <a href="mailto:sales@teammobot.com" className="text-white/60 hover:text-white text-sm transition-colors">
              sales@teammobot.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-white/40">
            <span>New York, NY &middot; &copy; Mobot. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
              <Link href="/cookie-policy" className="hover:text-white/70 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
