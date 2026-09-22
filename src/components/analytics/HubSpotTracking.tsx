import Script from 'next/script';
import { HUBSPOT_PORTAL_ID } from '@/lib/hubspot';

/**
 * Loads HubSpot tracking (js.hs-scripts.com). With HubSpot Data Privacy
 * (cookies enabled, require opt-in, published for mobot.io), HubSpot shows its
 * own bottom consent banner — do not add a second site cookie banner.
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
