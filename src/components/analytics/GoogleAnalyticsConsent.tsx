'use client';

import Script from 'next/script';
import { useEffect } from 'react';

/**
 * Parity with live remediated www.mobot.io (trap-and-trace fix):
 * Google Consent Mode v2 defaults to denied; GA4 (G-HF9WN9YYQV) loads only on
 * hard evidence of HubSpot opt-in — never before Accept.
 *
 * Evidence (same as live):
 *   1. __hs_opt_out=yes is ABSENT, AND
 *   2. hubspotutk cookie is PRESENT
 * Plus preview first-party Accept: localStorage mobot_cookie_consent=accepted
 * (setHubSpotConsent path may lag hutk write).
 */
const GA_ID = 'G-HF9WN9YYQV';
const STORAGE_KEY = 'mobot_cookie_consent';

export default function GoogleAnalyticsConsent() {
  useEffect(() => {
    const w = window as Window & {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
      _hsp?: unknown[];
    };

    w.dataLayer = w.dataLayer || [];
    function gtag(...args: unknown[]) {
      w.dataLayer!.push(args);
    }
    w.gtag = gtag;

    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });

    let gaLoaded = false;

    function loadGA4() {
      if (gaLoaded) return;
      gaLoaded = true;
      gtag('consent', 'update', { analytics_storage: 'granted' });
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s);
      gtag('js', new Date());
      gtag('config', GA_ID);
    }

    function consentEvidence() {
      try {
        if (localStorage.getItem(STORAGE_KEY) === 'rejected') return false;
        if (localStorage.getItem(STORAGE_KEY) === 'accepted') return true;
      } catch {
        /* ignore */
      }
      const c = document.cookie;
      if (/(^|;\s*)__hs_opt_out=yes(;|$)/.test(c)) return false;
      return /(^|;\s*)hubspotutk=/.test(c);
    }

    function maybeLoad() {
      if (!gaLoaded && consentEvidence()) loadGA4();
    }

    const _hsp = (w._hsp = w._hsp || []);
    _hsp.push([
      'addPrivacyConsentListener',
      function () {
        maybeLoad();
        let tries = 0;
        const t = window.setInterval(() => {
          tries++;
          maybeLoad();
          if (gaLoaded || tries >= 10) window.clearInterval(t);
        }, 500);
      },
    ]);

    maybeLoad();

    // Preview first-party banner writes localStorage then setHubSpotConsent —
    // poll briefly so GA can start after Accept without a full reload.
    let polls = 0;
    const poll = window.setInterval(() => {
      polls++;
      maybeLoad();
      if (gaLoaded || polls >= 60) window.clearInterval(poll);
    }, 1000);

    return () => window.clearInterval(poll);
  }, []);

  // Consent Mode default must exist before any Google tag; boot via client effect.
  // No gtag.js Script tag here — that would load before consent.
  return (
    <Script id="ga-consent-boot" strategy="beforeInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    `}</Script>
  );
}
