import Script from 'next/script';

/**
 * Prep HubSpot queues before tracking loads.
 * Do NOT set disableHubSpotCookieBanner — HubSpot’s published banner is primary
 * (matches live). First-party panel is fallback only if HS banner never mounts.
 */
export default function HubSpotBoot() {
  const code = `
(function () {
  window._hsp = window._hsp || [];
  window._hsq = window._hsq || [];
})();`;

  return (
    <Script id="hubspot-boot" strategy="beforeInteractive">
      {code}
    </Script>
  );
}
