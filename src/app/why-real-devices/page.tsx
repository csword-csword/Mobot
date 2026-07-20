import Link from 'next/link';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata = { title: 'Why Real Devices' };

const audiences = [
  {
    who: 'VP Eng / CTO',
    pain: 'Escaped defects damaging brand; engineering time wasted on QA triage',
    message: 'High-signal QA that gives engineering time back.',
  },
  {
    who: 'QA / Release Leads',
    pain: 'Flaky tests, device matrix gaps, release-day fire drills',
    message: 'The defects you can\'t catch, verified so you never chase noise.',
  },
  {
    who: 'Product Leaders',
    pain: 'Feature launches breaking on real devices; 1-star reviews',
    message: 'Ship hardware-dependent features with confidence.',
  },
  {
    who: 'IoT / Connected-Device Companies',
    pain: 'No emulator exists for their scenario at all',
    message: 'The only way to test your app against the physical world.',
  },
];

export default function Page() {
  return (
    <>
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[56rem] px-6 py-32 lg:py-40">
          <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-5">Why Real Devices</p>
          <h1 className="font-bold tracking-tight text-4xl sm:text-5xl leading-[1.1] mb-6">
            Scripted Automation Is Noisy. Simulators Are Blind.
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-[42rem]">
            These are two different problems with two different causes &mdash; and a testing
            strategy that only solves one of them still ships broken software.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[56rem] grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8
                          shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]">
            <h2 className="text-xl font-bold mb-3">Noisy</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Scripted frameworks &mdash; wherever they run &mdash; produce flaky false failures from
              timing issues, brittle selectors, and environment drift. Teams burn engineering hours
              triaging failures that aren&apos;t bugs, and eventually stop trusting red builds.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8
                          shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]">
            <h2 className="text-xl font-bold mb-3">Blind</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Emulators and simulators structurally cannot exercise push notifications, Bluetooth,
              biometrics, camera hardware, carrier network transitions, or external devices &mdash;
              so they pass tests that fail in the real world.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[56rem] mt-12 rounded-2xl border border-white/10 bg-white/5 p-10
                        shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.08)]">
          <p className="text-lg leading-relaxed text-white/80">
            Mobot resolves both &mdash; and the resolution mechanisms are different. Real hardware
            closes the blindness gap. Human verification eliminates the noise. Together, that&apos;s
            what makes every defect Mobot reports real, and the ones nobody else can find visible.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 border-y border-white/10">
        <div className="mx-auto max-w-[56rem]">
          <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4">The Sharpened Claim</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Real devices alone aren&apos;t the differentiator anymore
          </h2>
          <p className="text-white/60 leading-relaxed max-w-[42rem] mb-4">
            Owning a rack of real phones isn&apos;t the same as testing the physical world. Software
            that injects touch events, mocked video, or stubbed sensor data onto a real device still
            fakes the physical layer underneath it.
          </p>
          <p className="text-white/60 leading-relaxed max-w-[42rem]">
            A mocked camera feed can&apos;t catch a focus bug. An injected touch event can&apos;t
            catch a digitizer issue. A stubbed Bluetooth response can&apos;t catch a real pairing
            failure. Mobot&apos;s robots physically actuate the device &mdash; real world in, real
            device under test. The inputs are as real as the hardware.
          </p>
        </div>
      </section>

      <ComparisonTable />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[56rem]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Built for Every Mobile Team</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 pr-4 text-xs uppercase tracking-wide text-white/40">Audience</th>
                  <th className="py-3 pr-4 text-xs uppercase tracking-wide text-white/40">Their Pain</th>
                  <th className="py-3 text-xs uppercase tracking-wide text-white/40">What Mobot Delivers</th>
                </tr>
              </thead>
              <tbody>
                {audiences.map((a) => (
                  <tr key={a.who} className="border-b border-white/5">
                    <td className="py-4 pr-4 font-bold align-top whitespace-nowrap">{a.who}</td>
                    <td className="py-4 pr-4 text-white/50 text-sm align-top">{a.pain}</td>
                    <td className="py-4 text-[#3da6fc] text-sm font-semibold align-top">{a.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <Link
          href="/resources/defect-reports"
          className="inline-flex items-center px-6 py-3 rounded-full bg-[#2f87c8] text-white hover:bg-[#3da6fc] transition-colors text-sm"
        >
          Get a Sample Report
        </Link>
      </section>
    </>
  );
}
