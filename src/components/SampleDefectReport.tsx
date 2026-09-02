import { CheckCircle2, XCircle, Video, FileText, Smartphone, User } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const steps = [
  { n: 1, label: 'Launch app from cold start', status: 'pass' },
  { n: 2, label: 'Tap promo push notification', status: 'pass' },
  { n: 3, label: 'Deep link resolves to promo screen', status: 'fail' },
  { n: 4, label: 'Add promoted item to cart', status: 'skip' },
];

export default function SampleDefectReport() {
  return (
    <Reveal variant="scale">
      <div className="rounded-lg border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.10)] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#15803d] animate-blink" />
            Verified defect report
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">P0</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#e8f0fe] text-[#1d4ed8]">MOB-2481</span>
          </div>
        </div>

        <div className="grid md:grid-cols-[1fr_15rem]">
          <div className="p-5 md:p-6">
            <h3 className="font-bold text-[#0a2540] text-lg leading-snug">
              Promo deep link opens the home screen instead of the promotion
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              After tapping the &ldquo;Holiday 20% off&rdquo; push notification, the app launches
              but resolves the deep link to the home tab. Reproduced on 3 of 3 attempts. Not
              reproducible when the app is already in the foreground.
            </p>

            <ol className="mt-5 space-y-2">
              {steps.map((s) => (
                <li key={s.n} className="flex items-center gap-3 text-sm">
                  <span className="w-5 text-right text-xs text-slate-400 tabular-nums">{s.n}</span>
                  {s.status === 'pass' && <CheckCircle2 className="w-4 h-4 text-[#15803d]" />}
                  {s.status === 'fail' && <XCircle className="w-4 h-4 text-red-600" />}
                  {s.status === 'skip' && <span className="w-4 h-4 rounded-full border-2 border-slate-300" />}
                  <span className={s.status === 'fail' ? 'font-semibold text-red-700' : s.status === 'skip' ? 'text-slate-400' : 'text-slate-700'}>
                    {s.label}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-5 rounded-md border border-slate-200 bg-[#f8fafc] p-3 text-xs text-slate-600 leading-relaxed">
              <span className="font-bold text-[#0a2540]">Analyst note:</span> Confirmed real defect.
              Universal link association resolves correctly; the in-app router drops the
              <code className="mx-1 px-1 rounded bg-white border border-slate-200 font-mono text-[11px]">promo_id</code>
              parameter on cold start. Attached device log shows the handoff at 00:04.2.
            </div>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-slate-200 bg-slate-50 p-5 space-y-4 text-xs">
            <div className="flex gap-2.5">
              <Smartphone className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-[#0a2540]">Device</div>
                <div className="text-slate-500">Pixel 8 · Android 15 · LTE</div>
              </div>
            </div>
            <div className="flex gap-2.5">
              <Video className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-[#0a2540]">Evidence</div>
                <div className="text-slate-500">Video (0:31) · 4 screenshots</div>
              </div>
            </div>
            <div className="flex gap-2.5">
              <FileText className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-[#0a2540]">Logs</div>
                <div className="text-slate-500">Device log · network log · steps</div>
              </div>
            </div>
            <div className="flex gap-2.5">
              <User className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-[#0a2540]">Reviewed by</div>
                <div className="text-slate-500">Mobot QA analyst · 07:52 ET</div>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <span className="text-[#1d4ed8] font-semibold">Open in Jira →</span>
              <span className="text-[#1d4ed8] font-semibold">Post to Slack →</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
