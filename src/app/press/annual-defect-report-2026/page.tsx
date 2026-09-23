import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import CtaBand from '@/components/ui/CtaBand';

export const metadata = {
  title:
    'Mobot Annual Defect Report: 6,372 Real-Device Bugs Show Most Critical Mobile Failures Are Single-Platform',
  description:
    'Mobot released its Annual Defect Report analyzing 6,372 unique defects across a sampling of 83 customer apps — most critical failures appeared on only one platform tested.',
};

export default function Page() {
  return (
    <>
      <article className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
        <div className="mx-auto max-w-[48rem] px-6 py-16 lg:py-24">
          <Link
            href="/press"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#1d4ed8] mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Press room
          </Link>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-3">
            FOR IMMEDIATE RELEASE · September 23, 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540] leading-tight mb-6">
            Mobot Annual Defect Report: 6,372 Real-Device Bugs Show Most Critical Mobile Failures Are
            Single-Platform
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Cross-platform categories, single-platform occurrence — evidence from robot-powered testing on
            real iOS and Android devices.
          </p>
        </div>
      </article>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-[48rem] prose-mobot">
          <p>
            <strong>NEW YORK, Sept. 23, 2026</strong> — Mobot today released its Annual Defect Report,
            analyzing <strong>6,372 unique defects</strong> surfaced over twelve months of robot-powered
            testing on real iOS and Android devices across <strong>a sampling of 83 of our customers’
            apps</strong> in <strong>11 industries</strong>. The report — based on{' '}
            <strong>145,000+ automated test executions</strong> and <strong>5.8 million QA actions</strong>{' '}
            from July 1, 2025 through June 30, 2026 — finds that mobile quality risk is overwhelmingly
            cross-platform in category but single-platform in occurrence: the bugs that matter most often
            appear on only one of the platforms Mobot tested.
          </p>

          <p>
            Across the dataset, five categories — broken navigation, missing or blank content, login and
            authentication failures, payment issues, and crashes — accounted for{' '}
            <strong>57% of every defect</strong> Mobot surfaced. Four of those categories (navigation,
            missing content, login, payment) alone covered about <strong>half</strong> of all findings.
            Critically, <strong>83% of defects appeared on only one of the platforms we tested</strong>;
            cross-platform bugs never exceeded <strong>28%</strong> of any category. Native iOS and Android
            apps are often separate codebases, so a single-platform finding does not mean the same shared
            code failed everywhere — it means teams that thoroughly test one OS and spot-check the other
            systematically under-cover real-device risk.
          </p>

          <p>
            Of <strong>512 P0</strong> defects in the sampling, crashes and freezes were{' '}
            <strong>46%</strong>, login/auth <strong>18%</strong>, signup/onboarding <strong>9%</strong>,
            and payment/billing <strong>5%</strong>. About a quarter of P0s were “front-door” failures —
            crash on launch, login that rejects valid credentials, or onboarding that never completes —
            often found in the first thirty seconds of a real-device run.{' '}
            <strong>85% of P0s appeared on only one of the platforms we tested</strong> (
            <strong>48% iOS-only, 37% Android-only, 15% on both</strong>). When Mobot catches a P0 on iOS, a
            matching finding shows up on Android only about <strong>1 in 4</strong> times in paired
            platform runs — with the caveat that native apps are often separate codebases.
          </p>

          <p>
            Every industry vertical showed at least one meaningfully over-indexed category. Sharpest
            uplifts included Social/Dating notifications (<strong>3.8×</strong> baseline), Travel/Outdoor
            location (<strong>3.7×</strong>), Utilities camera/photo (<strong>3.6×</strong>), and
            E-commerce location (<strong>3.1×</strong>). In <strong>fintech</strong> (13 customers,
            industry-level aggregation only), <strong>1 in every 5</strong> defects was a{' '}
            <strong>payment or billing</strong> issue — <strong>239 confirmed payment defects</strong>,{' '}
            <strong>2.5×</strong> the overall rate. These sit on the critical path of checkout and
            remittance flows and are among the most consequential issues Mobot surfaces; the report does
            not attribute individual customer outcomes.
          </p>

          <p>
            Most common categories sat near the testing baseline (~55% of runs on iOS). Observed
            exceptions: notification defects skewed iOS by <strong>13 points</strong> (iOS-only
            outnumbering Android-only by more than 2:1) — reported as observed; Mobot is not asserting a
            single OS permission-model cause. Camera/photo upload skewed Android by{' '}
            <strong>10 points</strong>; cart/checkout by <strong>9 points</strong>. Separately, Android
            Play rating and vitals remain a useful <strong>secondary</strong> consumer-app signal — one
            proof point alongside iOS skews, not the thesis of the report.
          </p>

          <p>
            Bugs-per-test-run dropped roughly <strong>40%</strong> in months with{' '}
            <strong>lower ship volume</strong>, while P0 share spiked in some of those months (
            <strong>10%+</strong>), reflecting real release cadence rather than synthetic load. Mobot’s
            platform runs customer-defined test plans on real iPhones and Android devices driven by
            robotic arms. The full Annual Defect Report is available (gated) at{' '}
            <a href="/resources/annual-defect-report">
              https://www.mobot.io/resources/annual-defect-report
            </a>
            . Related analysis:{' '}
            <a href="/resources/blog/mobot-annual-defect-report-2026">
              blog post
            </a>
            . Demo requests:{' '}
            <a href="/schedule-demo">https://www.mobot.io/schedule-demo</a>.
          </p>

          <blockquote>
            <p>
              “Emulators remain useful in the development loop. What they cannot replace is proving the
              release on the same glass, permissions, and networks your customers use. This year’s data
              makes the cost of skipping that step concrete,” said <strong>Charles Sword, CEO of Mobot</strong>.
            </p>
          </blockquote>

          <h2>About Mobot</h2>
          <p>
            Mobot (mobot.io / teammobot.com) provides AI-enabled, robot-powered QA on real iOS and Android
            devices. Mechanical robots execute customer-defined tests, scripts, cases, suites, and queues
            on physical hardware so teams can catch defects that virtual environments miss. Headquartered
            in New York and backed by investors including Cota Capital, Heavybit, Uncorrelated Ventures,
            and Y Combinator.
          </p>

          <p className="text-sm text-slate-500">
            <strong>Media contact:</strong> Charles Sword / Eden Full Goh
            <br />
            <a href="mailto:charles@teammobot.com">charles@teammobot.com</a> /{' '}
            <a href="mailto:eden@teammobot.com">eden@teammobot.com</a>
            <br />
            <a href="https://www.mobot.io">https://www.mobot.io</a>
          </p>
        </div>
      </section>

      <CtaBand
        title="Get the full Annual Defect Report"
        body="Download the gated report, or request a demo to see robots catch single-platform defects on real devices."
        primaryLabel="Get the report"
        primaryHref="/resources/annual-defect-report"
        secondaryLabel="Request a demo"
        secondaryHref="/schedule-demo"
      />
    </>
  );
}
