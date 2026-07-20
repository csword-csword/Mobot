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
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-[56rem] px-6 py-32 lg:py-40">
        <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-5">Solutions</p>
        <h1 className="font-bold tracking-tight text-4xl sm:text-5xl leading-[1.1] mb-6">
          Every Defect Class Emulators Can&apos;t See
        </h1>
        <p className="text-white/60 text-lg leading-relaxed max-w-[38rem] mb-12">
          Hardware-dependent scenarios are where user trust dies. Here&apos;s where Mobot catches
          what scripted automation and simulators structurally can&apos;t.
        </p>

        <div className="grid gap-4">
          {solutions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5
                         hover:border-white/20 hover:bg-white/[0.07] transition-all
                         shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]"
            >
              <span className="font-bold">{s.title}</span>
              <span className="text-[#3da6fc] font-semibold group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
