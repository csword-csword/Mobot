/**
 * Shared marketing content: customers, testimonials, case studies, and the
 * capabilities Mobot tests. Sourced from the current mobot.io site and the
 * Mobot Unlimited product overview.
 */

export interface Logo {
  src: string;
  alt: string;
  /** Some logo files are dark-on-transparent; invert when shown on navy. */
  invertOnDark?: boolean;
}

export const customerLogos: Logo[] = [
  { src: '/images/citizen-logo_1.avif', alt: 'Citizen' },
  { src: '/images/Rappi-Logo.svg', alt: 'Rappi' },
  { src: '/images/persona-logo_1.avif', alt: 'Persona' },
  { src: '/images/Sandboxx.svg', alt: 'Sandboxx' },
  { src: '/images/step-logo_1.avif', alt: 'Step' },
  { src: '/images/koho-logo_1.avif', alt: 'KOHO' },
  { src: '/images/batch-logo.svg', alt: 'Batch' },
  { src: '/images/on-x-logo_1.avif', alt: 'onX' },
  { src: '/images/jolt-logo_1.avif', alt: 'Jolt' },
  { src: '/images/myswim-logo_1.avif', alt: 'MySwimPro' },
  { src: '/images/bereal-logo_1.avif', alt: 'BeReal' },
  { src: '/images/branch_metrics_logo-1-1.avif', alt: 'Branch' },
  { src: '/images/5f7a403a81d0107bce83a4c0_Centaur-Logo-p-500.avif', alt: 'Centaur Labs' },
  { src: '/images/1200px-Stubhub.svg_1.avif', alt: 'StubHub' },
];

/** Names of customers referenced on the current site without a usable logo file. */
export const customerNames = [
  'Citizen', 'Rappi', 'Persona', 'Sandboxx', 'Step', 'KOHO', 'Batch', 'AllTrails', 'Branch',
  'Centaur Labs', 'onX', 'SonderMind', 'TheGrint', 'OwnersBox', 'Upside', 'MySwimPro', 'Jolt',
  'BeReal', 'StubHub',
];

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  /** Optional headline metric to lead with. */
  metric?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I've never seen an emulator get something 100% correct. When it comes to mobile it is not the same. Nothing can beat a physical device. Feels like magic to our team. Mobot eliminates the smoke test — we can test in a day whereas a QA team would normally take multiple days.",
    name: 'Louis Johnson',
    title: 'Engineering',
    company: 'Citizen',
    metric: '5 days → 1 day',
  },
  {
    quote:
      'We stopped rationing test coverage. Now every release gets the full matrix — and our QA bill didn’t move.',
    name: 'Lewis C.',
    title: 'Engineering Manager',
    company: 'Persona',
    metric: 'Full matrix, every release',
  },
  {
    quote:
      'Mobot helped MySwimPro reduce our Change Failure Rate by 65% — going from 34% to 12%. With less time spent on triaging and reacting to production defects, we spend more time proactively delivering new features for our members.',
    name: 'Nick Newell',
    title: 'Engineering',
    company: 'MySwimPro',
    metric: '34% → 12% change failure rate',
  },
  {
    quote:
      "Within 3 months of working with Mobot, Sandboxx's App Store rating increased from 4.2 to 4.8. Can't say enough about how much better I feel with each release now that Mobot is part of the pipeline. Our stability rating for iOS is now at 99.9%.",
    name: 'Swamy Ramaswamy',
    title: 'Engineering',
    company: 'Sandboxx',
    metric: '4.2 → 4.8 App Store rating',
  },
];

export interface CaseStudy {
  company: string;
  stat: string;
  label: string;
  detail: string;
  bullets: string[];
  href: string;
  logo?: string;
  industry: string;
}

