/**
 * HubSpot portal + Annual Defect Report form (Charles / Demand, Sep 22 2026).
 * Portal/form IDs are public identifiers (safe in env or defaults). Region: US / na1.
 */
export const HUBSPOT_PORTAL_ID =
  process.env.HUBSPOT_PORTAL_ID?.trim() ||
  process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID?.trim() ||
  '21630472';

export const HUBSPOT_REPORT_FORM_ID =
  process.env.HUBSPOT_REPORT_FORM_ID?.trim() ||
  '3b8355f3-7dc7-471f-98c6-5bd384fa8f48';

/** US portal → api.hsforms.com; set HUBSPOT_FORMS_REGION=eu for EU. */
export const HUBSPOT_FORMS_HOST =
  (process.env.HUBSPOT_FORMS_REGION || 'us').toLowerCase() === 'eu'
    ? 'https://api-eu1.hsforms.com'
    : 'https://api.hsforms.com';

export const REPORT_ACCESS_COOKIE = 'mobot_report_access';

export type HubSpotSubmitInput = {
  email: string;
  company?: string;
  pageUri?: string;
  pageName?: string;
  hutk?: string;
};

export type HubSpotSubmitResult =
  | { ok: true }
  | { ok: false; status: number; detail: string };

/**
 * Submit to HubSpot Forms API v3. Unlock cookie must only be set after ok: true.
 */
export async function submitReportDownloadForm(
  input: HubSpotSubmitInput,
): Promise<HubSpotSubmitResult> {
  const portalId = HUBSPOT_PORTAL_ID;
  const formId = HUBSPOT_REPORT_FORM_ID;
  if (!portalId || !formId) {
    return {
      ok: false,
      status: 500,
      detail: 'HubSpot portal/form IDs are not configured',
    };
  }

  const fields: { objectTypeId: string; name: string; value: string }[] = [
    { objectTypeId: '0-1', name: 'email', value: input.email },
  ];
  if (input.company?.trim()) {
    fields.push({
      objectTypeId: '0-1',
      name: 'company',
      value: input.company.trim(),
    });
  }

  const context: Record<string, string> = {};
  if (input.pageUri) context.pageUri = input.pageUri;
  if (input.pageName) context.pageName = input.pageName;
  if (input.hutk) context.hutk = input.hutk;

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
      // HubSpot Forms API is public; no private app token required for this endpoint.
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
