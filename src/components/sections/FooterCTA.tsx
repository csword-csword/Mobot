import Link from 'next/link';

export default function FooterCTA() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-[80rem]">
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Main CTA */}
          <div className="lg:col-span-1 rounded-lg bg-[#0a2540] p-10 flex flex-col gap-6">
            <h3 className="text-2xl font-bold leading-snug text-white">
              Ready to Transform Your Workflow with AI-Powered Robotics?
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Mobot automates the unautomatable, connecting digital tools with real-world tasks to
              deliver unmatched precision and efficiency.
            </p>
            <Link
              href="/schedule-demo"
              className="mt-auto inline-flex w-fit px-6 py-3 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm"
            >
              Request a Demo
            </Link>
          </div>

          {/* Secondary panels */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            <div className="rounded-lg border border-slate-200 bg-white p-8 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-[#0a2540]">Explore Use Cases</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Discover how Mobot&apos;s AI-powered robots automate the unautomatable for every
                team—Engineering, Marketing, QA, Product, and beyond.
              </p>
              <Link
                href="/#use-cases"
                className="mt-auto text-[#1d4ed8] text-sm font-semibold hover:text-[#1e40af] transition-colors"
              >
                Explore Use Cases →
              </Link>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-8 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-[#0a2540]">Explore Case Studies</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Learn how teams have revolutionized their workflows with Mobot, reducing bugs,
                accelerating releases, and saving costs.
              </p>
              <Link
                href="/customers"
                className="mt-auto text-[#1d4ed8] text-sm font-semibold hover:text-[#1e40af] transition-colors"
              >
                Explore Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
