/**
 * Business / work-email gate for all site forms that collect email.
 * Aligns with HubSpot “block free email domains” style lists Demand uses.
 * Domains are lowercase; compare against the email’s domain only.
 */
export const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.uk',
  'yahoo.co.in',
  'ymail.com',
  'hotmail.com',
  'hotmail.co.uk',
  'outlook.com',
  'live.com',
  'msn.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'aol.com',
  'protonmail.com',
  'proton.me',
  'pm.me',
  'mail.com',
  'gmx.com',
  'gmx.net',
  'zoho.com',
  'yandex.com',
  'yandex.ru',
  'qq.com',
  '163.com',
  '126.com',
  'hey.com',
  'fastmail.com',
  'tutanota.com',
  'tutamail.com',
  'mailinator.com',
  'guerrillamail.com',
  'tempmail.com',
  '10minutemail.com',
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
  // Block obvious free-mail subdomains (e.g. something.gmail.com) — rare but cheap.
  for (const free of FREE_EMAIL_DOMAINS) {
    if (domain.endsWith(`.${free}`)) return false;
  }
  return true;
}
