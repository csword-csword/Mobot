/**
 * Competitive comparison data. Claims about other tools are limited to
 * structural facts about their category (scripted frameworks that drive apps
 * through software; software-based managed suites that run on emulators,
 * simulators, or cloud devices) — not pricing or roadmap specifics.
 */

export type Level = 'yes' | 'partial' | 'no';

export interface MatrixRow {
  label: string;
  note?: string;
  values: Record<string, Level>;
}

export interface MatrixGroup {
  heading: string;
  rows: MatrixRow[];
}

export const competitorKeys = ['mobot', 'appium', 'maestro', 'qawolf'] as const;
export type CompetitorKey = (typeof competitorKeys)[number];

export const competitorMeta: Record<CompetitorKey, { name: string; sub: string; slug?: string }> = {
  mobot: { name: 'Mobot', sub: 'robotic · real devices · expert-verified' },
  appium: { name: 'Appium', sub: 'open-source scripted framework', slug: 'mobot-vs-appium' },
  maestro: { name: 'Maestro', sub: 'YAML-based scripted framework', slug: 'mobot-vs-maestro' },
  qawolf: { name: 'QA Wolf', sub: 'managed QA · real iOS devices, emulated Android', slug: 'mobot-vs-qa-wolf' },
};

export const matrixGroups: MatrixGroup[] = [
  {
    heading: 'The physical layer',
    rows: [
      {
        label: 'Physical actuation — real taps on real glass',
        note: 'Software-injected touch events bypass the digitizer entirely.',
        values: { mobot: 'yes', appium: 'no', maestro: 'no', qawolf: 'no' },
      },
      {
        label: 'Real iOS & Android hardware, not emulators',
        note: 'QA Wolf runs a real iPhone/iPad farm but emulates Android; real Android devices are listed as coming soon.',
        values: { mobot: 'yes', appium: 'partial', maestro: 'partial', qawolf: 'partial' },
      },
      {
        label: 'Tests the exact binary you ship',
        note: 'QA Wolf re-signs every IPA with a custom provisioning profile to gain system-level control.',
        values: { mobot: 'yes', appium: 'partial', maestro: 'partial', qawolf: 'no' },
      },
      {
        label: 'Push delivery through real APNs/FCM to the device',
        values: { mobot: 'yes', appium: 'no', maestro: 'no', qawolf: 'partial' },
      },
      {
        label: 'Bluetooth pairing with real peripherals & wearables',
        note: 'The phone’s own radio is one thing; pairing with a watch, card reader, or medical device is another.',
        values: { mobot: 'yes', appium: 'no', maestro: 'no', qawolf: 'no' },
      },
      {
        label: 'Biometrics on the real secure enclave',
        note: 'Simulators auto-approve the prompt; nothing is verified.',
        values: { mobot: 'yes', appium: 'partial', maestro: 'no', qawolf: 'partial' },
      },
      {
        label: 'Camera, QR & barcode with a real lens',
        note: 'Injecting mock video into the camera feed proves the handler works, not the capture path.',
        values: { mobot: 'yes', appium: 'no', maestro: 'no', qawolf: 'no' },
      },
      {
        label: 'Multi-device flows with two real phones',
        values: { mobot: 'yes', appium: 'partial', maestro: 'no', qawolf: 'partial' },
      },
      {
        label: 'Carrier handoffs, Wi-Fi ↔ LTE, dead zones',
        values: { mobot: 'yes', appium: 'no', maestro: 'no', qawolf: 'no' },
      },
    ],
  },
  {
    heading: 'Authoring & maintenance',
    rows: [
      {
        label: 'No scripting required from your team',
        values: { mobot: 'yes', appium: 'no', maestro: 'partial', qawolf: 'yes' },
      },
      {
        label: 'Tests survive UI refactors without rewrites',
        note: 'Computer vision reads the screen; selectors and IDs don’t exist to break.',
        values: { mobot: 'yes', appium: 'no', maestro: 'partial', qawolf: 'partial' },
      },
      {
        label: 'Zero script maintenance on your engineers',
        note: 'A managed service absorbs the maintenance; computer vision removes the selector that causes it.',
        values: { mobot: 'yes', appium: 'no', maestro: 'no', qawolf: 'yes' },
      },
      {
        label: 'Every failure verified by a human before you see it',
        values: { mobot: 'yes', appium: 'no', maestro: 'no', qawolf: 'yes' },
      },
      {
        label: 'Forensic reports — video, device & network logs, repro',
        values: { mobot: 'yes', appium: 'partial', maestro: 'partial', qawolf: 'yes' },
      },
      {
        label: 'Fully managed operations, 5×24',
        values: { mobot: 'yes', appium: 'no', maestro: 'no', qawolf: 'yes' },
      },
    ],
  },
  {
    heading: 'Where other approaches win',
    rows: [
      {
        label: 'Speed per individual test run',
        values: { mobot: 'partial', appium: 'yes', maestro: 'yes', qawolf: 'yes' },
      },
      {
        label: 'Unit, API & component-level tests',
        values: { mobot: 'no', appium: 'yes', maestro: 'partial', qawolf: 'yes' },
      },
      {
        label: 'OS & device-matrix breadth via cloud farms',
        values: { mobot: 'partial', appium: 'yes', maestro: 'yes', qawolf: 'yes' },
      },
    ],
  },
];

