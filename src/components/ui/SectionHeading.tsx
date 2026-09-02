import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
  dark?: boolean;
  className?: string;
  size?: 'md' | 'lg';
}

export default function SectionHeading({ eyebrow, title, sub, center, dark, className = '', size = 'md' }: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && <p className={`eyebrow text-xs mb-4 ${dark ? '!text-[#86b6ef]' : ''}`}>{eyebrow}</p>}
      <h2
        className={`font-bold leading-tight ${dark ? 'text-white' : 'text-[#0a2540]'} ${
          size === 'lg' ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'
        } ${center ? 'mx-auto max-w-[44rem]' : 'max-w-[44rem]'}`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-white/65' : 'text-slate-600'} ${center ? 'mx-auto' : ''} max-w-[40rem]`}>
          {sub}
        </p>
      )}
    </div>
  );
}