export const caseStudies: CaseStudy[] = [
  {
    company: 'Citizen',
    industry: 'Public safety · 10M+ active users',
    stat: '30%+',
    label: 'Increase in QA Efficiency',
    detail: 'Citizen eliminated thousands of manual testing hours and lifted its App Store rating from 3.9 to 4.8.',
    bullets: ['10M+ active users', 'Automated 600 test cases weekly', 'App Store rating 3.9 → 4.8'],
    href: 'https://www.mobot.io/case-studies/citizen-gets-5-star-rating-eliminates-1-000s-of-manual-testing-hours',
    logo: '/images/citizen-logo.svg',
  },
  {
    company: '#1 US Neobank',
    industry: 'Fintech · 20M+ users',
    stat: '20h+',
    label: 'Hours of Manual Testing Eliminated Weekly',
    detail: 'The largest US neobank used Mobot to eliminate manual testing and expand device coverage by 2100%.',
    bullets: ['20M+ users', 'Increased device coverage by 2100%', 'Streamlined test processes'],
    href: 'https://www.mobot.io/case-studies/how-the-1-neobank-used-mobot-to-eliminate-manual-testing',
  },
  {
    company: 'Rappi',
    industry: 'Delivery · 35M+ monthly active users',
    stat: '$150k',
    label: 'in Recovered Revenue',
    detail: 'Rappi scaled martech QA with computer vision and robots, preventing losses from failed marketing flows.',
    bullets: ['35M+ monthly active users', 'Prevented losses from failed marketing flows', 'Optimized marketing processes'],
    href: 'https://www.mobot.io/case-studies/how-rappi-scaled-martech-qa-with-computer-vision-and-robots',
    logo: '/images/Rappi-Logo.svg',
  },
  {
    company: 'Top 10 Social Network',
    industry: 'Social · 300M+ monthly active users',
    stat: '600+',
    label: 'Deep Link Issues Resolved',
    detail: 'A top-10 social platform bolstered user activations with continuous deep link monitoring on real devices.',
    bullets: ['300M+ monthly active users', '10,000+ links tested to date', '50+ unique channels tested weekly'],
    href: 'https://www.mobot.io/case-studies/how-a-top-10-social-network-bolstered-user-activations-with-deep-link-monitoring',
  },
  {
    company: 'Sandboxx',
    industry: 'Military community · 3M+ global users',
    stat: '4.2 → 4.8',
    label: 'App Store Rating Increase',
    detail: 'Sandboxx maintains a 99.9% crash-free rate with Mobot in the release pipeline.',
    bullets: ['3M+ global users', '99.9% crash-free rate on iOS', 'Improved app experience'],
    href: 'https://www.mobot.io/case-studies/how-sandboxx-maintains-a-99-9-crash-free-rate-with-mobot',
    logo: '/images/Sandboxx.svg',
  },
];

/** The scenarios Mobot tests that scripted frameworks and simulators can't. */
export interface Capability {
  name: string;
  detail: string;
  /** Lucide icon name key used by CapabilityGrid. */
  icon:
    | 'bell' | 'link' | 'bluetooth' | 'watch' | 'credit-card' | 'message' | 'mail'
    | 'shield' | 'scan-face' | 'image' | 'smartphones' | 'qr' | 'camera' | 'map-pin'
    | 'rotate' | 'layout' | 'phone-call' | 'key';
  solutionHref?: string;
}

export const capabilities: Capability[] = [
  { name: 'Push notifications', detail: 'Real delivery through APNs/FCM to a real device, then a real tap.', icon: 'bell', solutionHref: '/solutions/push-notifications-deep-linking' },
  { name: 'Deep linking', detail: 'Every channel, every destination — verified on the device, not stubbed.', icon: 'link', solutionHref: '/solutions/push-notifications-deep-linking' },
  { name: 'Apple Watch & Bluetooth', detail: 'Live pairing with real wearables and peripherals over real RF.', icon: 'bluetooth', solutionHref: '/solutions/bluetooth-connected-devices' },
  { name: 'Connected & IoT devices', detail: 'POS hardware, car pairing, medical devices, smart home.', icon: 'watch', solutionHref: '/solutions/bluetooth-connected-devices' },
  { name: 'Biometrics', detail: 'Face ID and Touch ID exercised on the secure enclave, not auto-approved.', icon: 'scan-face', solutionHref: '/solutions/biometrics-payments' },
  { name: 'In-app purchases', detail: 'Real payment sheets, real cards, real store flows.', icon: 'credit-card', solutionHref: '/solutions/biometrics-payments' },
  { name: '2-factor authentication', detail: 'SMS, authenticator codes, and QR — the way users actually log in.', icon: 'shield', solutionHref: '/solutions/biometrics-payments' },
  { name: 'Google & Facebook auth', detail: 'Third-party account authentication through the real OS handoff.', icon: 'key', solutionHref: '/solutions/biometrics-payments' },
  { name: 'SMS & email', detail: 'Inbound messages received and acted on across real apps.', icon: 'message' },
  { name: 'Multi-device messaging', detail: 'Two phones, side by side, one robot — sender and receiver both real.', icon: 'smartphones', solutionHref: '/solutions/release-regression-testing' },
  { name: 'Camera, QR & barcode', detail: 'A real lens looking at a real code — focus, capture, and decode.', icon: 'qr', solutionHref: '/solutions/camera-sensors-location' },
  { name: 'Photo upload & download', detail: 'Camera roll, file pickers, and media pipelines end to end.', icon: 'image', solutionHref: '/solutions/camera-sensors-location' },
  { name: 'Geolocation & networks', detail: 'Location, carrier handoffs, Wi-Fi ↔ LTE, and dead zones.', icon: 'map-pin', solutionHref: '/solutions/camera-sensors-location' },
  { name: 'Out-of-app workflows', detail: 'Backgrounding, app switching, widgets, and inter-app flows.', icon: 'layout', solutionHref: '/solutions/release-regression-testing' },
  { name: 'Phone calls', detail: 'Video and audio behavior when a real call interrupts the app.', icon: 'phone-call' },
  { name: 'Rotation & accessibility', detail: 'Orientation, dark mode, text size, and system settings.', icon: 'rotate' },
];

export const deviceBrands = [
  'Apple', 'Samsung', 'Google', 'Motorola', 'OnePlus', 'LG', 'Sony', 'Kyocera', 'Huawei',
  'OPPO', 'Lenovo', 'Nokia', 'Asus', 'Fujitsu', 'Sharp', 'Skylight',
];
