import { Fragment } from 'react';

const hops = [
  { label: 'Your Server', detail: 'Push payload queued for delivery.', warn: false },
  {
    label: 'APNs / FCM',
    detail: 'Simulators stub delivery here — there\'s no real device token to deliver to.',
    warn: true,
  },
  { label: 'Physical Device', detail: 'Notification lands in the OS tray on real hardware.', warn: false },
  { label: 'Physical Tap', detail: 'A robot taps the real notification banner.', warn: false },
  { label: 'Verified Deep Link', detail: 'The robot confirms the exact in-app destination.', warn: false },
];

export default function PushDeepLinkPath() {
  return (
    <section className="py-16 px-6" aria-label="The push notification and deep link verification path">
      <div className="mx-auto max-w-[64rem]">
        <div
          className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12
                     shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)] overflow-x-auto"
        >
          <div className="flex items-start gap-2 md:gap-3 min-w-[760px] md:min-w-0">
            {hops.map((h, i) => (
              <Fragment key={h.label}>
                <div className="flex-1 flex flex-col items-center text-center px-1">
                  <span
                    className={
                      'w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold mb-3 shrink-0 ' +
                      (h.warn ? 'border-red-400/60 text-red-400' : 'border-[#3da6fc]/60 text-[#3da6fc]')
                    }
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-bold mb-2">{h.label}</h3>
                  <p className={'text-xs leading-relaxed ' + (h.warn ? 'text-red-400/80' : 'text-white/50')}>
                    {h.detail}
                  </p>
                </div>
                {i < hops.length - 1 && (
                  <div className="pt-3 text-white/20 shrink-0">&rarr;</div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
