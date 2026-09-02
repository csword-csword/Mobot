/**
 * Case studies: the five summaries that exist on the current site, merged with
 * full articles imported from a Webflow CMS export (see scripts/import-webflow-blog.mjs
 * with `--kind case-study`). When a generated entry matches a summary's slug,
 * the card links to the local page at /customers/<slug> and renders the full body.
 */
import generated from './case-studies.generated.json';
import { caseStudies as summaries, type CaseStudy } from './content';

interface GeneratedCaseStudy {
  slug: string;
  title: string;
  summary?: string;
  html?: string;
  date?: string;
  image?: string;
  company?: string;
  stat?: string;
  industry?: string;
  tags?: string[];
}

const externalSlug = (href: string) => href.split('/').filter(Boolean).pop() ?? '';

export interface FullCaseStudy extends CaseStudy {
  slug: string;
  html?: string;
  title: string;
  date?: string;
  /** Local when a full body exists; otherwise the canonical external URL. */
  localHref?: string;
}

const gen = (generated as GeneratedCaseStudy[]).filter((g) => g && g.slug && g.title);

const fromSummaries: FullCaseStudy[] = summaries.map((s) => {
  const slug = externalSlug(s.href);
  const g = gen.find((x) => x.slug === slug);
  return {
    ...s,
    slug,
    title: g?.title ?? `${s.company}: ${s.label}`,
    html: g?.html,
    date: g?.date,
    localHref: g?.html ? `/customers/${slug}` : undefined,
    detail: g?.summary || s.detail,
  };
});

/** Imported studies that don't match one of the five summaries. */
const extra: FullCaseStudy[] = gen
  .filter((g) => !fromSummaries.some((s) => s.slug === g.slug))
  .map((g) => ({
    slug: g.slug,
    title: g.title,
    company: g.company ?? g.title,
    industry: g.industry ?? '',
    stat: g.stat ?? '',
    label: g.summary ?? '',
    detail: g.summary ?? '',
    bullets: g.tags ?? [],
    href: `/customers/${g.slug}`,
    logo: g.image,
    html: g.html,
    date: g.date,
    localHref: `/customers/${g.slug}`,
  }));

export const allCaseStudies: FullCaseStudy[] = [...fromSummaries, ...extra];

export function getCaseStudy(slug: string) {
  return allCaseStudies.find((c) => c.slug === slug);
}
