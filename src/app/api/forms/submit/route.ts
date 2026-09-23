import { NextRequest, NextResponse } from 'next/server';
import {
  HUBSPOT_CONTACT_FORM_ID,
  HUBSPOT_DEMO_FORM_ID,
  HUBSPOT_NEWSLETTER_FORM_ID,
  submitHubSpotForm,
  type HubSpotField,
} from '@/lib/hubspot';
import { isWorkEmail, WORK_EMAIL_ERROR } from '@/lib/workEmail';

type FormKind = 'demo' | 'contact' | 'newsletter';

const FORM_IDS: Record<FormKind, string> = {
  demo: HUBSPOT_DEMO_FORM_ID,
  contact: HUBSPOT_CONTACT_FORM_ID,
  newsletter: HUBSPOT_NEWSLETTER_FORM_ID,
};

const PAGE_NAMES: Record<FormKind, string> = {
  demo: 'Request a Demo',
  contact: 'Contact',
  newsletter: 'Newsletter',
};

function asString(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

/**
 * First-party form → HubSpot Forms API.
 * Fails closed when the kind's form GUID env is missing (no silent CRM drop).
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const obj = typeof body === 'object' && body !== null ? (body as Record<string, unknown>) : {};
  const kind = asString(obj.kind) as FormKind;
  if (kind !== 'demo' && kind !== 'contact' && kind !== 'newsletter') {
    return NextResponse.json({ ok: false, error: 'Unknown form kind' }, { status: 400 });
  }

  const formId = FORM_IDS[kind];
  if (!formId) {
    console.error('[forms/submit] missing HubSpot form id for', kind);
    return NextResponse.json(
      {
        ok: false,
        error:
          'This form is temporarily unavailable. Email sales@teammobot.com and we will follow up.',
        code: 'FORM_NOT_CONFIGURED',
      },
      { status: 503 },
    );
  }

  const email = asString(obj.email);
  if (!isWorkEmail(email)) {
    return NextResponse.json({ ok: false, error: WORK_EMAIL_ERROR }, { status: 400 });
  }

  const fields: HubSpotField[] = [{ name: 'email', value: email }];

  const maybe = [
    'firstname',
    'lastname',
    'company',
    'message',
    'help_with',
    'biggest_gap',
    'what_testing',
  ] as const;
  for (const key of maybe) {
    const v = asString(obj[key]);
    if (v) fields.push({ name: key, value: v });
  }

  const pageUri = asString(obj.pageUri) || undefined;
  const pageName = asString(obj.pageName) || PAGE_NAMES[kind];
  const hutk = request.cookies.get('hubspotutk')?.value;

  const hs = await submitHubSpotForm({
    formId,
    fields,
    pageUri,
    pageName,
    hutk,
  });

  if (!hs.ok) {
    console.error('[forms/submit] HubSpot failed', kind, hs.status, hs.detail);
    return NextResponse.json(
      { ok: false, error: 'Could not submit. Try again or email sales@teammobot.com.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
