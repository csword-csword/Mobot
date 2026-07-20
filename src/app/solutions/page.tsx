import Link from 'next/link';

export const metadata = { title: 'Solutions' };

const solutions = [
  { title: 'Push Notifications & Deep Linking', href: '/solutions/push-notifications-deep-linking' },
  { title: 'Bluetooth & Connected Devices (IoT)', href: '/solutions/bluetooth-connected-devices' },
  { title: 'Biometrics & Payments', href: '/solutions/biometrics-payments' },
  { title: 'Camera, Sensors & Location', href: '/solutions/camera-sensors-location' },
  { title: 'Release Regression Testing', href: '/solutions/release-regression-testing' },
];

export default function Page() {
  return (
    <section className="border-b border-black/10">
      <div className="mx-auto max-w-[56rem] px-6 py-24 lg:py-32">
        <p className="eyebrow text-black/40 text-xs uppercase mb-5">Solutions</p>
        <h1 className="font-bold tracking-tight text-4xl sm:text-5xl leading-[1.1] mb-6">
          Every Defect Class Emulators Can&apos;t See
        </h1>
        <p className="text-black/60 text-lg leading-relaxed max-w-[38rem] mb-12">
          Hardware-dependent scenarios are where user trust dies. Here&apos;s where Mobot catches
          what scripted automation and simulators structurally can&apos;t.
        </p>

        <div className="grid gap-4">
          {solutions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-center justify-between rounded-2xl border border-black/10 bg-black/[0.02] px-6 py-5 hover:border-black/20 hover:bg-black/[0.04] transition-all"
            >
              <span className="font-bold">{s.title}</span>
              <span className="text-blue-ink font-semibold group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
