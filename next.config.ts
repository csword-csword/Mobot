import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Blog post artwork imported from the Webflow CMS export.
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "uploads-ssl.webflow.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/resources/case-studies", destination: "/customers", permanent: true },
      { source: "/why-mobot", destination: "/why-real-devices", permanent: true },
      { source: "/compare/mobot-vs-scripted-automation", destination: "/compare", permanent: false },
    ];
  },
};

export default nextConfig;
