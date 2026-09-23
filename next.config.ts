import type { NextConfig } from "next";
import generatedBlogPosts from "./src/data/posts.generated.json";

const blogSlugRedirects = (generatedBlogPosts as { slug?: string }[])
  .filter((p) => p?.slug)
  .map((p) => ({
    source: `/blog/${p.slug}`,
    destination: `/resources/blog/${p.slug}`,
    permanent: true as const,
  }));

/**
 * Legacy Webflow thank-you pages with no successor. Anything already given a
 * more specific destination earlier in the redirect list is omitted here.
 */
const legacyThankYouRedirects = [
  "thank-you-benchmark-report-sample",
  "thank-you-branch-report",
  "thank-you-bug-challenge",
  "thank-you-current-customer",
  "thank-you-meeting-booked",
  "thank-you-meeting-confirmation",
  "thank-you-meeting-request-received",
  "thank-you-new-customer",
  "thank-you-page",
  "thank-you-peak-season-checklist",
  "thank-you-test",
  "thank-you-youre-not-crazy-the-deep-links-have-issues",
].map((slug) => ({
  source: `/${slug}`,
  destination: "/schedule-demo",
  permanent: true as const,
}));

const nextConfig: NextConfig = {
  images: {
    // Blog post artwork imported from the Webflow CMS export.
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "uploads-ssl.webflow.com" },
    ],
  },
  // Ensure gated report HTML is available to the /api/report/file route at runtime.
  outputFileTracingIncludes: {
    "/api/report/file": ["./content/reports/**/*"],
  },
  async redirects() {
    return [
      // Live Webflow /blog → Next /resources/blog (full CMS import Sep 22 2026)
      { source: "/blog", destination: "/resources/blog", permanent: true },
      // ADR blog cut (Charles OK Sep 23 2026) — seed slug + Content preferred alias
      { source: "/blog/mobot-annual-defect-report-2026", destination: "/resources/blog/mobot-annual-defect-report-2026", permanent: true },
      { source: "/blog/annual-defect-report", destination: "/resources/blog/mobot-annual-defect-report-2026", permanent: true },
      { source: "/resources/blog/annual-defect-report", destination: "/resources/blog/mobot-annual-defect-report-2026", permanent: true },
      ...blogSlugRedirects,
      // Missing live slugs (not in export) → hub, not a soft 404
      { source: "/blog/:path*", destination: "/resources/blog", permanent: true },
      { source: "/resources/case-studies", destination: "/customers", permanent: true },
      // Live Webflow /case-studies → Next /customers (slugs carried over 1:1)
      { source: "/case-studies", destination: "/customers", permanent: true },
      { source: "/case-studies/:slug", destination: "/customers/:slug", permanent: true },
      // Remaining live top-level pages with no 1:1 successor
      { source: "/features", destination: "/platform", permanent: true },
      { source: "/competitor-comparison", destination: "/compare", permanent: true },
      { source: "/schedule-a-demo", destination: "/schedule-demo", permanent: true },
      { source: "/resources", destination: "/resources/blog", permanent: true },
      { source: "/events", destination: "/resources/webinars-events", permanent: true },
      // /press stays Press Room (ADR release Sep 23 2026) — no longer → /about
      { source: "/customers-new", destination: "/customers", permanent: true },
      { source: "/self-serve-upload", destination: "/schedule-demo", permanent: true },
      { source: "/create-a-new-test", destination: "/schedule-demo", permanent: true },
      { source: "/mobot-for-growth", destination: "/solutions/push-notifications-deep-linking", permanent: true },
      { source: "/push-notification-validation", destination: "/solutions/push-notifications-deep-linking", permanent: true },
      { source: "/test-a-deep-link-now", destination: "/solutions/push-notifications-deep-linking", permanent: true },
      { source: "/deep-link-sample-benchmark-report", destination: "/resources/blog/2023-state-of-mobile-deep-linking", permanent: true },
      { source: "/your-test-automation-creates-costly-test-debt", destination: "/resources/blog/your-test-automation-creates-costly-test-debt", permanent: true },
      { source: "/mobot-agreement-terms-of-service", destination: "/terms", permanent: true },
      { source: "/terms-of-service", destination: "/terms", permanent: true },
      { source: "/star-east-2024", destination: "/resources/webinars-events", permanent: true },
      { source: "/thank-you-starwest", destination: "/resources/webinars-events", permanent: true },
      // Legacy funnel pages — no successor, send to the demo funnel
      { source: "/first-free-test-thank-you", destination: "/schedule-demo", permanent: true },
      { source: "/google-ads-pre-meeting-demo-form", destination: "/schedule-demo", permanent: true },
      { source: "/payment-flow", destination: "/pricing", permanent: true },
      { source: "/why-mobot", destination: "/why-real-devices", permanent: true },
      { source: "/compare/mobot-vs-scripted-automation", destination: "/compare", permanent: false },
      // Cutover: drop legacy SKU LPs (Managed / Live / Insights) — Charles Sep 22 2026
      { source: "/mobot-managed", destination: "/platform", permanent: true },
      { source: "/mobot-live", destination: "/platform", permanent: true },
      { source: "/mobot-insights", destination: "/platform", permanent: true },
      // Related legacy Live funnel pages (no SKU LP to keep)
      { source: "/mobot-live-signup", destination: "/schedule-demo", permanent: true },
      { source: "/mobot-live-thank-you", destination: "/schedule-demo", permanent: true },
      { source: "/thank-you-mobot-live", destination: "/schedule-demo", permanent: true },
      // Cutover: drop legacy compare LPs — keep preview Appium/Maestro/QA Wolf only (Charles Sep 22 2026)
      { source: "/compare/mobot-vs-kobiton", destination: "/compare", permanent: true },
      { source: "/compare/mobot-vs-sauce-labs", destination: "/compare", permanent: true },
      { source: "/compare/mobot-vs-waldo", destination: "/compare", permanent: true },
      { source: "/compare/mobot-vs-rainforest-qa", destination: "/compare", permanent: true },
      { source: "/compare/mobot-vs-testilio", destination: "/compare", permanent: true },
      { source: "/compare/mobot-vs-testlio", destination: "/compare", permanent: true },
      // Cutover: resources shortlist migrate (Charles Sep 22 2026) — Annual Defect Report stays primary gated
      { source: "/resources/data-report-the-2025-mobile-pass-fail-feature-report", destination: "/resources/blog/2025-mobile-pass-fail-feature-report", permanent: true },
      { source: "/2023-state-of-mobile-deep-linking", destination: "/resources/blog/2023-state-of-mobile-deep-linking", permanent: true },
      { source: "/state-of-mobile-app-testing", destination: "/resources/blog/state-of-mobile-app-testing", permanent: true },
      // Archive / do not migrate other gated freebies
      { source: "/peak-season-checklist", destination: "/resources/blog", permanent: true },
      { source: "/request-a-free-mobile-campaign-monitoring-report", destination: "/resources/blog/2023-state-of-mobile-deep-linking", permanent: true },
      { source: "/thank-you-mobile-campaign-monitoring-report", destination: "/resources/blog", permanent: true },
      { source: "/youre-not-crazy-the-deep-links-are-broken", destination: "/resources/blog/how-to-fix-broken-deep-links-and-push-notifications", permanent: true },
      { source: "/blog-ctas-test/:path*", destination: "/resources/blog", permanent: true },
      { source: "/ctas-in-text/:path*", destination: "/resources/blog", permanent: true },
      // Cutover: DROP playground — redirect only (Charles Sep 22 2026)
      { source: "/playground", destination: "/platform", permanent: true },
      { source: "/playground/:path*", destination: "/platform", permanent: true },
      // Cutover leftovers (Charles Sep 22 2026): KEEP press; DROP persona/TCO/test-flows/device-library CMS + misc
      { source: "/for-engineers", destination: "/platform", permanent: true },
      { source: "/for-marketers", destination: "/solutions/push-notifications-deep-linking", permanent: true },
      { source: "/tco-calculator", destination: "/compare", permanent: true },
      { source: "/first-test-free", destination: "/schedule-demo", permanent: true },
      { source: "/request-a-test", destination: "/schedule-demo", permanent: true },
      { source: "/request-a-test-test-types", destination: "/schedule-demo", permanent: true },
      { source: "/device-library", destination: "/devices", permanent: true },
      { source: "/mobot-device-library-master", destination: "/devices", permanent: true },
      { source: "/mobot-device-library-master/:path*", destination: "/devices", permanent: true },
      { source: "/adoptarobot", destination: "/", permanent: true },
      { source: "/adoptarobot/:path*", destination: "/", permanent: true },
      { source: "/yc-startup-support", destination: "/", permanent: true },
      { source: "/mobot-referral-program", destination: "/", permanent: true },
      { source: "/outcomes", destination: "/customers", permanent: true },
      // Remaining legacy thank-you pages from the Webflow export. Listed
      // explicitly rather than by wildcard: a mid-segment repeat like
      // "/thank-you-:path*" is not a valid path-to-regexp pattern, and the
      // specific thank-you rules above must keep precedence regardless.
      ...legacyThankYouRedirects,
    ];
  },
};

export default nextConfig;
