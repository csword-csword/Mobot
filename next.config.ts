import type { NextConfig } from "next";

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
      { source: "/resources/case-studies", destination: "/customers", permanent: true },
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
    ];
  },
};

export default nextConfig;
