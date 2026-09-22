'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'mobot_cookie_consent'; // 'accepted' | 'rejected' — fallback path only

type ConsentChoice = 'accepted' | 'rejected';

declare global {
  interface Window {
    _hsp?: unknown[];
    _hsq?: unknown[];
    disableHubSpotCookieBanner?: boolean;
    __mobotOpenCookieSettings?: () => void;
  }
}

function hsBannerEl() {
  return document.querySelector(
    '#hs-banner-parent, #hs-eu-cookie-confirmation, .hs-cookie-notification-position-bottom, [id^="hs-banner"], #hs-web-interactives-top-anchor',
  );
}

function pushHubSpotConsent(accepted: boolean) {
  const _hsp = (window._hsp = window._hsp || []);
  const _hsq = (window._hsq = window._hsq || []);
  _hsp.push([
    'setHubSpotConsent',
    {
      analytics: accepted,
      advertisement: accepted,
      functionality: true,
    },
  ]);
  if (accepted) {
    _hsq.push(['doNotTrack', { track: true }]);
  } else {
    _hsp.push(['revokeCookieConsent']);
    _hsq.push(['doNotTrack']);
  }
}

/**
 * HubSpot-only consent (match live remediations).
 * First-party Accept/Reject appears ONLY if HubSpot’s banner never mounts
 * (e.g. hostname not allowlisted). Never show both at once.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  const openSettings = useCallback(() => {
    const _hsp = (window._hsp = window._hsp || []);
    _hsp.push(['showBanner']);
    window.setTimeout(() => {
      if (!hsBannerEl()) setVisible(true);
    }, 900);
  }, []);

  useEffect(() => {
    window.__mobotOpenCookieSettings = openSettings;
    return () => {
      delete window.__mobotOpenCookieSettings;
    };
  }, [openSettings]);

  useEffect(() => {
    // Never disable HubSpot’s banner — Demand allowlists preview hosts so HS can show.
    window.disableHubSpotCookieBanner = false;

    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }

    // If visitor already used our fallback panel, honor that without re-showing.
    if (stored === 'accepted' || stored === 'rejected') {
      pushHubSpotConsent(stored === 'accepted');
      setVisible(false);
      return;
    }

    let cancelled = false;
    let tries = 0;
    const maxTries = 16; // ~8s

    const tick = () => {
      if (cancelled) return;
      if (hsBannerEl()) {
        // HubSpot owns consent UI — do not show first-party.
        setVisible(false);
        return;
      }
      tries += 1;
      if (tries >= maxTries) {
        // HubSpot banner never appeared — fallback only.
        setVisible(true);
        return;
      }
      window.setTimeout(tick, 500);
    };

    // Start after a short delay so hs-scripts can inject the banner.
    window.setTimeout(tick, 400);

    return () => {
      cancelled = true;
    };
  }, []);

  function choose(choice: ConsentChoice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    pushHubSpotConsent(choice === 'accepted');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-0 inset-x-0 z-[100] p-4 sm:p-6 pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-[40rem] rounded-lg border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.15)] p-5 sm:p-6">
        <p className="text-sm font-bold text-[#0a2540] mb-2">Cookie preferences</p>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          We use HubSpot for analytics and marketing cookies. They stay off until you accept.
          The Annual Defect Report unlock cookie is separate and functional only.{' '}
          <Link href="/cookie-policy" className="text-[#1d4ed8] font-semibold">
            Cookie policy
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="px-4 py-2 rounded-md bg-[#1d4ed8] text-white text-sm font-semibold hover:bg-[#1e40af] transition-colors"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose('rejected')}
            className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            Reject non-essential
          </button>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      id="hs_show_banner_button"
      className={className}
      onClick={() => {
        if (typeof window !== 'undefined' && window.__mobotOpenCookieSettings) {
          window.__mobotOpenCookieSettings();
          return;
        }
        const _hsp = ((window as Window)._hsp = (window as Window)._hsp || []);
        _hsp.push(['showBanner']);
      }}
    >
      Cookie Settings
    </button>
  );
}
