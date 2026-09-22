'use client';

import { FormEvent, ReactNode, useState } from 'react';
import { isWorkEmail, WORK_EMAIL_ERROR } from '@/lib/workEmail';

type Props = {
  children: ReactNode;
  className?: string;
  /** Name attribute of the email input (default: email). */
  emailName?: string;
  onValidSubmit?: (e: FormEvent<HTMLFormElement>) => void | Promise<void>;
};

/**
 * Client form wrapper: blocks submit unless the email field is a work address.
 * Use on any first-party form that collects email.
 */
export default function WorkEmailForm({
  children,
  className,
  emailName = 'email',
  onValidSubmit,
}: Props) {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const raw = new FormData(form).get(emailName);
    const email = typeof raw === 'string' ? raw : '';

    if (!isWorkEmail(email)) {
      e.preventDefault();
      setError(WORK_EMAIL_ERROR);
      const input = form.elements.namedItem(emailName);
      if (input instanceof HTMLElement) input.focus();
      return;
    }

    setError(null);
    if (onValidSubmit) {
      e.preventDefault();
      await onValidSubmit(e);
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      {children}
      {error && <p className="text-[11px] text-red-600 mt-1 col-span-full">{error}</p>}
    </form>
  );
}