/** One line of a head-to-head methodology comparison. */
export interface MethodologyRow {
  label: string;
  theirs: string;
  ours: string;
}

export interface CompetitorProfile {
  key: CompetitorKey;
  name: string;
  slug: string;
  category: string;
  /** Heading over the limitations column — the framing differs for DIY vs managed. */
  limitationsHeading?: string;
  /**
   * Bespoke methodology table. Used where the real difference is *how* the test
   * is executed rather than who writes the script.
   */
  methodology?: { heading: string; sub: string; rows: MethodologyRow[] };
  /**
   * Script economics (test-debt chart + cost calculator) only make sense when
   * the reader's own engineers maintain the suite. Managed services opt out.
   */
  showScriptEconomics?: boolean;
  /** One-line description of what the competitor is. */
  what: string;
  /** Hero headline. */
  headline: string;
  intro: string;
  /** Honest strengths — keeps the page credible. */
  strengths: string[];
  /** The structural limitation Mobot exists to solve. */
  limitations: { title: string; body: string }[];
  /** Pillars: Better / Cheaper / Faster. */
  pillars: { title: string; body: string }[];
  /** How the two fit together. */
  together: string;
  faqs: { q: string; a: string }[];
}

export const competitorProfiles: CompetitorProfile[] = [
  {
    key: 'appium',
    name: 'Appium',
    slug: 'mobot-vs-appium',
    category: 'Open-source scripted automation',
    what: 'Appium is an open-source framework for writing mobile UI automation scripts in code, executed against emulators, simulators, or cloud devices through the WebDriver protocol.',
    headline: 'Appium automates your app in software. Mobot tests it in the real world.',
    intro:
      'Appium is the workhorse of mobile UI scripting — and every Appium suite hits the same ceiling: injected touch events, no push delivery, no Bluetooth, no biometrics, and a script that breaks every time the UI moves. Mobot covers the layer Appium can’t reach, without adding a single script to your backlog.',
    strengths: [
      'Free, open source, and supported by a large community',
      'Fast per-run execution inside CI for stable, in-app flows',
      'Broad language bindings — Java, Python, JavaScript, and more',
      'Works with cloud device farms for wide OS coverage',
    ],
    limitations: [
      {
        title: 'Simulated inputs, simulated confidence',
        body: 'Appium drives the app by injecting events through the OS automation layer. The digitizer, camera, Bluetooth radio, secure enclave, and carrier network are never exercised — so the defects that live there ship to production with a green build.',
      },
      {
        title: 'Selectors are a maintenance contract',
        body: 'Every locator is a promise that the UI won’t change. At AI-assisted release cadence it changes constantly, and each change is an engineer opening the suite to repair scripts that found no bug.',
      },
      {
        title: 'Flakiness compounds with scale',
        body: 'Timing waits, brittle XPaths, and environment drift produce false failures that grow with the suite. Teams stop trusting red builds long before they stop paying for them.',
      },
    ],
    pillars: [
      {
        title: 'Better: real devices, real inputs',
        body: 'Robots tap real glass, receive real push notifications, pair real peripherals, and present real biometrics. Every hardware path an emulator stubs is a path Mobot actually tests.',
      },
      {
        title: 'Cheaper: no scripts to build or maintain',
        body: 'Appium is free to download and expensive to run: authoring, locator repair after every UI change, device infrastructure, and flake triage all land on your engineers. Mobot’s price covers the whole program — and it doesn’t rise with your release cadence.',
      },
      {
        title: 'Faster: computer-vision authoring',
        body: 'AI explores your build and generates test flows across critical journeys; the robot executes them by recognizing on-screen UI the way a person does. New coverage lands in hours, not sprints, and survives the refactor that would have broken a selector.',
      },
    ],
    together:
      'Keep Appium for what it does well — fast, in-app checks in CI on stable flows. Point Mobot at the last mile: hardware-dependent scenarios, full-device regression before release, and the flaky end-to-end suite you’re tired of repairing.',
    faqs: [
      {
        q: 'Do we have to throw away our Appium suite?',
        a: 'No. Most teams keep unit, API, and stable in-app Appium checks in CI and move hardware-dependent and end-to-end coverage to Mobot, where it no longer needs maintenance.',
      },
      {
        q: 'Can Mobot run on our existing test cases?',
        a: 'Yes. Hand us test plans, a recorded walkthrough, or nothing at all — AI-assisted authoring explores the build and proposes coverage across critical journeys, which your Mobot contact validates with you.',
      },
      {
        q: 'How does Mobot fit into CI/CD?',
        a: 'Submit a build at end of day and verified results are waiting by morning, with reports in the Mobot platform and Slack, Jira, or TestRail.',
      },
    ],
  },
  {
    key: 'maestro',
    name: 'Maestro',
    slug: 'mobot-vs-maestro',
    category: 'YAML-based scripted automation',
    what: 'Maestro is a mobile UI testing framework where flows are written as YAML and executed on simulators, emulators, or connected devices, with a hosted cloud option for running flows at scale.',
    headline: 'Maestro made scripts simpler. Mobot made them unnecessary.',
    intro:
      'Maestro’s YAML flows are easier to write than Appium code, and they still describe a simulated user on a simulated device. Simpler scripts are still scripts — they still break, still need an engineer, and still can’t receive a push notification or pair a watch. Mobot replaces the script with a robot and the simulator with a phone.',
    strengths: [
      'Readable YAML flows that are quick to write for in-app paths',
      'More tolerant of minor UI changes than selector-heavy frameworks',
      'Lightweight local setup and a hosted cloud for parallel runs',
      'Good fit for smoke checks on stable, in-app flows in CI',
    ],
    limitations: [
      {
        title: 'The ceiling is the simulator, not the syntax',
        body: 'However elegant the flow file, execution happens through software on a simulator, emulator, or software-driven device. Push delivery, Bluetooth, biometrics, camera, and network transitions are out of reach by design.',
      },
      {
        title: 'Simpler to write is not free to maintain',
        body: 'YAML flows still reference text, IDs, and positions. When copy, layout, or navigation changes — which AI-assisted teams ship daily — flows fail and someone has to fix them.',
      },
      {
        title: 'Green in the cloud, broken on the phone',
        body: 'A flow that passes in the hosted runner proves the app works under simulated conditions. It says nothing about the real device your user is holding.',
      },
    ],
    pillars: [
      {
        title: 'Better: the phone, not a model of it',
        body: 'Mobot executes on 300+ real iOS and Android devices with a robot physically driving each one. What a Maestro flow can only assert about a simulator, Mobot verifies on hardware.',
      },
      {
        title: 'Cheaper: the maintenance line goes to zero',
        body: 'Every hour your team spends repairing flows is an hour that found no defect. With Mobot, authoring, updates, execution, and triage are the platform’s job — one predictable cost that doesn’t climb with release velocity.',
      },
      {
        title: 'Faster: from build to coverage in hours',
        body: 'AI explores your build and proposes flows across critical journeys; computer vision drives them on the robot. No flow files to write, no waits to tune, no runner to babysit.',
      },
    ],
    together:
      'Use Maestro for quick smoke checks on stable in-app flows. Hand Mobot the coverage that needs a real device: hardware-dependent scenarios, multi-device flows, and overnight release regression with human-verified results.',
    faqs: [
      {
        q: 'Is Mobot slower than running Maestro flows in the cloud?',
        a: 'Per run, yes — a robot moves at the speed of a person. Per release, Mobot runs the fleet in parallel overnight and returns verified results by morning, with no repair cycle afterward.',
      },
      {
        q: 'Can we keep our Maestro flows and add Mobot?',
        a: 'Yes. Teams typically keep Maestro for fast in-app smoke checks and move hardware-dependent and end-to-end coverage to Mobot.',
      },
      {
        q: 'Who writes the Mobot tests?',
        a: 'Mobot does. AI-assisted authoring explores the build and generates flows, which your Mobot contact validates with you. Your engineers write nothing.',
      },
    ],
  },
  {
    key: 'qawolf',
    name: 'QA Wolf',
    slug: 'mobot-vs-qa-wolf',
    category: 'Managed QA service · real iOS devices, emulated Android',
    limitationsHeading: 'Where the methodology sets the ceiling',
    showScriptEconomics: false,
    methodology: {
      heading: 'Both say “real devices.” The methodologies are not the same.',
      sub: 'This is the comparison that matters, and it is drawn from what each of us publishes about how the tests actually run.',
      rows: [
        {
          label: 'Android',
          theirs: 'GPU-accelerated emulators, each on its own virtual machine. Real Android devices are listed as coming soon.',
          ours: 'Real Android handsets — Samsung, Pixel, and the rest of the fleet — operated by robots.',
        },
        {
          label: 'iOS',
          theirs: 'Real iPhones and iPads, rack-mounted and driven over the network by control agents in Kubernetes pods.',
          ours: 'Real iPhones and iPads on a stage, driven by a mechanical stylus that touches the glass.',
        },
        {
          label: 'The binary under test',
          theirs: 'Every IPA is re-signed with a custom provisioning profile to gain system-level control.',
          ours: 'The build you are about to ship, unmodified and unsigned by us.',
        },
        {
          label: 'Camera & sensors',
          theirs: 'Camera input replaced and sensor data mocked; media files injected into the camera and microphone.',
          ours: 'A real lens pointed at a real screen, and the device’s own sensors reporting real conditions.',
        },
        {
          label: 'Touch input',
          theirs: 'Events delivered through the automation layer by a software agent.',
          ours: 'A physical tap on the digitizer, the same event your user generates.',
        },
        {
          label: 'External peripherals',
          theirs: 'Not claimed. Their pages cover the phone’s own radios and sensors.',
          ours: 'Real pairing over real RF with watches, card readers, medical devices, and IoT hardware.',
        },
      ],
    },
    what: 'QA Wolf is a managed QA service that builds and maintains your suite for you. Web tests run in Playwright; mobile tests are built in Appium and run on QA Wolf’s own rack-mounted iPhones and iPads for iOS, and on GPU-accelerated emulators for Android.',
    headline: 'QA Wolf modifies your build to test it. Mobot tests the build you ship.',
    intro:
      'QA Wolf is a serious operation, and the honest comparison is narrower than most vendor pages would have you believe. They run real iPhones. They reproduce failures with humans. Where they differ is what happens underneath: Android runs on emulators, and to control an iOS device they re-sign your IPA with their own provisioning profile so they can replace camera input and mock sensor data. Mobot points a robot at an unmodified production build on real hardware, for both platforms.',
    strengths: [
      'Real iPhones and iPads in a device farm they own and operate',
      'A published zero-flake guarantee — failures are reproduced by humans before anything is reported',
      'A coverage guarantee: 80%+ automated coverage, stated in weeks to four months',
      'Tests are yours in open-source Playwright and Appium, with no vendor lock-in',
      'Strong web coverage, fully parallel infrastructure, and deep public customer proof',
    ],
    limitations: [
      {
        title: 'Android is emulated, not real hardware',
        body: 'QA Wolf states plainly that Android runs on emulators — “each running on their own virtual machine” — with real Android devices listed as coming soon. On Android, that puts every hardware-dependent scenario out of reach: OEM firmware quirks, real radios, thermal behaviour, and anything a Samsung or Pixel does that an emulator does not.',
      },
      {
        title: 'Your iOS binary is modified before it is tested',
        body: 'To gain control of the device, QA Wolf re-signs every IPA with a custom provisioning profile, which lets them replace camera input, override network hardware calls, and mock sensor data. That buys determinism, and it is a legitimate engineering trade. It also means the artifact under test is not the artifact you ship, and the sensor path is simulated rather than exercised.',
      },
      {
        title: 'Mocked input proves the handler, not the hardware',
        body: 'Injecting a video file into the camera feed proves your code handles a frame. It does not prove the lens focuses on a customer’s document, that the scanner reads a crumpled barcode, or that Face ID clears against the real secure enclave. For flows where the hardware is the product, the mock is the part that has to be true.',
      },
      {
        title: 'Mobile is Appium underneath',
        body: 'Their mobile suites are built in Appium on top of XCUITest, so the tests are locator-based. The maintenance burden is absorbed by their team rather than yours, which is a real benefit — but the mechanism that creates it is still there. Computer vision removes it instead.',
      },
      {
        title: 'External peripherals and carrier networks are not claimed',
        body: 'Their pages cover the phone’s own sensors and radios. We found no claim about pairing with external Bluetooth peripherals — a watch, a card reader, a medical device — or about testing over a real carrier network rather than Wi-Fi. If your app is only half the product, that gap matters.',
      },
    ],
    pillars: [
      {
        title: 'Better: real hardware on both platforms',
        body: 'Mobot runs 300+ real iOS and Android devices — no emulated platform, no re-signed binary, no mocked sensors. A robot taps the glass of a phone running the build you are about to release, and the camera, radios, and secure enclave are the real ones.',
      },
      {
        title: 'Cheaper: no locator to maintain, by anyone',
        body: 'A managed service absorbs script maintenance into its price. Computer vision removes the selector that generates the work, so the cost is not being paid on either side of the contract — and Mobot Unlimited is one flat annual rate across the fleet.',
      },
      {
        title: 'Faster: coverage that survives your refactors',
        body: 'AI-assisted authoring proposes coverage from your build, and because nothing is anchored to a resource ID or XPath, a redesign does not send anyone back into the suite to repair it.',
      },
    ],
    together:
      'These are not mutually exclusive. If you have a large web surface, QA Wolf covers it in Playwright and does that well. Where Mobot fits is the mobile side, and specifically the flows that depend on the device being real: Android hardware, external peripherals, the camera path, biometrics, and delivery over a real network.',
    faqs: [
      {
        q: 'QA Wolf runs real iPhones too. What is actually different?',
        a: 'Two things. Their Android testing runs on emulators, with real Android devices listed as coming soon — so on Android there is no physical hardware at all. And on iOS they re-sign your IPA with their own provisioning profile in order to replace camera input and mock sensor data. Mobot runs an unmodified build on real hardware for both platforms, with a robot physically operating the device.',
      },
      {
        q: 'They also have humans verifying failures. Isn’t that the same as your defect validation?',
        a: 'The intent is the same and we would not claim otherwise — they publish a zero-flake guarantee and state that failures are reproduced by humans. The difference is what the analyst can verify. When a run happens on real hardware with real inputs, reproduction covers the physical path too, which is exactly where the defect often is.',
      },
      {
        q: 'Is mocking sensor data actually a problem?',
        a: 'Not always — it is a reasonable trade for determinism, and for most in-app logic it is fine. It becomes a problem when the hardware is the thing you need to trust: a document scan through a real lens, a payment terminal pairing over real Bluetooth, biometric auth against the secure enclave. A mocked input cannot fail the way the real one does.',
      },
      {
        q: 'Can Mobot test our web app?',
        a: 'No. Mobot is purpose-built for mobile apps on physical devices. Mobile web flows running inside a real phone’s browser are in scope; desktop browser testing is not, and a web-focused service is the better tool there.',
      },
    ],
  },
];
