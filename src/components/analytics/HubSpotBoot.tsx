import Script from 'next/script';

/**
 * Runs before HubSpot tracking:
 * - On non-mobot.io hosts, disable HubSpot’s own banner UI (first-party
 *   CookieConsent drives setHubSpotConsent instead).
 * - Prep _hsp / _hsq queues.
 */
export default function HubSpotBoot() {
  const code = `
(function () {
  window._hsp = window._hsp || [];
  window._hsq = window._hsq || [];
  var h = location.hostname;
  var prod = h === 'mobot.io' || h === 'www.mobot.io';
  if (!prod) {
    window.disableHubSpotCookieBanner = true;
  }
})();`;

  return (
    <Script id="hubspot-boot" strategy="beforeInteractive">
      {code}
    </Script>
  );
}
