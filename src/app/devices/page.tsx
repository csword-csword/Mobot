import { Smartphone, Tablet, Layers, RefreshCw } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CtaBand from '@/components/ui/CtaBand';
import DeviceGrid from '@/components/DeviceGrid';
import CapabilityGrid from '@/components/ui/CapabilityGrid';
import { deviceBrands } from '@/data/content';

export const metadata = {
  title: 'Device Fleet',
  description: '300+ real iOS and Android phones and tablets, current and legacy OS versions, physically driven by robots in Mobot’s New York lab.',
};

const facts = [
  { icon: Smartphone, value: '300+', label: 'Real devices', sub: 'Phones and tablets across every major manufacturer' },
  { icon: Layers, value: 'iOS + Android', label: 'Both platforms', sub: 'Cross-OS coverage in the same run, on the same robot' },
  { icon: RefreshCw, value: 'Current + legacy', label: 'OS versions', sub: 'Test the OS your users are actually on, not just the latest' },
  { icon: Tablet, value: 'Up to 3', label: 'Devices per robot', sub: 'Multi-device flows with a real sender and a real receiver' },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Device Fleet"
        title="300+ real devices. Zero emulators."
        intro="Every test runs on a physical iOS or Android device, driven by a robot, in Mobot's New York lab. Choose the devices and OS versions that match your users — and change them as your user base shifts."
        primary={{ label: 'Request a Device List', href: '/contact' }}
        secondary={{ label: 'Request a Demo', href: '/schedule-demo' }}
      />

      <section className="py-16 px-6">
        <div className="mx-auto max-w-[80rem]">
          <DeviceGrid />
        </div>
      </section>

      <section className="py-20 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem] grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.label} delay={i * 80}>
                <div className="h-full rounded-lg border border-slate-200 bg-white p-7">
                  <Icon className="w-5 h-5 text-[#1d4ed8] mb-4" />
                  <div className="text-3xl font-bold text-[#0a2540]">{f.value}</div>
                  <div className="font-bold text-[#0a2540] text-sm mt-1">{f.label}</div>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">{f.sub}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="Manufacturers"
            title="The phones your users actually carry"
            sub="Flagships and budget devices, the newest releases and the models that stubbornly stay in circulation. If it's in your analytics, it's probably in the fleet — and if it isn't, ask."
            center
            className="mb-12"
          />
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3">
              {deviceBrands.map((b) => (
                <span key={b} className="px-4 py-2 rounded-md border border-slate-200 bg-white text-sm font-semibold text-[#0a2540]">
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 section-alt border-y border-slate-200">
        <div className="mx-auto max-w-[80rem]">
          <SectionHeading
            eyebrow="What we test"
            title="Real hardware means real hardware paths"
            sub="Because a robot physically operates each device, everything on it is in play — the camera, radios, secure enclave, digitizer, and carrier network."
            center
            className="mb-12"
          />
          <CapabilityGrid compact />
        </div>
      </section>

      <CtaBand title="Need a specific device or OS?" body="Tell us what your users are on. We'll confirm coverage and show you a verified defect report on that exact configuration." primaryLabel="Contact Us" primaryHref="/contact" />
    </>
  );
}
