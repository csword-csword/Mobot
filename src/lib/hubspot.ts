/**
 * HubSpot portal + form submits (Charles / Demand, Sep 2026).
 * Portal/form IDs are public identifiers (safe in env or defaults). Region: US / na1.
 */
export const HUBSPOT_PORTAL_ID =
  process.env.HUBSPOT_PORTAL_ID?.trim() ||
  process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID?.trim() ||
  '21630472';

export const HUBSPOT_REPORT_FORM_ID =
  process.env.HUBSPOT_REPORT_FORM_ID?.trim() ||
  '3b8355f3-7dc7-471f-98c6-5bd384fa8f48';

/** Demo / schedule form — Demand GUID Sep 23 2026 (Website Schedule Demo). */
export const HUBSPOT_DEMO_FORM_ID =
  process.env.HUBSPOT_DEMO_FORM_ID?.trim() ||
  'a0c38f8f-89b7-43f1-9ff1-8eb37ef7a8d2';
export const HUBSPOT_CONTACT_FORM_ID =
  process.env.HUBSPOT_CONTACT_FORM_ID?.trim() ||
  'a8e1fba1-b7b8-439a-ae6c-6e7598561c7b';
export const HUBSPOT_NEWSLETTER_FORM_ID =
  process.env.HUBSPOT_NEWSLETTER_FORM_ID?.trim() ||
  '10805bde-c9a5-4259-8a44-2f87bfff9f77';

/** US portal → api.hsforms.com; set HUBSPOT_FORMS_REGION=eu for EU. */
export const HUBSPOT_FORMS_HOST =
  (process.env.HUBSPOT_FORMS_REGION || 'us').toLowerCase() === 'eu'
    ? 'https://api-eu1.hsforms.com'
    : 'https://api.hsforms.com';

export const REPORT_ACCESS_COOKIE = 'mobot_report_access';

export type HubSpotField = { name: string; value: string };

export type HubSpotSubmitResult =
  | { ok: true }
  | { ok: false; status: number; detail: string };

export async function submitHubSpotForm(opts: {
  formId: string;
  fields: HubSpotField[];
  pageUri?: string;
  pageName?: string;
  hutk?: string;
}): Promise<HubSpotSubmitResult> {
  const portalId = HUBSPOT_PORTAL_ID;
  const formId = opts.formId?.trim();
  if (!portalId || !formId) {
    return {
      ok: false,
      status: 503,
      detail: 'HubSpot form ID is not configured',
    };
  }

  const fields = opts.fields
    .filter((f) => f.name && f.value.trim() !== '')
    .map((f) => ({
      objectTypeId: '0-1',
      name: f.name,
      value: f.value.trim(),
    }));

  const context: Record<string, string> = {};
  if (opts.pageUri) context.pageUri = opts.pageUri;
  if (opts.pageName) context.pageName = opts.pageName;
  if (opts.hutk) context.hutk = opts.hutk;

  const url = `${HUBSPOT_FORMS_HOST}/submissions/v3/integration/submit/${portalId}/${formId}`;

  let res: Response;
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields,
        ...(Object.keys(context).length ? { context } : {}),
      }),
      cache: 'no-store',
    });
  } catch (err) {
    return {
      ok: false,
      status: 502,
      detail: err instanceof Error ? err.message : 'HubSpot unreachable',
    };
  }

  if (res.ok) return { ok: true };

  const text = await res.text().catch(() => '');
  return {
    ok: false,
    status: res.status,
    detail: text.slice(0, 500) || res.statusText || 'HubSpot rejected submission',
  };
}

export type HubSpotSubmitInput = {
  email: string;
  company?: string;
  pageUri?: string;
  pageName?: string;
  hutk?: string;
};

/**
 * Submit to HubSpot Forms API v3. Unlock cookie must only be set after ok: true.
 */
export async function submitReportDownloadForm(
  input: HubSpotSubmitInput,
): Promise<HubSpotSubmitResult> {
  const fields: HubSpotField[] = [{ name: 'email', value: input.email }];
  if (input.company?.trim()) {
    fields.push({ name: 'company', value: input.company.trim() });
  }
  return submitHubSpotForm({
    formId: HUBSPOT_REPORT_FORM_ID,
    fields,
    pageUri: input.pageUri,
    pageName: input.pageName,
    hutk: input.hutk,
  });
}
