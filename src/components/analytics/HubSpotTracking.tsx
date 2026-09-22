import Script from 'next/script';
import { HUBSPOT_PORTAL_ID } from '@/lib/hubspot';

/**
 * HubSpot tracking (js.hs-scripts.com).
 * On mobot.io: HubSpot Data Privacy banner (require opt-in) handles consent.
 * On preview hosts: HubSpotBoot disables HS banner UI; CookieConsent drives
 * setHubSpotConsent / doNotTrack instead (same HubSpot consent API).
 */
export default function HubSpotTracking() {
  const portalId = HUBSPOT_PORTAL_ID;
  if (!portalId) return null;

  return (
    <Script
      id="hs-script-loader"
      src={`https://js.hs-scripts.com/${portalId}.js`}
      strategy="afterInteractive"
    />
  );
}
