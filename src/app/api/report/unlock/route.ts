import { NextRequest, NextResponse } from 'next/server';

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const COOKIE_NAME = 'mobot_report_access';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

/**
 * Unlock the Annual Defect Report for a valid work email.
 *
 * TODO(HubSpot): When ready, submit the email to a HubSpot form here
 * (portal ID + form ID). Do not invent IDs — wire real values from env
 * e.g. HUBSPOT_PORTAL_ID / HUBSPOT_REPORT_FORM_ID before enabling.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const email =
    typeof body === 'object' && body !== null && 'email' in body
      ? String((body as { email: unknown }).email).trim()
      : '';

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'Valid work email required' }, { status: 400 });
  }

  // TODO(HubSpot): POST email to HubSpot Forms API with portal/form IDs from env.

  const res = NextResponse.json({ ok: true, url: '/api/report/file' });
  res.cookies.set(COOKIE_NAME, '1', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE,
    secure: process.env.NODE_ENV === 'production',
  });
  return res;
}
