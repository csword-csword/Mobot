/**
 * Blog & Reports content.
 *
 * Two sources are merged here:
 *  1. `seedPosts` — long-form resources that exist on the current site
 *     (reports, guides, ebooks) and are hand-curated below.
 *  2. `posts.generated.json` — produced by `scripts/import-webflow-blog.mjs`
 *     from a Webflow CMS CSV export of the Blog collection. Drop the CSV at
 *     `webflow-source/cms/blog.csv` and run `node scripts/import-webflow-blog.mjs`.
 */
import generated from './posts.generated.json';

export type PostKind = 'article' | 'report' | 'guide' | 'case-study';

export interface Post {
  slug: string;
  title: string;
  kind: PostKind;
  summary: string;
  /** ISO date. */
  date: string;
  author?: string;
  readTime?: string;
  tags?: string[];
  /** Sanitized HTML body (from Webflow rich text) or Markdown-ish paragraphs. */
  html?: string;
  /** Plain paragraphs when no HTML body is available. */
  paragraphs?: string[];
  /** For gated assets on the current site. */
  cta?: { label: string; href: string };
  /** External canonical URL, if the full article lives elsewhere. */
  externalUrl?: string;
  featured?: boolean;
  image?: string;
}

const seedPosts: Post[] = [
  {
    slug: 'defect-validation-signal-to-noise',
    title: 'A Failed Test Is Not a Bug: Why Defect Validation Is the Signal-to-Noise Advantage',
    kind: 'article',
    date: '2026-09-03',
    readTime: '6 min',
    tags: ['Defect validation', 'QA process', 'Test automation'],
    summary:
      'Automation suites report every failed assertion and leave your engineers to work out which ones matter. Mobot validates each failure first: forensic review, reproduction in multiple environments, video of the occurrence, and a human verdict. That is the difference between a red build and a defect your team trusts.',
    paragraphs: [
      'Every mobile team with an automation suite knows the ritual. The nightly run goes red. Someone opens the failures, and the sorting begins: a selector that broke when a button was renamed, a wait that was too short on a slow cloud device, a session that expired, a screen that changed on purpose, and, somewhere in the pile, a bug. The suite did its job. It ran the tests. It just has no idea which failure matters, and so the job of deciding falls to the most expensive people in the building.',
      'This is the noise problem, and it is structural. A scripted framework like Appium or Maestro can tell you that an assertion did not hold. It cannot tell you why. A simulator can produce a screenshot and a stack trace, but the phone in the simulator is a model of a phone, so even a clean reproduction there proves less than it seems to. And no script, on any device, can make the judgement that turns a failure into a ticket: is this a defect, or is it a change?',
      'Mobot treats that judgement as part of the product. Every failure the robots surface goes through validation before anything reaches your team, and validation means four specific things.',
      'First, we review all of the forensic data. The analyst reads the device log and the network log against the timestamp of the failure, alongside the screenshot at every step. That is how a vague "step 33 failed" becomes "the app crashed on tap after the API returned a 500," or, just as usefully, "the screen loaded late and there is no defect here."',
      'Second, we recreate the defect in multiple environments. The failing step is re-run on the original device to rule out a one-off, on a second device or OS version to establish how widely it reproduces, and from a different app state where that matters: cold start versus backgrounded, cellular versus Wi-Fi. The report you receive says where it reproduces and where it does not, which is exactly what an engineer needs to know before opening the code.',
      'Third, we provide video of the actual defect occurrence, recorded on the physical device as it happens, with the robot’s action in frame. There is no debate about what the tester saw or whether the screenshot was taken too early. Your engineer watches the tap and watches the app respond.',
      'Fourth, and most importantly, a human is in the loop. A Mobot QA analyst reads the evidence and makes the call: real defect, flaky run, or intended change. Only confirmed defects are pushed to Slack or Jira, each with the analyst’s note explaining what they found. Intended changes are agreed with you once and never re-reported. Nothing is hidden; every run and every decision stays visible in the platform. But your backlog only ever receives the signal.',
      'The result is a superior signal-to-noise ratio, and it changes behaviour on your side. When every red result is a verified defect, engineers stop deferring triage, because there is no triage. They fix. The suite goes back to doing the one thing it was supposed to do, which is change what the team does next.',
      'Real devices are what make the validation credible. Reproducing a crash on a simulator proves the simulator crashes. Reproducing it on an iPhone running a developer beta and then on a Pixel on a carrier network proves your users will hit it. Because Mobot’s robots operate physical hardware, every log, every screenshot, and every second of video comes from the phones your customers actually hold, and the analyst’s verdict is about that phone, not a model of one.',
    ],
    cta: { label: 'See how defect validation works', href: '/platform/defect-validation' },
  },
  {
    slug: 'annual-defect-report',
    title: 'Mobot Annual Defect Report: What Real Mobile Bugs Look Like',
    kind: 'report',
    date: '2026-09-01',
    readTime: '15 min',
    tags: ['Research', 'Defect data', 'Industry benchmarks'],
    featured: true,
    summary:
      'A year of Mobot testing produced 6,372 unique defects across 83 mobile apps in 11 industries. Five bug categories account for 57% of everything found — and every vertical has a signature bug that runs 1.4× to 3.8× above the cross-industry baseline.',
    paragraphs: [
      'Most industry reports survey teams about the bugs they think they have. This one counts the bugs Mobot’s robots actually found on real iOS and Android hardware between Q3 2025 and Q2 2026 — 6,372 unique defects across 83 apps in 11 industries, each reviewed by a QA analyst before it was counted.',
      'Across every industry, five categories dominated: broken navigation, missing or blank content, login and authentication failures, payment issues, and crashes. Together they account for 57% of every defect surfaced. But the average hides where the real risk lives: a fintech team and a travel team are fighting different bugs, and each is over-exposed in a way general-purpose QA tools tend to miss.',
      'Every one of the 11 verticals studied surfaced at least one meaningfully over-indexed bug category, from Social/Dating notifications at 3.8× the baseline to Travel/Outdoor location bugs at 3.7×. The full report breaks down category share by industry, deviation from the testing baseline, signature bugs sorted by uplift multiple, and whether defect classes favor one platform.',
    ],
    cta: { label: 'Download the full report', href: '/resources/annual-defect-report' },
  },
  {
    slug: 'your-test-automation-creates-costly-test-debt',
    title: 'Your Test Automation Creates Costly Test Debt',
    kind: 'guide',
    date: '2024-03-12',
    readTime: '8 min',
    tags: ['Test automation', 'Test debt', 'Strategy'],
    featured: true,
    summary:
      'Automated testing pays off — until the suite becomes a liability. This guide explains what test debt is, why it accumulates fastest on teams shipping quickly, and how to set up a mobile QA process that doesn’t collapse under its own scripts.',
    paragraphs: [
      'Test automation is supposed to buy back time. For most mobile teams it does — for a while. Then the release cadence picks up, the UI changes weekly, and the suite that used to be an asset starts demanding hours of attention every sprint. That accumulated obligation is test debt: the maintenance, triage, and rework your automation quietly requires just to keep telling you the truth.',
      'Test debt is not a sign of a bad team. It is the natural consequence of describing a user interface in code. Every selector is a promise that the screen will not change. Every timing wait is a guess about the environment. At the speed AI-assisted teams now ship, those promises break constantly, and each break sends an engineer into the suite to repair a test that found no defect.',
      'The debt compounds in three ways. Authoring debt: new features need new scripts before they get coverage, so coverage lags the roadmap. Maintenance debt: existing scripts break with every refactor, and the repair backlog grows with velocity. Trust debt: as flaky failures pile up, teams stop believing red builds — and the suite stops doing the one job it had.',
      'The way out is not more scripts. It is removing the two things that generate the debt: the selector and the simulator. When tests are executed by a robot that reads the screen with computer vision, there is no locator to break. When the test runs on a real device operated physically, the categories scripts could never cover — push delivery, Bluetooth, biometrics, camera, carrier networks — come into scope without a single line of code.',
      'That is the model Mobot is built on: AI-assisted authoring generates coverage from your build, computer vision drives robots on 300+ real devices, and a QA analyst verifies every failure before it reaches you. The maintenance line on your side goes to zero, and it stays there as your release cadence climbs.',
    ],
    cta: { label: 'Model your test debt with the calculator', href: '/compare#calculator' },
  },
  {
    slug: '2023-state-of-mobile-deep-linking',
    title: '2023 State of Mobile Deep Linking: A Landmark Report',
    kind: 'report',
    date: '2023-10-03',
    readTime: '12 min',
    tags: ['Deep linking', 'Research', 'Growth'],
    featured: true,
    summary:
      'A first-of-its-kind, in-depth analysis of success rates for mobile app deep links across the top apps in every major vertical, popular channels spanning search, social, email, and SMS, and devices on both iOS and Android.',
    paragraphs: [
      'Deep links are the connective tissue of mobile growth: every paid campaign, every email, every share, and every search result depends on a link resolving to the right screen inside the app. Yet almost nobody measures whether they actually work. This report does.',
      'Our study included the top apps from each major vertical and tested their deep links the way users open them — from real source apps and messages, on real iOS and Android devices, across search, social media, email, and SMS channels. Each app received a unique score, and the results reveal patterns that are intriguing and, at times, surprising.',
      'By examining extensive data sets, we unveil the good, bad, and ugly of deep linking implementations: which channels are most reliable, where links fall back to the home screen or a webview login, and how performance varies across verticals — enabling you to assess and optimize your app’s outreach strategies and capitalize on practices that work.',
      'Every result in the report was produced by Mobot’s robots on physical devices, not by a simulator or a script — because a deep link that resolves on a simulator says nothing about what happens on the phone in your user’s hand.',
    ],
    cta: { label: 'Request the full report', href: '/contact' },
  },
  {
    slug: 'how-to-fix-broken-deep-links-and-push-notifications',
    title: 'How to Fix Broken Deep Links & Push Notifications',
    kind: 'guide',
    date: '2024-01-18',
    readTime: '10 min',
    tags: ['Deep linking', 'Push notifications', 'Playbook'],
    summary:
      'You’re not crazy — the deep links are broken. This ebook gives you the tools to identify, validate, report, and resolve deep link and push notification failures that cost you customers, including how to compile the “receipts” on failure circumstances.',
    paragraphs: [
      'If you have ever watched a campaign underperform and suspected the links, you were probably right. Deep link and push notification failures are common, silent, and almost impossible to see from the dashboard: attribution just goes missing, and the user who tapped and landed on the wrong screen never files a ticket.',
      'This guide walks through the failure modes we see most on real devices: universal links that open a webview login despite the app being installed, push notifications that deliver on one OS version and vanish on another, cold-start handoffs that drop a parameter, and re-engagement flows that pass in the simulator and fail in the field.',
      'For each, we show how to reproduce it the way a user experiences it — from the real source app, on a real device, with the app in the real state — and how to compile the evidence an engineer needs: the device and OS, the channel, the exact link, a video of the tap, and the device log at the moment of the handoff.',
      'Then we show how to stop chasing them one at a time. Continuous validation on real devices catches a broken link in hours instead of after the spend, and a verified defect report with receipts turns a growth-team suspicion into an engineering fix.',
    ],
    cta: { label: 'Request the ebook', href: '/contact' },
  },
  {
    slug: 'deep-link-benchmark-report-sample',
    title: 'Deep Link Benchmark Report: Sample',
    kind: 'report',
    date: '2023-11-14',
    readTime: '6 min',
    tags: ['Deep linking', 'Benchmark', 'Sample report'],
    summary:
      'An example deep link benchmark report showing how Mobot measures your app’s deep link success rates and compares them against industry peers, channels — search, social, email, SMS — and devices and operating systems.',
    paragraphs: [
      'Mobot’s deep link benchmark reports offer a comprehensive analysis of your mobile app’s deep link success rates, comparing them across industry peers, channels including search, social, email, and SMS, and different devices and operating systems, to provide a clear overview of strengths and areas for enhancement.',
      'Every data point is produced by a robot opening the link from the real source on a real device and confirming the in-app destination. The sample report shows the scoring model, the per-channel breakdown, and the device and OS matrix so you know exactly what a benchmark on your own app would contain.',
    ],
    cta: { label: 'Request the sample report', href: '/resources/defect-reports' },
  },
  {
    slug: 'state-of-mobile-app-testing',
    title: 'The State of Mobile App Testing',
    kind: 'report',
    date: '2024-05-07',
    readTime: '9 min',
    tags: ['Research', 'Mobile QA'],
    summary:
      'How mobile teams actually test today — where emulators, scripted frameworks, device farms, and manual testing fit, where each one stops, and what the teams with the best app-store ratings do differently.',
    paragraphs: [
      'Most mobile teams run a patchwork: unit tests in CI, a scripted UI suite on emulators or a device cloud, and a manual pass before release. Each layer is reasonable on its own. Together they leave the same gap — the hardware-dependent scenarios that reach production broken.',
      'This report maps the landscape: what each approach covers, what it costs to keep running, and where it structurally cannot go. It draws on what Mobot sees across hundreds of real-device test runs a night — and on the outcomes of teams that moved the last mile of QA onto physical hardware.',
    ],
    cta: { label: 'Request the report', href: '/contact' },
  },
  {
    slug: 'push-notification-validation',
    title: 'Push Notification Validation on Real Devices',
    kind: 'article',
    date: '2024-02-06',
    readTime: '5 min',
    tags: ['Push notifications', 'How-to'],
    summary:
      'Why a passing push test on a simulator proves nothing, and how to validate delivery, tap, and destination the way your users experience it.',
    paragraphs: [
      'Push notification delivery depends on a real device registered with a real carrier network and an OS-level notification service. Simulators stub delivery at the APNs/FCM step: there is no device token to deliver to, so a “passing” push test proves that your code called the API, not that anything arrived.',
      'Validating push properly means five hops: the payload leaves your server, APNs or FCM delivers it to a real device, the notification lands in the tray, someone taps it, and the app opens to the right destination in the right state — including cold start and backgrounded. Mobot’s robots run all five on real phones, and a QA analyst confirms the result with video and device logs.',
    ],
    cta: { label: 'See the push & deep link solution', href: '/solutions/push-notifications-deep-linking' },
  },
  {
    slug: 'a-beginners-guide-to-mobile-testing',
    title: "A Beginner's Guide to Mobile Testing",
    kind: 'article',
    date: '2023-06-20',
    readTime: '7 min',
    tags: ['Mobile QA', 'Fundamentals'],
    summary:
      'The fundamentals of mobile app testing: the types of tests, the difference between emulators and real devices, and how to build a QA process that scales with your release cadence.',
    externalUrl: 'https://www.mobot.io/blog/a-beginners-guide-to-mobile-testing',
  },
];

const generatedPosts = (generated as Post[]).filter((p) => p && p.slug && p.title);

/** All posts, newest first. Generated (CMS) posts override seeds with the same slug. */
export const posts: Post[] = [
  ...generatedPosts,
  ...seedPosts.filter((s) => !generatedPosts.some((g) => g.slug === s.slug)),
].sort((a, b) => (a.date < b.date ? 1 : -1));

export const kindLabel: Record<PostKind, string> = {
  article: 'Article',
  report: 'Report',
  guide: 'Guide',
  'case-study': 'Case study',
};

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
