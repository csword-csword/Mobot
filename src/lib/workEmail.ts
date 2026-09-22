/**
 * Business / work-email gate for all site forms that collect email.
 *
 * Source of truth (Demand, Sep 22 2026): HubSpot Submissions Settings free-email
 * blocklist + “Block free email domains” master toggle. Domains below are the
 * exact list saved in HubSpot — keep 1:1. HubSpot’s master toggle may still
 * block additional free providers on native HubSpot forms that we cannot see.
 */
export const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'msn.com',
  'aol.com',
  'icloud.com',
  'me.com',
  'protonmail.com',
  'gmx.com',
  'mail.com',
  'yandex.com',
]);

export const WORK_EMAIL_ERROR =
  'Please use your work email — personal addresses (Gmail, Yahoo, Outlook, etc.) aren’t accepted.';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function emailDomain(email: string): string | null {
  const trimmed = email.trim().toLowerCase();
  const at = trimmed.lastIndexOf('@');
  if (at < 1) return null;
  return trimmed.slice(at + 1);
}

/** True when the address looks like a non-free corporate/work email. */
export function isWorkEmail(email: string): boolean {
  const trimmed = email.trim();
  if (!EMAIL_RE.test(trimmed)) return false;
  const domain = emailDomain(trimmed);
  if (!domain) return false;
  if (FREE_EMAIL_DOMAINS.has(domain)) return false;
  for (const free of FREE_EMAIL_DOMAINS) {
    if (domain.endsWith(`.${free}`)) return false;
  }
  return true;
}
