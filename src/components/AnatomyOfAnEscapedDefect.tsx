interface CalloutData {
  title: string;
  body: string;
  sim: string;
}

const callouts: { camera: CalloutData; radios: CalloutData; enclave: CalloutData; push: CalloutData; network: CalloutData; glass: CalloutData } = {
  camera: {
    title: 'Camera',
    body: 'Focus, capture, barcode + check-deposit.',
    sim: 'Sim: injected mock frames. No lens, no bug found.',
  },
  radios: {
    title: 'Radios — BT / NFC',
    body: 'Pairing, wearables, tap-to-pay, IoT.',
    sim: 'Sim: no radio exists. Entire class untestable.',
  },
  enclave: {
    title: 'Secure Enclave',
    body: 'Face ID, Touch ID, payment auth.',
    sim: 'Sim: biometric prompt auto-approved. Fiction.',
  },
  push: {
    title: 'Push Delivery Path',
    body: 'APNs/FCM → carrier → device → tap → deep link.',
    sim: 'Sim: delivery stubbed. Arrival never proven.',
  },
  network: {
    title: 'Network Stack',
    body: 'Carrier handoffs, wifi↔LTE, dead zones.',
    sim: 'Sim: perfect host networking. Never drops.',
  },
  glass: {
    title: 'Glass + Digitizer',
    body: 'Real touch registration, gestures, haptics.',
    sim: 'Sim: synthetic events bypass the screen entirely.',
  },
};

function Callout({ data, align }: { data: CalloutData; align: 'left' | 'right' }) {
  return (
    <div
      className={
        'rounded-xl border border-black/10 bg-black/[0.02] p-4 sm:p-5 ' +
        (align === 'right' ? 'text-left md:text-right' : 'text-left')
      }
    >
      <h3 className="text-sm font-bold text-[#2f87c8] mb-1">{data.title}</h3>
      <p className="text-black/70 text-xs sm:text-sm leading-relaxed">{data.body}</p>
      <p className="text-black/40 text-xs leading-relaxed mt-1">{data.sim}</p>
    </div>
  );
}

function PhoneIllustration() {
  return (
    <svg
      viewBox="0 0 200 400"
      className="hidden md:block row-span-3 self-stretch w-32 mx-auto h-full text-[#2f87c8]"
      aria-hidden="true"
    >
      {/* frame */}
      <rect x="4" y="4" width="192" height="392" rx="34" fill="rgba(10,10,10,0.02)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
      {/* screen inset */}
      <rect x="13" y="13" width="174" height="374" rx="26" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
      {/* side buttons */}
      <rect x="-1" y="108" width="5" height="26" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="-1" y="146" width="5" height="26" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="196" y="150" width="5" height="40" rx="2" fill="currentColor" opacity="0.3" />

      {/* punch-hole camera */}
      <circle cx="100" cy="34" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="34" r="2" fill="currentColor" />

      {/* radios - top right */}
      <g transform="translate(140,22)">
        <circle cx="0" cy="8" r="2" fill="currentColor" />
        <path d="M6 3a7 7 0 0 1 0 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M11 -2a13.5 13.5 0 0 1 0 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      </g>

      {/* secure enclave - center */}
      <g transform="translate(84,184)">
        <rect x="0" y="0" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="10" y="10" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </g>

      {/* network bars - bottom left */}
      <g transform="translate(44,326)">
        <rect x="0" y="14" width="6" height="14" rx="1.5" fill="currentColor" opacity="0.5" />
        <rect x="10" y="7" width="6" height="21" rx="1.5" fill="currentColor" opacity="0.75" />
        <rect x="20" y="0" width="6" height="28" rx="1.5" fill="currentColor" />
      </g>

      {/* touch gesture - bottom right */}
      <g transform="translate(126,326)">
        <circle cx="14" cy="14" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M14 7v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M19 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );
}

function Connector() {
  return <div className="h-px bg-black/10" />;
}

export default function AnatomyOfAnEscapedDefect() {
  return (
    <section className="py-24 px-6" aria-label="Anatomy of an escaped defect">
      <div className="mx-auto max-w-[64rem]">
        <p className="eyebrow text-black/40 text-xs uppercase mb-4 text-center">The Anatomy</p>
        <h2 className="text-3xl font-bold mb-2 text-center">Anatomy of an Escaped Defect</h2>
        <p className="text-black/50 text-sm text-center mb-12 max-w-[32rem] mx-auto">
          Every callout is a hardware path no simulator can exercise.
        </p>

        {/* Desktop: connected diagram */}
        <div className="hidden md:grid grid-cols-[1fr_2.5rem_9rem_2.5rem_1fr] grid-rows-3 gap-y-6 items-center">
          <Callout data={callouts.camera} align="left" />
          <Connector />
          <PhoneIllustration />
          <Connector />
          <Callout data={callouts.radios} align="right" />

          <Callout data={callouts.enclave} align="left" />
          <Connector />
          <Connector />
          <Callout data={callouts.push} align="right" />

          <Callout data={callouts.network} align="left" />
          <Connector />
          <Connector />
          <Callout data={callouts.glass} align="right" />
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden grid gap-4">
          {Object.values(callouts).map((c) => (
            <Callout key={c.title} data={c} align="left" />
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-black/10 text-center">
          <p className="text-black/40 text-sm leading-relaxed mb-2">
            These aren&apos;t edge cases. They&apos;re your payment, login, and notification flows.
          </p>
          <p className="text-[#2f87c8] font-semibold">
            Mobot tests every path above on physical hardware.
          </p>
        </div>
      </div>
    </section>
  );
}
