/**
 * Canonical site origin. The apex (mobot.io) 308-redirects to www in Vercel,
 * so www is the canonical host and everything URL-based keys off this.
 *
 * Overridable per-environment so preview deployments can self-reference:
 * set NEXT_PUBLIC_SITE_URL in Vercel for a given environment if needed.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.mobot.io').replace(/\/$/, '');
