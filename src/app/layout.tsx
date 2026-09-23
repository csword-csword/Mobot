import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HubSpotTracking from "@/components/analytics/HubSpotTracking";
import HubSpotBoot from "@/components/analytics/HubSpotBoot";
import CookieConsent from "@/components/analytics/CookieConsent";
import GoogleAnalyticsConsent from "@/components/analytics/GoogleAnalyticsConsent";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/site";

const description =
  "Scale your mobile coverage with AI-enabled service combining real mechanical robots, physical devices, and quality experts.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Mobot", template: "%s | Mobot" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Mobot",
    title: "Mobot — Real Robots. Real Devices. Real Defects.",
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobot — Real Robots. Real Devices. Real Defects.",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#0f172a]">
        <HubSpotBoot />
        <GoogleAnalyticsConsent />
        <Navbar />
        <main className="flex-1 pt-[116px]">{children}</main>
        <Footer />
        <HubSpotTracking />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
