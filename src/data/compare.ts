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
  qawolf: { name: 'QA Wolf', sub: 'software-based managed QA service', slug: 'mobot-vs-qa-wolf' },
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
        note: 'Device clouds run real phones, but drive them through software.',
        values: { mobot: 'yes', appium: 'partial', maestro: 'partial', qawolf: 'partial' },
      },
      {
        label: 'Push delivery through real APNs/FCM to the device',
        values: { mobot: 'yes', appium: 'no', maestro: 'no', qawolf: 'partial' },
      },
      {
        label: 'Bluetooth pairing with real peripherals & wearables',
        values: { mobot: 'yes', appium: 'no', maestro: 'no', qawolf: 'no' },
      },
      {
        label: 'Biometrics on the real secure enclave',
        note: 'Simulators auto-approve the prompt; nothing is verified.',
        values: { mobot: 'yes', appium: 'partial', maestro: 'no', qawolf: 'partial' },
      },
      {
        label: 'Camera, QR & barcode with a real lens',
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
        values: { mobot: 'yes', appium: 'no', maestro: 'no', qawolf: 'partial' },
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

export interface CompetitorProfile {
  key: CompetitorKey;
  name: string;
  slug: string;
  category: string;
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
    category: 'Software-based managed QA service',
    what: 'QA Wolf is a managed QA service whose engineers write and maintain automated test scripts that run in software — on browsers, and for mobile, on emulators, simulators, or cloud devices.',
    headline: 'QA Wolf manages your scripts. Mobot removes the simulator underneath them.',
    intro:
      'Managed script-writing solves the staffing problem: someone else authors and maintains the suite. It doesn’t solve the physical problem. Scripts written for you still run through software on simulated or software-driven devices, so the defects that live in push delivery, Bluetooth, biometrics, and the camera are still invisible. Mobot is managed too — and the tests run on robots and real phones.',
    strengths: [
      'Test authoring and maintenance handled by their engineers, not yours',
      'Strong fit for web applications and browser-based flows',
      'Human triage of failures before results are reported',
      'Parallel execution for fast turnaround on stable, in-app suites',
    ],
    limitations: [
      {
        title: 'Managed scripts are still scripts on simulators',
        body: 'Whoever writes the automation, it executes by injecting events into an emulator, simulator, or software-driven cloud device. The physical layer — the digitizer, radios, secure enclave, camera, and carrier network — is never touched.',
      },
      {
        title: 'The maintenance cost is hidden, not gone',
        body: 'Scripts still break with every UI change; the repair cycle just happens on someone else’s calendar. At AI-driven release velocity that cycle is continuous, and it is priced into the service.',
      },
      {
        title: 'Built web-first',
        body: 'Browser automation is a mature, software-only problem. Mobile is different: the scenarios that reach production broken depend on hardware that a web-first stack has no way to exercise.',
      },
    ],
    pillars: [
      {
        title: 'Better: physical testing, expert-verified',
        body: 'Mobot pairs the managed model with a robot fleet on 300+ real devices. Every failure is verified by a QA analyst — and every test exercises the real hardware path, not a software stand-in.',
      },
      {
        title: 'Cheaper: one program, no simulator tax',
        body: 'You are not paying for scripts to be repaired after every release or for a device cloud to run them on. Mobot Unlimited is one flat annual rate for all-you-can-test coverage across the full fleet.',
      },
      {
        title: 'Faster: computer vision, not selectors',
        body: 'Robots read the screen visually, so coverage doesn’t wait on locator repair. AI-assisted authoring generates flows from your build; new coverage ships in hours and keeps passing through refactors.',
      },
    ],
    together:
      'If your surface is mostly web, a browser-focused managed service may be the right tool there. For mobile — and for any flow that touches hardware — Mobot is the managed program built for the device in your user’s hand.',
    faqs: [
      {
        q: 'Isn’t “managed” the same thing?',
        a: 'Both models take authoring and maintenance off your team. The difference is what runs underneath: software-driven emulators and cloud devices versus robots physically operating real phones. Only the second can test push delivery, Bluetooth, biometrics, camera, and network behavior.',
      },
      {
        q: 'Does Mobot verify results with humans too?',
        a: 'Yes. Every failure is triaged by a QA analyst before it reaches you, with video, device logs, network logs, and reproduction steps attached.',
      },
      {
        q: 'Can Mobot test our web app?',
        a: 'Mobot is purpose-built for mobile apps on physical devices. Mobile web flows that run inside a real phone’s browser are in scope; desktop browser testing is not.',
      },
    ],
  },
];
