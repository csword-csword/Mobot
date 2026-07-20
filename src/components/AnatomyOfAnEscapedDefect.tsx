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
        'rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 ' +
        (align === 'right' ? 'text-left md:text-right' : 'text-left')
      }
    >
      <h3 className="text-sm font-bold text-[#3da6fc] mb-1">{data.title}</h3>
      <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{data.body}</p>
      <p className="text-white/40 text-xs leading-relaxed mt-1">{data.sim}</p>
    </div>
  );
}

function CameraIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" className="text-[#3da6fc]">
      <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="3" fill="currentColor" />
    </svg>
  );
}

function RadioIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" className="text-[#3da6fc]">
      <circle cx="9" cy="15" r="2" fill="currentColor" />
      <path d="M14 10a6.5 6.5 0 0 1 0 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 6a12 12 0 0 1 0 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function SecureIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" className="text-[#3da6fc]">
      <rect x="4" y="4" width="22" height="22" rx="6" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="11" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function NetworkBarsIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" className="text-[#3da6fc]">
      <rect x="5" y="16" width="3" height="7" rx="1" fill="currentColor" opacity="0.5" />
      <rect x="12" y="11" width="3" height="12" rx="1" fill="currentColor" opacity="0.75" />
      <rect x="19" y="6" width="3" height="17" rx="1" fill="currentColor" />
    </svg>
  );
}

function FingerprintIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none" className="text-[#3da6fc]">
      <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 9.5v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.5 12v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M17.5 12v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function PhoneIllustration() {
  return (
    <div
      className="hidden md:flex flex-col justify-between row-span-3 self-stretch w-32 mx-auto
                 rounded-[2rem] border-2 border-[#3da6fc]/25 bg-white/[0.03] py-8 px-5"
    >
      <div className="flex items-center justify-between">
        <CameraIcon />
        <RadioIcon />
      </div>
      <div className="flex items-center justify-center">
        <SecureIcon />
      </div>
      <div className="flex items-center justify-between">
        <NetworkBarsIcon />
        <FingerprintIcon />
      </div>
    </div>
  );
}

function Connector() {
  return <div className="h-px bg-white/15" />;
}

export default function AnatomyOfAnEscapedDefect() {
  return (
    <section className="py-24 px-6" aria-label="Anatomy of an escaped defect">
      <div className="mx-auto max-w-[64rem]">
        <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4 text-center">The Anatomy</p>
        <h2 className="text-3xl font-bold mb-2 text-center">Anatomy of an Escaped Defect</h2>
        <p className="text-white/50 text-sm text-center mb-12 max-w-[32rem] mx-auto">
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

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm leading-relaxed mb-2">
            These aren&apos;t edge cases. They&apos;re your payment, login, and notification flows.
          </p>
          <p className="text-[#3da6fc] font-semibold">
            Mobot tests every path above on physical hardware.
          </p>
        </div>
      </div>
    </section>
  );
}
