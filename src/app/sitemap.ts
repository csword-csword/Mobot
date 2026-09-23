import type { MetadataRoute } from 'next';
import { posts } from '@/data/posts';
import { allCaseStudies } from '@/data/caseStudies';
import { solutions } from '@/data/solutions';
import { competitorProfiles } from '@/data/compare';
import { SITE_URL } from '@/lib/site';

/**
 * Static routes, with the priority we want crawlers to weight them by.
 * Dynamic routes are appended from the same data the pages render from,
 * so the sitemap can't drift from what actually exists.
 */
const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/platform', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/platform/defect-validation', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/unlimited', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/how-it-works', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/why-real-devices', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/customers', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/compare', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/solutions', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/devices', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/integrations', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/resources/annual-defect-report', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/resources/defect-reports', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources/defect-reports/sample', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources/webinars-events', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/labs', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/security', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/schedule-demo', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Blog posts — skip any that canonically live elsewhere.
  for (const post of posts) {
    if (post.externalUrl) continue;
    entries.push({
      url: `${SITE_URL}/resources/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : now,
      changeFrequency: 'monthly',
      priority: post.featured ? 0.8 : 0.6,
    });
  }

  for (const study of allCaseStudies) {
    entries.push({
      url: `${SITE_URL}/customers/${study.slug}`,
      lastModified: study.date ? new Date(study.date) : now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  for (const solution of solutions) {
    entries.push({
      url: `${SITE_URL}/solutions/${solution.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  for (const profile of competitorProfiles) {
    entries.push({
      url: `${SITE_URL}/compare/${profile.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  return entries;
}
