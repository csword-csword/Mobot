import Link from 'next/link';
import {
  Bell, Link2, Bluetooth, Watch, CreditCard, MessageSquare, Mail, ShieldCheck, ScanFace,
  Image as ImageIcon, Smartphone, QrCode, Camera, MapPin, RotateCw, LayoutGrid, PhoneCall, KeyRound,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { capabilities, type Capability } from '@/data/content';

const icons: Record<Capability['icon'], React.ComponentType<{ className?: string }>> = {
  bell: Bell,
  link: Link2,
  bluetooth: Bluetooth,
  watch: Watch,
  'credit-card': CreditCard,
  message: MessageSquare,
  mail: Mail,
  shield: ShieldCheck,
  'scan-face': ScanFace,
  image: ImageIcon,
  smartphones: Smartphone,
  qr: QrCode,
  camera: Camera,
  'map-pin': MapPin,
  rotate: RotateCw,
  layout: LayoutGrid,
  'phone-call': PhoneCall,
  key: KeyRound,
};

interface CapabilityGridProps {
  limit?: number;
  compact?: boolean;
}

export default function CapabilityGrid({ limit, compact }: CapabilityGridProps) {
  const items = limit ? capabilities.slice(0, limit) : capabilities;
  return (
    <div className={`grid gap-4 ${compact ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3'}`}>
      {items.map((c, i) => {
        const Icon = icons[c.icon];
        const inner = (
          <>
            <div className="w-10 h-10 rounded-md bg-[#e8f0fe] text-[#1d4ed8] flex items-center justify-center shrink-0 group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-[#0a2540] text-sm">{c.name}</div>
              {!compact && <p className="text-slate-500 text-xs leading-relaxed mt-1">{c.detail}</p>}
            </div>
          </>
        );
        const cls = `group h-full flex ${compact ? 'items-center' : 'items-start'} gap-4 rounded-lg border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all`;
        return (
          <Reveal key={c.name} delay={(i % 6) * 60}>
            {c.solutionHref ? (
              <Link href={c.solutionHref} className={cls}>
                {inner}
              </Link>
            ) : (
              <div className={cls}>{inner}</div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
