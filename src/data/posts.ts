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
    slug: 'the-real-cost-of-appium-at-scale',
    title: 'The Real Cost of Appium at Scale (and the Four Things That Actually Fix It)',
    kind: 'guide',
    date: '2026-09-05',
    readTime: '9 min',
    tags: ['Test automation', 'Test debt', 'Appium'],
    featured: true,
    summary:
      'Appium\'s license is free. Its total cost of ownership at scale is not. A category-by-category breakdown of where that cost actually comes from, and what structurally removes each one — not "add AI," but the specific mechanism that fixes each specific category.',
    html: `
      <h2>Appium is a good tool. The bill comes later.</h2>
      <p>Appium is free, open-source, and genuinely capable — it remains the most widely used cross-platform mobile automation framework, and none of that is in question. What's worth examining is what "free" actually costs once a team scales past a few dozen tests on a fast-moving app, because the license fee and the total cost of ownership are two different numbers, and the gap between them is not obvious until a team is deep enough in to feel it.</p>
      <p>This is not an argument that Appium is a bad choice. It's a breakdown of where the cost curve stays flat, where it bends, and what actually changes its shape — so the decision can be made on the real cost, not on the license price alone.</p>

      <h2>Where the cost actually comes from</h2>
      <p>"Test maintenance" is not one line item. It's at least four, and most teams only budget for the first one.</p>

      <h3>1. Selector repair</h3>
      <p>This is the visible cost: a test fails, someone opens it, the locator no longer matches the element it was written against, and they fix it. It's also, structurally, unavoidable at scale, because Appium (like any locator-based framework) ties a test's reliability to a specific attribute — a resource ID, an XPath, an accessibility label — and modern mobile UIs do not hold those attributes still. A renamed view, a restructured layout, a text label updated for a new locale: any of it invalidates every test that located an element through the changed attribute, on an actively developed app, every sprint.</p>

      <h3>2. Cross-platform duplication</h3>
      <p>Appium's core promise is write-once-run-both across Android and iOS. In practice, platform-specific quirks — different accessibility label conventions, different timing behavior, different gesture handling — creep into the "shared" suite over time, and teams end up maintaining meaningfully divergent test logic per platform anyway. The promise is real but partial: a team still absorbs some of the duplication cost the shared framework was supposed to eliminate.</p>

      <h3>3. Setup and environment overhead</h3>
      <p>Before a single test runs, someone has stood up Node.js, the JDK, the Android SDK, platform drivers, and environment variables — and kept them current every time a driver or OS version moves. None of this is instantaneous, and almost none of it is optional if the suite needs to keep running.</p>

      <h3>4. The coverage that never gets written</h3>
      <p>This is the cost category that never shows up in a maintenance audit, because it's an absence, not a logged event. When most of a QA team's time goes to keeping existing tests alive, the capacity left for writing new coverage shrinks — and teams quietly stop automating the parts of the app they know should be tested, because there's no time left. It never appears as a line item. It's still a real cost, and it's usually the largest one.</p>

      <h2>When the cost curve stays flat</h2>
      <p>It would be inaccurate to frame this as Appium being broadly wrong for mobile QA. The cost above bends under a specific set of conditions — outside them, Appium remains a reasonable choice.</p>
      <p>The cost stays manageable when the UI is relatively stable between releases, the team already has dedicated automation engineering capacity in headcount, the suite stays small, or the team needs deep custom control — proprietary hardware integrations, non-standard reporting — that Appium's open plugin architecture supports well.</p>
      <p>It bends when the UI changes weekly or faster, when QA generalists rather than dedicated SDETs are asked to maintain the test code, or when release cadence is fast enough that a maintenance backlog directly delays shipping. Most teams evaluating this honestly find themselves in the second set by the time they're asking "why is our suite always red" — which is a signal in itself.</p>

      <h2>What actually changes each category</h2>
      <p>"Add AI" is not specific enough to be useful. Here is what structurally addresses each category — and why a fix aimed at one category does not automatically fix the others.</p>

      <h3>Selector repair: remove the selector, not just make it smarter</h3>
      <p>Self-healing locators — building a composite match from text, position, and surrounding structure instead of one attribute — reduce Category 1's cost, but they're still repairing the same underlying mechanism: a script that has to find an element to act on it. Mobot's robots don't locate elements at all. Computer vision reads the screen the way a person does and a robot physically taps the device, so there is no selector, healing or otherwise, to break when a button is renamed or a screen is redesigned. This doesn't reduce Category 1's cost. It removes the mechanism that generates it.</p>

      <h3>Cross-platform duplication: nothing shared, nothing to diverge</h3>
      <p>The duplication problem comes from maintaining one script meant to describe two platforms that don't behave identically. Mobot's AI-assisted authoring generates coverage directly from each platform's actual build — the iOS coverage is authored against the iOS build, the Android coverage against the Android build, each executed by robots on real hardware for that platform. There is no shared script layer to quietly diverge, because nothing was shared to begin with.</p>

      <h3>Setup overhead: it's not on your plate</h3>
      <p>There is no SDK to install, no driver to version-bump, no device farm to configure, because Mobot owns and operates the device lab — 300+ real iOS and Android phones and tablets. A build goes in; robots run it. The remaining integration work — connecting results to Slack, Jira, or TestRail — is a one-time setup, not an ongoing tax.</p>

      <h3>The unwritten-coverage gap: capacity, not cleverness</h3>
      <p>This category isn't fixed by a smarter tool — it's fixed by having dedicated execution capacity that doesn't compete with your engineers' other work. AI-assisted authoring proposes new coverage as your build changes, so coverage grows with the app instead of trailing a backlog. And because Mobot runs as a service with its own fleet and its own QA analysts, the constraint that produces Category 4 in the first place — "we didn't have the hours" — doesn't apply the same way; capacity scales with the plan, not with how much is left over after keeping the existing suite alive.</p>

      <h2>A fifth category Appium can't fix at any maintenance budget</h2>
      <p>Every category above assumes the test could technically run — the only question was whether it broke. There's a fifth category that no selector strategy, healing or otherwise, changes: what a simulator or emulator can exercise at all. Bluetooth pairing, push notification delivery through a real carrier network, Face ID and Touch ID against a real secure enclave, camera and sensor input — none of it exists in a virtualized environment to test in the first place. That gap has nothing to do with how well-maintained the suite is. It's closed by testing on real hardware, or it isn't closed.</p>

      <h2>A real example</h2>
      <p>Homebase, the workforce management platform used by 150,000+ small businesses, had tried traditional UI automation multiple times but kept falling back to manual testing — the suite was too expensive to keep alive against a platform with that much surface area. Regression only completed once a quarter on Android, less often on iOS, against a release cycle shipping every two weeks. After moving to Mobot, the team automated 100+ end-to-end test cases per platform in under four months and brought full-coverage regression time down from 5–10 days to same-day results.</p>
      <p><a href="/customers/homebase-mobile-qa-automation-with-mobot">Read the full Homebase case study →</a></p>

      <h2>Calculate your own number</h2>
      <p>The categories above are the ones worth measuring before deciding whether the fix is process discipline, a tooling change, or a different testing model entirely. Track selector-repair hours for one sprint, separated explicitly from time spent on new coverage — the two get conflated constantly, and conflating them is the single biggest reason teams underestimate their own maintenance cost. Then price the coverage gap: if there's a backlog of test cases your team knows should exist but doesn't have time to automate, that gap has a cost even though it never shows up as a red build.</p>
      <p>Mobot's <a href="/compare#calculator">script cost calculator</a> models this with your own inputs — team size, hourly cost, and suite size — against what a managed, real-device alternative looks like for your numbers specifically, not an industry average.</p>

      <h2>FAQ</h2>
      <h3>Is Appium's maintenance cost really that high?</h3>
      <p>It depends entirely on suite size and how fast the UI changes. A small, stable suite maintained by dedicated automation engineers can stay cheap for years. A large suite on a fast-shipping app, maintained by QA generalists between other responsibilities, is where the maintenance line grows fastest — and it's worth measuring your own number rather than assuming either extreme.</p>
      <h3>Does self-healing solve the problem?</h3>
      <p>It meaningfully helps with selector repair specifically, because that's the exact mechanism it targets. It does not touch cross-platform duplication, setup overhead, or the coverage that never gets written, because those come from different causes and need different fixes.</p>
      <h3>When does it make sense to stay on Appium?</h3>
      <p>When the suite is small, the UI is stable release to release, dedicated automation headcount already exists regardless of tooling choice, or the team needs a level of custom integration control that a managed platform doesn't offer. The cost curve genuinely stays flat under those conditions.</p>
      <h3>What's the single biggest hidden cost teams miss?</h3>
      <p>The coverage that never gets written. It never shows up in a maintenance-hours audit, because it's an absence rather than a logged event — but it's a real cost, and it's usually the one worth pricing first.</p>
    `,
    cta: { label: 'See the Mobot vs. Appium comparison', href: '/compare/mobot-vs-appium' },
  },
  {
    slug: 'flaky-tests-are-a-device-problem',
    title: 'Flaky Tests Are a Device Problem, Not a Script Problem',
    kind: 'article',
    date: '2026-09-04',
    readTime: '7 min',
    tags: ['Test automation', 'Flaky tests', 'Real devices'],
    summary:
      'Most teams treat flakiness as a scripting problem and respond with retries, waits, and self-healing selectors. That treats the symptom. The underlying cause for most mobile flakiness is that the test never touched a real device in the first place.',
    paragraphs: [
      'Every team with a mobile test suite eventually has the same conversation: a test that passed yesterday failed today, nothing in the app changed, and someone has to decide whether to re-run it, quarantine it, or dig in. Multiply that by a few hundred tests a week and flakiness stops being an annoyance and becomes a line item — engineering hours spent re-running, investigating, and eventually ignoring results that should have been trustworthy.',
      'The standard response is to treat flakiness as a scripting problem. Add retries. Lengthen waits. Adopt a framework with self-healing selectors that finds the button even after the UI shifts. These fixes help at the margin, and they are also treating the symptom. A script can retry a step, but it cannot retry its way into a fact it never established: did this happen on the hardware a user actually holds?',
      'Most mobile test suites run against an emulator, a simulator, or a software-driven cloud device — a virtualized rendering of an OS, not the OS itself. That layer of virtualization is where a large share of flakiness actually originates. A simulator schedules CPU and network differently than a physical phone under thermal load. It has no real radio, so Bluetooth and cellular tests are stubbed or skipped, and the parts that are stubbed can produce results that vary run to run for reasons that have nothing to do with your app. A cloud device farm is closer to real hardware, but it is shared, rate-limited, and running someone else\'s prior test\'s residue half the time — a different, noisier source of nondeterminism.',
      'None of this means engineers are bad at writing tests. It means the environment underneath the test was never as stable as the test assumed. A selector retry cannot fix a race condition introduced by an emulator scheduling a frame differently than the phone will. A self-healing locator cannot fix a Bluetooth pairing that the simulator never attempted for real. The fix has to happen a layer down, in what the test actually runs on.',
      'This is the case for testing on physical hardware, mechanically operated, the way Mobot does it. A robot taps a real screen on a real phone running the real OS, with a real radio and a real thermal envelope. There is no selector to retry, because computer vision reads the screen the way a person does, and there is no virtualization layer introducing behavior your users will never see. Some flakiness remains — networks are still variable, apps still have real intermittent bugs — but the largest category of flaky signal, the kind caused by the environment rather than the app, goes away because the environment is no longer synthetic.',
      'The second half of the fix is validation. Even on real hardware, an occasional failure needs a human judgment call: is this a real defect, or a one-off environmental blip? That is why every failure Mobot surfaces is reproduced in more than one environment and reviewed by a QA analyst before it reaches your team. A test that fails once and never again is recorded, not reported, until it either reproduces or resolves. Your Slack channel only hears about the failures worth acting on.',
      'The result is a suite where a red result means something. Teams stop budgeting "flaky test triage" time into every sprint, because the category of failure that used to eat that time — the one caused by the simulator, not the app — has nowhere to come from anymore. That is the actual fix for flakiness: not a smarter retry, but a real phone and a human in the loop.',
    ],
    cta: { label: 'See how defect validation works', href: '/platform/defect-validation' },
  },
  {
    slug: 'ai-ships-code-who-tests-the-phone',
    title: 'AI Ships the Code Faster. Something Has to Test the Phone.',
    kind: 'article',
    date: '2026-09-04',
    readTime: '6 min',
    tags: ['AI', 'Release velocity', 'Test automation'],
    summary:
      'AI-assisted development has shortened the time from idea to pull request. It has not shortened the time a scripted UI test suite needs to keep up. The gap between how fast code changes and how fast tests can be maintained is now the bottleneck.',
    paragraphs: [
      'The pace of mobile releases has changed faster than most test strategies have. AI-assisted development tools let a small team ship UI changes, refactors, and new flows at a rate that would have needed a much larger team two years ago. The generated code compiles, the feature works, and it ships. What has not kept pace is the thing that is supposed to catch what breaks: the test suite.',
      'A scripted UI test — Appium, Maestro, XCUITest, it does not matter which — is a description of the interface at the moment it was written. Every selector is a bet that a button will still be found the same way tomorrow. Every wait is a bet about timing. When a human team ships changes at a human pace, those bets mostly pay off, and maintenance is a background cost. When an AI-assisted team ships UI changes daily, sometimes hourly, those bets start losing constantly, and someone has to be in the loop rewriting scripts just to keep the suite from lying.',
      'This creates a specific and increasingly common failure mode: velocity on the code side outpaces velocity on the test side, so teams either let coverage lapse to keep shipping, or they slow shipping to keep coverage current. Neither is a real choice. The honest fix is to stop describing the interface in a way that has to be rewritten every time the interface changes.',
      'Two things make that possible. The first is generating test coverage from the build itself rather than hand-authoring it, so new coverage keeps pace with new code instead of trailing it by a sprint or a quarter. The second, and the more durable one, is executing tests by reading the screen the way a person does — with computer vision — instead of by name, ID, or XPath. A renamed button, a redesigned screen, a shuffled layout: none of it breaks a test that never depended on the selector in the first place. Mobot pairs both — AI-assisted authoring proposes coverage from your build, and computer vision-driven robots on real devices execute it — so the maintenance burden that used to scale with release velocity stops scaling with it at all.',
      'There is a second-order effect worth naming. As AI writes more of the application code, the population of bugs it introduces skews toward integration and interaction failures — the kind that only show up when a real user does something on a real device, not the kind a unit test or a code review catches. That is exactly the category scripted UI automation was already weakest on, and it is exactly the category real-device testing with a human-verified result is strongest on. The faster AI ships code, the more that category matters, not less.',
      'None of this is an argument against AI-assisted development — it is a fast, real gain, and it is not going away. It is an argument that the testing layer underneath it needs to be built for that speed rather than inherited from an era of slower releases. If your release cadence has quietly doubled or tripled over the past year, it is worth asking whether your test maintenance line grew with it, or whether it is being paid for in coverage you no longer actually have.',
    ],
    cta: { label: 'See the platform', href: '/platform' },
  },
  {
    slug: 'six-signal-to-noise-metrics-for-mobile-qa',
    title: 'Six Signal-to-Noise Metrics for a Mobile Test Suite',
    kind: 'guide',
    date: '2026-09-04',
    readTime: '8 min',
    tags: ['QA metrics', 'Test debt', 'Defect validation'],
    summary:
      'Pass rate and test count tell you how much a suite ran, not whether anyone can trust what it found. Six metrics that measure signal-to-noise instead, with a rough benchmark for each and how to start tracking them without new tooling.',
    paragraphs: [
      'Most mobile QA dashboards report volume: tests run, pass rate, coverage percentage. None of those numbers tell you whether the suite is doing its job, which is separating real defects from everything else that can turn a build red. A team can run ten thousand tests a week at a 98% pass rate and still be shipping bugs, because pass rate says nothing about what happened to the 2% — whether it was triaged in five minutes or five days, whether it was a real defect or a stale selector, whether anyone believed the result at all.',
      'Signal-to-noise metrics measure the thing pass rate misses: how much of what the suite reports is worth an engineer\'s attention. Here are six worth tracking, in roughly the order they are easiest to start measuring.',
      'Retriage rate. Of the failures a suite produced this week, what share were closed as "not a real defect" — a stale selector, a timing issue, an environment blip, a change nobody updated the baseline for? Track it as a percentage of total failures. A suite in the 60–80% range is spending most of its failure budget on noise; a well-validated suite should be well under 20%, because most of that noise was filtered before it ever reached an engineer.',
      'Escape rate. Of the defects that shipped to production and were reported by users or support, how many should the test suite have caught, based on the coverage it claims to have? This is the metric that tells you whether high coverage numbers are real. A suite can report 90% coverage and still have a high escape rate if that coverage skips the categories — Bluetooth, push delivery, biometrics, background behavior — that emulators cannot exercise.',
      'Time to verified defect. From the moment a test fails to the moment an engineer has a confirmed, reproducible defect with evidence attached, how long does it take? For most scripted suites this includes human triage time and is measured in hours to days. For a validated pipeline, where reproduction and analyst review happen before the failure ever reaches Slack or Jira, it should be measured in the time the run itself takes, because validation happens in parallel with execution.',
      'Maintenance hours per release. How many engineering hours go into fixing broken tests — not fixing app bugs, fixing the tests themselves — per release cycle? This is the number that grows fastest as release velocity increases, because a faster-changing UI breaks more selectors more often. It is also the number most teams do not track explicitly, which is why it is worth starting even as a rough estimate; most teams are surprised by it once they do.',
      'Real-device coverage. What share of your test suite actually runs on physical hardware rather than an emulator, simulator, or virtualized cloud device? This is a coverage metric, but a more honest one than raw test count, because it tells you how much of your suite can see the categories — radios, sensors, biometrics, real network conditions — that only exist on real phones.',
      'Trust score. This one is qualitative but worth asking your own engineers directly: on a 1–5 scale, how much do you trust a red build from this suite to mean something real? Ask quarterly. A declining trend is the earliest warning sign of the other five metrics getting worse, because trust erodes before anyone formalizes the retriage rate that caused it.',
      'None of these require new tooling to start. Retriage rate and maintenance hours can be estimated from a week of Slack threads and standup notes. Escape rate can be reconstructed from support tickets against test coverage maps. The point is not precision on day one — it is replacing "how many tests did we run" with "how much of what we reported was true," which is the question that actually predicts whether your test suite is an asset or a chore.',
    ],
    cta: { label: 'See a verified defect report', href: '/resources/defect-reports/sample' },
  },
  {
    slug: 'how-to-test-bluetooth-on-android',
    title: 'How to Test Bluetooth on Android',
    kind: 'article',
    date: '2026-09-04',
    readTime: '10 min',
    tags: ['How-to'],
    summary:
      'A practical guide to testing Bluetooth Classic, BLE, and Bluetooth 5 pairing and data exchange on Android: what emulators cannot do, how to build a real-device test rig, and the failure modes worth writing test cases for.',
    paragraphs: [
      'Introduction',
      'Android apps that talk to wearables, headphones, POS hardware, medical devices, or smart-home peripherals depend on a Bluetooth stack that has no software model. The Android Emulator does not include a virtual Bluetooth radio, so any test written against it either skips Bluetooth entirely or mocks the connection — which means the highest-risk part of the integration, the part where a real radio finds and holds a connection to a real peripheral, is untested until a real user tries it.',
      'This guide covers what to test, how to set up a real-device rig, and the failure modes that account for most Bluetooth defects in production Android apps.',
      'What to test',
      'Bluetooth testing on Android falls into three protocol categories, and an app that only tests one is leaving coverage gaps: Bluetooth Classic (used for audio streaming and older peripherals via SPP or A2DP), Bluetooth Low Energy or BLE (used by most modern wearables and sensors for low-power data exchange), and Bluetooth 5 features like extended advertising and higher throughput, which some newer peripherals rely on and older ones do not support.',
      'For each protocol, test discovery (does the app find the peripheral within a reasonable time, and does it handle multiple peripherals in range), pairing (does the OS pairing prompt appear and resolve correctly, including on Android versions that require runtime Bluetooth permissions), data exchange (does data arrive in order and without loss under normal and marginal signal conditions), and disconnection handling (what happens when the peripheral goes out of range, loses power, or the phone\'s Bluetooth is toggled off mid-session — does the app detect the drop and attempt to reconnect, or does it hang silently).',
      'Setting up a real-device test rig',
      'A minimal rig needs at least one Android phone on a supported OS version, the peripheral or peripherals your app pairs with, and a way to physically vary distance and interference during a test — a few paired peripherals moved progressively out of range covers most of what matters. For apps supporting a wide device matrix, expand the rig to cover the Android versions and OEM Bluetooth stack variants (Samsung, Pixel, and other manufacturers implement Bluetooth slightly differently) that make up a meaningful share of your install base.',
      'Because Android fragments Bluetooth permission handling across OS versions — runtime location permission was historically required for BLE scanning on many Android versions, and that requirement has shifted release to release — test the permission flow itself as a first-class case, not an assumption. A build that works on a developer\'s test phone can still fail permission checks on a different OS version in the field.',
      'Failure modes worth writing test cases for',
      'The defects that recur most often in Bluetooth-connected Android apps: pairing that hangs or times out on a specific OS version or after an OEM firmware update; sync that silently stops when the app is backgrounded, because Android\'s background execution limits killed the connection without the app noticing; reconnect logic that never fires when a peripheral comes back into range after being lost, leaving the user to manually re-pair; and data arriving out of order or dropped under real interference from other 2.4GHz devices, which a clean lab environment will not surface.',
      'Every one of these requires a real radio, a real peripheral, and — for the interference and out-of-range cases — physical movement that no emulator or cloud device farm can reproduce. That is why Bluetooth remains one of the categories most exposed to production incidents even on teams with otherwise mature test automation: the tooling most teams already have was never built to test it.',
      'How Mobot approaches this',
      'Mobot pairs real Android phones with real peripherals on a physical bench, using robots to vary distance and trigger the interruption and reconnection scenarios above, with QA analysts verifying the connection, the data exchange, and the failure handling before anything is reported as a defect. If your app talks to hardware, this is the category where real-device testing has the least substitute.',
    ],
    cta: { label: 'See the Bluetooth & IoT solution page', href: '/solutions/bluetooth-connected-devices' },
  },
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
