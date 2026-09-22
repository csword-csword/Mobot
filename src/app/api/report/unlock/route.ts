import { NextRequest, NextResponse } from 'next/server';
import {
  REPORT_ACCESS_COOKIE,
  submitReportDownloadForm,
} from '@/lib/hubspot';
import { isWorkEmail, WORK_EMAIL_ERROR } from '@/lib/workEmail';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

/**
 * Unlock the Annual Defect Report after a successful HubSpot form submit.
 * Form: Annual Defect Report Download (portal 21630472 / form GUID from env/defaults).
 * Functional cookie mobot_report_access is separate from HubSpot marketing cookies
 * (those are gated by HubSpot's own opt-in banner).
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const obj = typeof body === 'object' && body !== null ? (body as Record<string, unknown>) : {};
  const email = typeof obj.email === 'string' ? obj.email.trim() : '';
  const company = typeof obj.company === 'string' ? obj.company.trim() : '';
  const pageUri = typeof obj.pageUri === 'string' ? obj.pageUri : undefined;
  const pageName = typeof obj.pageName === 'string' ? obj.pageName : undefined;

  if (!isWorkEmail(email)) {
    return NextResponse.json({ ok: false, error: WORK_EMAIL_ERROR }, { status: 400 });
  }

  const hutk = request.cookies.get('hubspotutk')?.value;

  const hs = await submitReportDownloadForm({
    email,
    company: company || undefined,
    pageUri,
    pageName: pageName || 'Annual Defect Report',
    hutk,
  });

  if (!hs.ok) {
    console.error('[report/unlock] HubSpot submit failed', hs.status, hs.detail);
    return NextResponse.json(
      { ok: false, error: 'Could not submit to HubSpot. Try again in a moment.' },
      { status: 502 },
    );
  }

  const res = NextResponse.json({ ok: true, url: '/api/report/file' });
  res.cookies.set(REPORT_ACCESS_COOKIE, '1', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE,
    secure: process.env.NODE_ENV === 'production',
  });
  return res;
}
