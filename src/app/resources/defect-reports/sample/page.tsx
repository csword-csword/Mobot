import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReportView from '@/components/report/ReportView';
import PrintButton from '@/components/report/PrintButton';

export const metadata = {
  title: 'Sample Defect Report',
  description: 'A sanitized sample of a Mobot defect report: run metadata, 90-day analytics, a verified P0 observation, and grouped test steps with per-step evidence.',
};

export default function Page() {
  return (
    <section className="py-12 px-6 section-alt">
      <div className="mx-auto max-w-[80rem]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 print:hidden">
          <div>
            <Link href="/resources/defect-reports" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-[#1d4ed8]">
              <ArrowLeft className="w-4 h-4" /> About defect reports
            </Link>
            <h1 className="text-2xl font-bold text-[#0a2540] mt-2">Sample defect report</h1>
            <p className="text-slate-500 text-sm mt-1">
              Sanitized from a real run. Customer, app, and screen contents are replaced; structure, fields, and analyst workflow are exactly what you receive.
            </p>
          </div>
          <div className="flex gap-3">
            <PrintButton />
            <Link href="/schedule-demo" className="inline-flex items-center px-5 py-2.5 rounded-md bg-[#1d4ed8] text-white font-semibold hover:bg-[#1e40af] transition-colors text-sm">
              Get one on your app
            </Link>
          </div>
        </div>
        <ReportView />
      </div>
    </section>
  );
}
