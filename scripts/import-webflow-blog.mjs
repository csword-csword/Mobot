#!/usr/bin/env node
/**
 * Import a Webflow CMS CSV export into a generated JSON file that the site
 * renders automatically.
 *
 * Blog posts (default):
 *   node scripts/import-webflow-blog.mjs
 *   node scripts/import-webflow-blog.mjs webflow-source/cms/blog.csv
 *
 * Case studies:
 *   node scripts/import-webflow-blog.mjs webflow-source/cms/case-studies.csv --kind case-study --out src/data/case-studies.generated.json
 *
 * Webflow's CSV export columns vary by collection. This importer maps by
 * fuzzy column name so the common shapes work without configuration:
 *   title   ← Name | Title
 *   slug    ← Slug
 *   summary ← Post Summary | Summary | Excerpt | Description
 *   html    ← Post Body | Body | Content | Rich Text
 *   date    ← Published On | Publish Date | Date | Created On
 *   author  ← Author | Author Name
 *   readTime← Estimated Read Time | Read Time
 *   tags    ← Categories | Category | Tags
 *   image   ← Main Image | Thumbnail Image | Image
 *   featured← Featured? | Featured
 *   company ← Company | Customer | Client            (case studies)
 *   stat    ← Stat | Headline Stat | Metric           (case studies)
 *   industry← Industry | Vertical                     (case studies)
 * Rows marked Draft/Archived are skipped.
 */
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};
const positional = args.filter((a, i) => !a.startsWith('--') && !(i > 0 && args[i - 1].startsWith('--')));
const kind = flag('--kind', 'article');
const input = positional[0] ?? (kind === 'case-study' ? 'webflow-source/cms/case-studies.csv' : 'webflow-source/cms/blog.csv');
const output = flag('--out', kind === 'case-study' ? 'src/data/case-studies.generated.json' : 'src/data/posts.generated.json');

if (!fs.existsSync(input)) {
  console.error(`No CSV found at ${input}.\nExport the collection from Webflow (CMS → Collection → Export) and save it there.`);
  process.exit(1);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else { inQuotes = false; }
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((f) => f !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows;
}

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const usable = (h) => !/deprecated/i.test(h);
const pick = (headers, candidates) => {
  for (const cand of candidates) {
    const idx = headers.findIndex((h) => usable(h) && norm(h) === norm(cand));
    if (idx !== -1) return idx;
  }
  for (const cand of candidates) {
    const idx = headers.findIndex((h) => usable(h) && norm(h).includes(norm(cand)));
    if (idx !== -1) return idx;
  }
  return -1;
};

/** Webflow option slugs → display labels. */
const tagLabels = { 'how-tos': 'How-to', 'how-to': 'How-to', news: 'News', 'case-studies': 'Case study' };
const labelTag = (t) => tagLabels[t.toLowerCase()] ?? t.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

/**
 * Normalise Webflow rich text for the site:
 *  - drop empty id="" attributes Webflow adds to every element
 *  - move legacy uploads-ssl.webflow.com assets to the current CDN host
 *  - point links back at mobot.io to this site
 *  - lazy-load inline images
 */
const cleanHtml = (html) =>
  html
    .replace(/\s+id=""/g, '')
    .replace(/https:\/\/uploads-ssl\.webflow\.com\//g, 'https://cdn.prod.website-files.com/')
    .replace(/href="https?:\/\/(?:www\.)?mobot\.io\/blog\/([^"]+)"/g, 'href="/resources/blog/$1"')
    .replace(/href="https?:\/\/(?:www\.)?mobot\.io\/?"/g, 'href="/"')
    .replace(/href="https?:\/\/(?:www\.)?mobot\.io\//g, 'href="/')
    .replace(/<img\b(?![^>]*\bloading=)/g, '<img loading="lazy"');

const readTime = (html) => `${Math.max(1, Math.round(stripText(html).split(/\s+/).length / 220))} min`;

const text = fs.readFileSync(input, 'utf8').replace(/^﻿/, '');
const [headers, ...rows] = parseCsv(text);
const col = {
  title: pick(headers, ['Main Heading', 'Name', 'Title']),
  slug: pick(headers, ['Slug']),
  summary: pick(headers, ['Post Summary', 'Summary', 'Excerpt', 'Description', 'Meta Description']),
  html: pick(headers, ['Post Body', 'Body', 'Content', 'Rich Text', 'Article', 'Case Study Body']),
  date: pick(headers, ['Created On', 'Publish Date', 'Date', 'Published On']),
  author: pick(headers, ['Author Name', 'Author']),
  readTime: pick(headers, ['Estimated Read Time', 'Read Time']),
  tags: pick(headers, ['Category - Blog Type', 'Categories', 'Category', 'Tags', 'Tag']),
  image: pick(headers, ['Main Image', 'Thumbnail Image', 'Image', 'Featured Image', 'Logo']),
  featured: pick(headers, ['Featured?', 'Featured']),
  draft: pick(headers, ['Draft']),
  archived: pick(headers, ['Archived']),
  company: pick(headers, ['Client name', 'Company', 'Customer', 'Client', 'Company Name']),
  companyBlurb: pick(headers, ['Description of the company']),
  logo: pick(headers, ['Client Logo Full', 'Client Logo Icon', 'Logo']),
  stat: pick(headers, ['Stat', 'Headline Stat', 'Metric', 'Key Result']),
  industry: pick(headers, ['Industry', 'Vertical']),
};

const truthy = (v) => /^(true|yes|1)$/i.test(String(v ?? '').trim());
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const stripText = (html) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

const items = rows
  .filter((r) => !(col.draft !== -1 && truthy(r[col.draft])) && !(col.archived !== -1 && truthy(r[col.archived])))
  .map((r) => {
    const get = (i) => (i === -1 ? '' : (r[i] ?? '').trim());
    const title = get(col.title);
    if (!title) return null;
    const html = cleanHtml(get(col.html));
    const summary = get(col.summary) || stripText(html).slice(0, 220);
    const dateRaw = get(col.date);
    const parsed = dateRaw ? new Date(dateRaw) : null;
    const date = parsed && !Number.isNaN(parsed.getTime()) ? parsed.toISOString().slice(0, 10) : '2024-01-01';
    const tags = get(col.tags).split(/[;,|]/).map((t) => t.trim()).filter(Boolean).map(labelTag);
    return {
      slug: get(col.slug) || slugify(title),
      title,
      kind,
      summary,
      date,
      author: get(col.author) || undefined,
      readTime: get(col.readTime) || (html ? readTime(html) : undefined),
      tags: tags.length ? tags : undefined,
      html: html || undefined,
      image: get(col.image) || undefined,
      logo: col.logo !== undefined && col.logo !== -1 ? get(col.logo) || undefined : undefined,
      featured: col.featured !== -1 ? truthy(get(col.featured)) : undefined,
      company: get(col.company) || undefined,
      companyBlurb: col.companyBlurb !== undefined && col.companyBlurb !== -1 ? get(col.companyBlurb) || undefined : undefined,
      stat: get(col.stat) || undefined,
      industry: get(col.industry) || undefined,
    };
  })
  .filter(Boolean);

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(items, null, 2) + '\n');
console.log(`Imported ${items.length} ${kind === 'case-study' ? 'case studies' : 'posts'} → ${output}`);
console.log('Columns used:', Object.fromEntries(Object.entries(col).map(([k, v]) => [k, v === -1 ? '(none)' : headers[v]])));
