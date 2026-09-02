export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  id: string;
  heading: string;
  items: FaqItem[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: 'general',
    heading: 'General',
    items: [
      {
        q: 'What is Mobot?',
        a: 'Mobot builds and operates human-supervised mechanical robots that automate mobile app testing on real, physical iOS and Android devices. Robots execute the tests; QA analysts verify every result before it reaches your team.',
      },
      {
        q: 'How does Mobot work?',
        a: 'Mobot uses robots and computer vision to automate physical app testing on a fleet of 300+ real devices. AI-assisted authoring turns your critical user journeys into robot test scripts, the fleet executes them in parallel, and a QA analyst reviews every failure so what lands in your backlog is a real, reproducible defect with video, logs, and reproduction steps.',
      },
      {
        q: 'How is Mobot different from Appium, Maestro, or a managed QA service?',
        a: 'Scripted frameworks and software-based managed suites drive an app through software — injected touch events on an emulator, simulator, or cloud device. Mobot is the only solution where a robot physically actuates a real device: real taps on real glass, real push delivery, real Bluetooth pairing, real biometrics. That is why Mobot covers the scenarios those tools structurally cannot, and why there are no scripts for your team to maintain.',
      },
      {
        q: 'Is testing done on real devices?',
        a: 'Yes — 100% real, physical Android and iOS devices. No emulators, no simulators, no virtualized devices.',
      },
      {
        q: 'How much faster is Mobot than manual testing?',
        a: 'On average, the robot fleet completes in one day what would take a human tester five days. Submit a build at end of day and get verified results by morning.',
      },
      {
        q: 'How much work is required from our team to get started?',
        a: 'Very little. Once you provide access to your builds, accounts, and existing test plans, your dedicated Mobot contact takes over: test cases are authored, validated, and running within 24–48 hours on average.',
      },
      {
        q: 'How does Mobot handle changes to our app?',
        a: "Because the robots see the screen with computer vision rather than relying on element selectors, most UI changes don't break tests. When a flow genuinely changes, Mobot updates the test plan for you — there is no script maintenance on your side.",
      },
      {
        q: 'What is the turnaround time for testing?',
        a: 'Most test runs are turned around the same day, and builds submitted by end of day come back with verified results by morning.',
      },
      {
        q: 'How does the robot know something is a bug?',
        a: 'Computer vision compares each step against an established baseline to mark it passed, failed, or flagged for review. During onboarding we set that baseline with you. Every failure is then reviewed by a QA analyst before it is reported.',
      },
      {
        q: 'Why does a result get flagged, and what happens next?',
        a: "A result is flagged when the robot detects a difference and your analyst isn't sure your team would call it a bug — for example, a login button that changed color. The analyst confirms with you once, and future reports classify that change the way you want.",
      },
      {
        q: 'Do we pick the devices we test on?',
        a: 'Yes. You choose the devices and OS versions for each test with your Mobot contact, and you can change the configuration as your user base shifts.',
      },
      {
        q: 'Will a robot be shipped to our office?',
        a: 'Today, all robots live and work in Mobot’s New York lab. Teams that need an on-premises fleet can apply for Mobot Labs, launching in 2027, which pairs Mobot robots and platform with training and certification for your own team.',
      },
      {
        q: 'What security and privacy measures are in place?',
        a: 'Apps are installed through standard distribution channels on test devices that reach your APIs through secured, internal Mobot networks. Reports and artifacts such as screenshots and video are secured end to end. Security documentation is available for enterprise procurement.',
      },
    ],
  },
  {
    id: 'testing-support',
    heading: 'Testing support',
    items: [
      {
        q: 'Does Mobot support external devices like Apple Watch?',
        a: 'Yes. Test plans can include a mobile app and a third-party device — Apple Watch, fitness trackers, headphones, POS hardware, and other Bluetooth peripherals.',
      },
      {
        q: 'What integrations does Mobot support?',
        a: "Mobot integrates with Slack, Jira, and TestRail today, and results are available in the Mobot platform for every run. If your integration of choice is missing, tell us — we're always adding more.",
      },
      {
        q: 'Does Mobot test payments with real credit cards?',
        a: 'Yes. Mobot can exercise in-app purchases and payment flows with real cards on real devices.',
      },
      {
        q: 'Does Mobot support localized testing or geolocation?',
        a: 'Yes. Test plans can run under different geolocations and locales.',
      },
      {
        q: 'Does Mobot support biometrics like Face ID and Touch ID?',
        a: 'Yes. Biometric flows run against the real secure enclave with strategic human intervention where the OS requires a live person.',
      },
      {
        q: 'Does Mobot support 2-factor authentication?',
        a: 'Yes — SMS codes, authenticator app codes, and QR-based flows can all be included in a test plan.',
      },
      {
        q: 'Can we test two apps or two devices interacting with each other?',
        a: 'Yes. Mobot is one of the only solutions that can place multiple physical devices side by side for a single robot — messaging, push notifications, and multi-device flows are tested with a real sender and a real receiver.',
      },
      {
        q: 'What is the maximum duration of a test?',
        a: 'Mobot supports multi-hour testing cycles.',
      },
      {
        q: 'Can you handle performance testing?',
        a: 'Mobot can handle some performance testing, including battery usage, but is not designed for load or stress testing.',
      },
      {
        q: 'Does Mobot support accessibility settings?',
        a: 'Yes. Dark mode, light mode, orientation changes, text-size changes, and other device-level accessibility settings can be part of any test plan.',
      },
      {
        q: 'What happens if a robot gets stuck?',
        a: 'A Mobot team member intervenes, diagnoses, and resolves the issue so testing resumes — you never see a partial or unverified result.',
      },
      {
        q: 'How is test data captured?',
        a: 'As the robot executes each step, screenshots, video, device logs, and network logs are captured. Your analyst reviews the run, adds notes where needed, and publishes the report to the Mobot platform and your chosen integrations.',
      },
    ],
  },
  {
    id: 'pricing',
    heading: 'Pricing',
    items: [
      {
        q: 'How is Mobot priced?',
        a: 'Two ways. Credits meter testing by action — a robot tap, swipe, or drag on a physical device — so you can start small and prove the value. Mobot Unlimited replaces per-run credits with all-you-can-test access across the full fleet for one flat annual rate.',
      },
      {
        q: 'What is an action?',
        a: 'An action is a single robot tap, swipe, or drag on a physical device. Credit plans include a predefined number of actions per month.',
      },
      {
        q: 'What is included in Mobot Unlimited?',
        a: 'Unlimited test runs across unlimited applications, no credit metering, high-frequency regression on the latest devices and OS releases, a dedicated Technical Account Manager, a seat on the Customer Advisory Board, a speaking slot at the 2027 Mobot User Conference, and early access to Mobot Labs.',
      },
      {
        q: 'Are contracts month to month or annual?',
        a: 'Mobot’s standard agreement is annual. Shorter commitments are available for teams that need flexible terms to get started.',
      },
      {
        q: 'How does Mobot compare in cost to Appium or Maestro?',
        a: "Open-source frameworks are free to download; the cost is the engineering time to author scripts, keep them passing through every UI change, run device infrastructure, and triage flaky failures — and that cost scales with release velocity. Mobot's price is the whole program: authoring, execution, devices, and human verification, with no scripts for your team to maintain.",
      },
    ],
  },
];
