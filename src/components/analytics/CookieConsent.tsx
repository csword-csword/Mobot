'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'mobot_cookie_consent'; // 'accepted' | 'rejected'

type ConsentChoice = 'accepted' | 'rejected';

declare global {
  interface Window {
    _hsp?: unknown[];
    _hsq?: unknown[];
    disableHubSpotCookieBanner?: boolean;
    __mobotOpenCookieSettings?: () => void;
  }
}

function isMobotProductionHost(hostname: string) {
  return hostname === 'mobot.io' || hostname === 'www.mobot.io';
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
 * Consent UX:
 * - On www.mobot.io / mobot.io: HubSpot’s published banner is primary; we only
 *   expose Cookie Settings → showBanner (and a tiny fallback if HS never mounts).
 * - On preview (*.vercel.app) / localhost: HubSpot usually won’t show a banner
 *   until the hostname is allowlisted — we disable HS banner UI and show this
 *   first-party banner, which still drives HubSpot via setHubSpotConsent.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<'fallback' | 'hubspot-primary'>('hubspot-primary');

  const openSettings = useCallback(() => {
    const hostname = window.location.hostname;
    if (isMobotProductionHost(hostname) && mode === 'hubspot-primary') {
      const _hsp = (window._hsp = window._hsp || []);
      _hsp.push(['showBanner']);
      // If HubSpot doesn’t surface anything, show our panel after a beat.
      window.setTimeout(() => {
        const hsBanner = document.querySelector('#hs-banner-parent, #hs-eu-cookie-confirmation, .hs-cookie-notification-position-bottom');
        if (!hsBanner) setVisible(true);
      }, 800);
      return;
    }
    setVisible(true);
  }, [mode]);

  useEffect(() => {
    window.__mobotOpenCookieSettings = openSettings;
    return () => {
      delete window.__mobotOpenCookieSettings;
    };
  }, [openSettings]);

  useEffect(() => {
    const hostname = window.location.hostname;
    const production = isMobotProductionHost(hostname);

    if (production) {
      setMode('hubspot-primary');
      // HubSpot owns first paint; nothing to show unless Cookie Settings is used.
      return;
    }

    // Preview / non-production hosts
    setMode('fallback');
    window.disableHubSpotCookieBanner = true;

    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }

    if (stored === 'accepted' || stored === 'rejected') {
      pushHubSpotConsent(stored === 'accepted');
      setVisible(false);
      return;
    }

    // Default = rejected until opt-in (matches HubSpot require-opt-in policy)
    pushHubSpotConsent(false);
    setVisible(true);
  }, []);

  function choose(choice: ConsentChoice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore quota / private mode */
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

/** Footer / inline control — resurfaces HubSpot or first-party preferences. */
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
