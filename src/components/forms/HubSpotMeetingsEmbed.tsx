'use client';

import { useEffect } from 'react';

const SRC = 'https://meetings.hubspot.com/sam-friedman1/mobot-demo-rr?embed=true';
const SCRIPT = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';

export default function HubSpotMeetingsEmbed() {
  useEffect(() => {
    const existing = document.querySelector(`script[src="${SCRIPT}"]`);
    if (!existing) {
      const s = document.createElement('script');
      s.src = SCRIPT;
      s.type = 'text/javascript';
      s.async = true;
      document.body.appendChild(s);
    } else {
      // Re-run embed scan if script already present
      // MeetingsEmbed listens on load; force a hash bump by toggling data-src
      const el = document.querySelector('.meetings-iframe-container') as HTMLElement | null;
      if (el) {
        const src = el.getAttribute('data-src');
        el.setAttribute('data-src', '');
        el.setAttribute('data-src', src || SRC);
      }
    }
  }, []);

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-[0_8px_20px_rgba(15,23,42,0.10)] overflow-hidden">
      <div className="meetings-iframe-container min-h-[640px]" data-src={SRC} />
    </div>
  );
}
