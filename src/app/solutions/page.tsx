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
    <section className="bg-gradient-to-b from-[#f3f7fe] to-white border-b border-slate-200">
      <div className="mx-auto max-w-[56rem] px-6 py-20 lg:py-28">
        <p className="eyebrow text-sm mb-5">Solutions</p>
        <h1 className="font-bold tracking-tight text-[#0a2540] text-4xl sm:text-5xl leading-[1.1] mb-6">
          Every Defect Class Emulators Can&apos;t See
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-[38rem] mb-12">
          Hardware-dependent scenarios are where user trust dies. Here&apos;s where Mobot catches
          what scripted automation and simulators structurally can&apos;t.
        </p>

        <div className="grid gap-4">
          {solutions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-6 py-5 hover:border-slate-300 hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all"
            >
              <span className="font-bold text-[#0a2540]">{s.title}</span>
              <span className="text-[#1d4ed8] font-semibold group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
