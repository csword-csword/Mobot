export interface Hop {
  label: string;
  detail: string;
  warn?: boolean;
}

export interface Solution {
  slug: string;
  title: string;
  short: string;
  eyebrow: string;
  headline: string;
  intro: string;
  /** Why simulators and scripts can't see it. */
  escapes: string;
  /** How Mobot catches it. */
  catches: string;
  /** What ships broken without it. */
  broken: string[];
  /** The hop-by-hop path Mobot verifies. */
  path: { title: string; hops: Hop[] };
  /** Related capability names (from data/content capabilities). */
  capabilities: string[];
  /** Who this matters most for. */
  audience: string;
  faqs: { q: string; a: string }[];
  /** Blog post slugs (see data/posts) to surface as related how-to guides. */
  guides?: string[];
}

export const solutions: Solution[] = [
  {
    slug: 'push-notifications-deep-linking',
    guides: ['how-to-test-2fa-on-ios', 'how-to-test-sms-messages-on-ios', 'how-to-test-multi-device-messaging-on-ios'],
    title: 'Push Notifications & Deep Linking',
    short: 'A push that never arrives, a link that opens the wrong screen',
    eyebrow: 'Solutions · Push & deep links',
    headline: 'Prove the push arrived and the link landed — on a real phone',
    intro:
      'A push that never arrives, or a deep link that opens the wrong screen, quietly breaks the moment that was supposed to bring a user back into your app. Mobot verifies the entire path — server, APNs/FCM, device, tap, destination — on real hardware.',
    escapes:
      'Push delivery depends on a real device registered with a real carrier network and an OS-level notification service. Simulators stub delivery at the APNs/FCM step; there is no real device token to deliver to, so arrival is never proven. Deep links are resolved by the real OS handoff, which a scripted framework can only approximate.',
    catches:
      'Robots trigger real notifications on real devices and verify the full path the way a user actually experiences it — delivery to the tray, the physical tap, and the exact in-app destination, including cold-start and backgrounded states. Every channel, every campaign, verified before the budget goes live.',
    broken: [
      'Silent delivery failures on specific OS versions or after a cold start',
      'Links that 404, open a webview login, or land on the home screen instead of the promotion',
      'Campaign attribution that never gets credited because the handoff dropped a parameter',
      'Re-engagement flows that work in the simulator and fail in the field',
    ],
    path: {
      title: 'The five-hop path Mobot verifies',
      hops: [
        { label: 'Your server', detail: 'Push payload queued for delivery.' },
        { label: 'APNs / FCM', detail: 'Simulators stub delivery here — there is no real device token to deliver to.', warn: true },
        { label: 'Physical device', detail: 'Notification lands in the OS tray on real hardware.' },
        { label: 'Physical tap', detail: 'A robot taps the real notification banner.' },
        { label: 'Verified deep link', detail: 'The robot confirms the exact in-app destination.' },
      ],
    },
    capabilities: ['Push notifications', 'Deep linking', 'SMS & email', 'Out-of-app workflows'],
    audience: 'Growth and marketing teams running paid campaigns, product teams shipping re-engagement flows, and engineering teams tired of “works on my simulator.”',
    faqs: [
      { q: 'Can Mobot test deep links from every channel?', a: 'Yes — search, social, email, SMS, QR, and in-app. Links are opened the way a user opens them, from the real source app or message, on a real device.' },
      { q: 'Do you test push on both iOS and Android?', a: 'Yes. Real APNs delivery on iOS and real FCM delivery on Android, across the OS versions your users are on.' },
      { q: 'Can this run continuously, not just before a release?', a: 'Yes. Teams monitor high-value links and notification paths on a schedule so a broken campaign is caught in hours, not after the spend.' },
    ],
  },
  {
    slug: 'bluetooth-connected-devices',
    guides: ['how-to-test-bluetooth-on-ios', 'how-to-test-medical-devices-on-ios', 'how-to-test-multiple-devices-at-once-on-ios'],
    title: 'Bluetooth & Connected Devices (IoT)',
    short: 'No emulator exists for this scenario at all',
    eyebrow: 'Solutions · Bluetooth & IoT',
    headline: 'The only way to test your app against the physical world',
    intro:
      'Wearables, POS hardware, car pairing, medical devices, smart home — if your app talks to something physical, there is no emulator that can stand in for the real pairing. Mobot pairs real phones with real peripherals over real RF.',
    escapes:
      "There's no software model for a Bluetooth radio finding, pairing with, and holding a connection to a physical peripheral. This category has no emulator at all, and a scripted framework running on a cloud device can't put a watch on the bench next to the phone.",
    catches:
      'Robots pair real devices with real peripherals under real conditions — an Apple Watch, a heart-rate strap, a card reader, a vehicle head unit — and QA analysts verify the connection, the data exchange, and the failure handling when the link drops.',
    broken: [
      'Pairing that hangs on a specific OS version or after a firmware update',
      'Sync that silently stops after the app is backgrounded',
      'Reconnect logic that never fires when the peripheral comes back in range',
      'Data that arrives out of order or not at all under real interference',
    ],
    path: {
      title: 'What Mobot exercises on the bench',
      hops: [
        { label: 'Discover', detail: 'Real radio scan finds the real peripheral.' },
        { label: 'Pair', detail: 'OS pairing prompt handled on the device — simulators have no radio to pair with.', warn: true },
        { label: 'Exchange', detail: 'Live data over real RF, with real interference.' },
        { label: 'Interrupt', detail: 'Background the app, walk out of range, kill the connection.' },
        { label: 'Verify', detail: 'Reconnect, resync, and error handling confirmed by an analyst.' },
      ],
    },
    capabilities: ['Apple Watch & Bluetooth', 'Connected & IoT devices', 'Multi-device messaging', 'Out-of-app workflows'],
    audience: 'Health and fitness, fintech and payments hardware, automotive, smart home, and any team whose app is only half the product — this is Mobot’s most uncontested ground.',
    faqs: [
      { q: 'Which peripherals can you test with?', a: 'Any Bluetooth or connected device you can ship to the lab — wearables, headphones, card readers, sensors, vehicle head units, and custom hardware. We keep a bench of common devices and add yours.' },
      { q: 'Can you test the companion app and the device firmware together?', a: 'Yes. The robot operates the phone while the peripheral runs your firmware; analysts verify both sides of the exchange.' },
      { q: 'What about Apple Watch apps?', a: 'Test plans can include a mobile app and the paired watch, including sync, notifications mirrored to the wrist, and watch-initiated actions.' },
    ],
  },
  {
    slug: 'biometrics-payments',
    guides: ['how-to-test-biometrics-on-ios', 'how-to-test-2fa-on-ios', 'how-to-use-charles-proxy'],
    title: 'Biometrics & Payments',
    short: 'Face ID, Touch ID, and payment flows end to end',
    eyebrow: 'Solutions · Biometrics & payments',
    headline: 'Face ID, Touch ID, 2FA, and checkout — verified on the secure enclave, not auto-approved',
    intro:
      'The moment money moves is the moment users judge your app. Simulators auto-approve the biometric prompt and stub the payment sheet, so the flows with the highest stakes get the least real coverage. Mobot exercises them on real hardware, end to end.',
    escapes:
      'A simulator’s biometric prompt is fiction: it auto-approves without a secure enclave. Payment sheets, 2FA codes, and third-party auth handoffs are stubbed or skipped, and a scripted framework has no way to present a real face or a real card.',
    catches:
      'Robots drive real checkout, login, and authentication flows on real devices — Face ID and Touch ID on the secure enclave, real cards through real payment sheets, SMS and authenticator 2FA, Google and Facebook sign-in through the real OS handoff — with strategic human intervention where the OS requires a live person.',
    broken: [
      'Face ID login that crashes intermittently on a specific device and OS',
      'Card details that fail to save during checkout, blocking repeat purchases',
      '2FA codes that arrive but never auto-fill, stranding users at the gate',
      'Third-party sign-in that loops back to the login screen after the handoff',
    ],
    path: {
      title: 'The checkout path Mobot verifies',
      hops: [
        { label: 'Add to cart', detail: 'Real taps through the real product flow.' },
        { label: 'Authenticate', detail: 'Face ID / Touch ID on the secure enclave — simulators auto-approve and verify nothing.', warn: true },
        { label: 'Payment sheet', detail: 'Real card, real sheet, real network round trip.' },
        { label: '2FA', detail: 'SMS or authenticator code received and entered on the device.' },
        { label: 'Confirmed', detail: 'Order state, receipt, and account verified by an analyst.' },
      ],
    },
    capabilities: ['Biometrics', 'In-app purchases', '2-factor authentication', 'Google & Facebook auth'],
    audience: 'Fintech, neobanks, commerce, and any regulated app where a failed login or payment is a support ticket, a chargeback, or a compliance finding.',
    faqs: [
      { q: 'Do you use real payment cards?', a: 'Yes. Test plans can exercise in-app purchases and checkout with real cards on real devices, against your sandbox or production endpoints as you prefer.' },
      { q: 'How is Face ID tested if it needs a real face?', a: 'Biometric flows run on the real secure enclave with strategic human intervention where the OS requires a live person — the prompt, the enclave, and the app’s response are all real.' },
      { q: 'Can you test regulated flows like KYC?', a: 'Yes. Document capture, selfie checks, and identity verification flows run on real cameras and real devices, with evidence captured for compliance review.' },
    ],
  },
  {
    slug: 'camera-sensors-location',
    guides: ['how-to-test-location-services-on-ios', 'how-to-test-qr-codes-on-ios', 'how-to-test-app-backgrounding-on-ios'],
    title: 'Camera, Sensors & Location',
    short: 'Barcode scans, AR, GPS, network transitions',
    eyebrow: 'Solutions · Camera, sensors & location',
    headline: 'A real lens looking at a real code — and a real network dropping out',
    intro:
      'Check deposit, barcode and QR scanning, document capture, AR, geolocation, and carrier handoffs all depend on hardware a simulator replaces with a mock. Mobot puts real inputs in front of real sensors and verifies what the app does with them.',
    escapes:
      'Simulators inject mock frames into the camera — no lens, no focus, no exposure, no bug found. GPS is a fixed coordinate. The network is perfect host networking that never drops. A scripted framework can’t hold a barcode up to the phone.',
    catches:
      'Robots present real barcodes, documents, and scenes to the real camera; move between Wi-Fi and LTE; and run flows under real locations and locales. Analysts verify capture, decode, upload, and the app’s behavior when conditions change mid-flow.',
    broken: [
      'Barcode and check scans that fail on specific camera modules or lighting',
      'Uploads that stall when the device moves from Wi-Fi to LTE',
      'Location-gated features that behave differently in the field than on the mock coordinate',
      'Photo pickers and media pipelines that work on the simulator and hang on the device',
    ],
    path: {
      title: 'The capture path Mobot verifies',
      hops: [
        { label: 'Present', detail: 'A real code, document, or scene in front of the lens.' },
        { label: 'Capture', detail: 'Real focus, exposure, and decode — simulators inject mock frames instead.', warn: true },
        { label: 'Upload', detail: 'Real network, including a Wi-Fi → LTE handoff mid-transfer.' },
        { label: 'Locate', detail: 'Real geolocation and locale on the device.' },
        { label: 'Verify', detail: 'Result, error handling, and retry behavior confirmed by an analyst.' },
      ],
    },
    capabilities: ['Camera, QR & barcode', 'Photo upload & download', 'Geolocation & networks', 'Rotation & accessibility'],
    audience: 'Banking (check deposit, KYC), retail and logistics (scanning), travel and mobility (location), and any app with an AR or media capture flow.',
    faqs: [
      { q: 'Can you test check deposit?', a: 'Yes. Real checks are presented to the real camera, and the capture, quality checks, and submission are verified end to end.' },
      { q: 'How do you test network transitions?', a: 'Devices move between Wi-Fi and LTE, and into low-signal conditions, while a flow is in progress. Analysts verify what the app does when the connection changes.' },
      { q: 'Can you test different geolocations?', a: 'Yes. Test plans can run under different locations and locales to verify location-gated features and localized content.' },
    ],
  },
  {
    slug: 'release-regression-testing',
    guides: ['how-to-test-multiple-devices-at-once-on-ios', 'how-to-test-app-backgrounding-on-ios', 'how-to-use-charles-proxy'],
    title: 'Release Regression Testing',
    short: 'Full regression on real devices, overnight',
    eyebrow: 'Solutions · Release regression',
    headline: 'Submit a build at end of day. Get verified defects by morning.',
    intro:
      'Shipping weekly or faster means QA is usually the bottleneck. Mobot runs full regression passes on real devices overnight — in parallel across the fleet — so a build submitted at end of day comes back with human-verified results by morning.',
    escapes:
      'Regression coverage that only runs on emulators misses the hardware-dependent defects that make it into the release anyway. Scripted suites need repairing after every UI change, and manual regression can’t keep up with an AI-assisted release cadence.',
    catches:
      'The robot fleet executes your regression suite in parallel across real devices and OS versions, including multi-device flows with a real sender and receiver. Every failure is triaged by a QA analyst before it reaches your backlog, so release day starts with a list of real defects instead of a list of red builds to investigate.',
    broken: [
      'Release-day fire drills spent triaging failures that turn out not to be bugs',
      'Hardware-dependent regressions that emulators pass and users hit on day one',
      'Coverage rationed to the “important” devices because the suite can’t run everywhere',
      'Engineers pulled into manual regression the week before every launch',
    ],
    path: {
      title: 'From build to verified defect, overnight',
      hops: [
        { label: '6:00 PM', detail: 'Build submitted through your normal distribution channel.' },
        { label: 'Queue', detail: 'Suite assigned across robots and devices — no scripts to repair first.', warn: true },
        { label: 'Overnight', detail: 'Parallel execution on real devices, every step captured.' },
        { label: 'Triage', detail: 'A QA analyst verifies every failure and adds notes.' },
        { label: '9:00 AM', detail: 'Verified defects in Slack, Jira, or TestRail with video and logs.' },
      ],
    },
    capabilities: ['Multi-device messaging', 'Out-of-app workflows', 'Phone calls', 'Rotation & accessibility'],
    audience: 'Mobile teams on weekly or faster release cadence, QA leads rationing coverage, and engineering leaders who want the pre-release week back.',
    faqs: [
      { q: 'How fast can a full regression run?', a: 'Builds submitted by end of day return verified results by morning. The fleet runs in parallel, and each robot can drive up to three devices at once.' },
      { q: 'What happens to flaky results?', a: 'They stop at the analyst. Every failure is reviewed and reproduced before it is reported; a result that isn’t a real defect is never forwarded to your team.' },
      { q: 'Can we run more often than once per release?', a: 'Yes. Mobot Unlimited removes the per-run meter entirely, so teams run every release candidate and every nightly build across the full matrix.' },
    ],
  },
];
