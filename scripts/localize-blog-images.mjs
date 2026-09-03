#!/usr/bin/env node
/**
 * Copy images that are hot-linked from Webflow's CDN into the repo.
 *
 *   node scripts/localize-blog-images.mjs                     # blog posts
 *   node scripts/localize-blog-images.mjs --dry-run            # preview
 *   node scripts/localize-blog-images.mjs --file src/data/case-studies.generated.json --out-dir public/images/customers
 *
 * Downloads every cover image, logo, and inline <img src> that points at a
 * Webflow host into <out-dir>/<slug>/<file>, and rewrites the JSON to use the
 * local path. Safe to re-run: files that already exist are not re-fetched,
 * and URLs that fail to download are left untouched (reported at the end)
 * so the site keeps working either way.
 *
 * Run this from a machine with normal internet access (the Webflow CDN is
 * often blocked in sandboxed environments), then commit the image directory
 * and the updated *.generated.json together.
 */
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};
const DATA = flag('--file', 'src/data/posts.generated.json');
const OUT_DIR = flag('--out-dir', 'public/images/blog');
const HOSTS = /^https:\/\/(cdn\.prod\.website-files\.com|uploads-ssl\.webflow\.com|assets(-global)?\.website-files\.com)\//;
const dryRun = args.includes('--dry-run');

const posts = JSON.parse(fs.readFileSync(DATA, 'utf8'));
const failures = [];
let downloaded = 0;
let rewritten = 0;

/** Webflow file names are "<hash>_<original-name>.ext"; keep the readable part when present. */
function localName(url) {
  const base = decodeURIComponent(new URL(url).pathname.split('/').pop() || 'image');
  const m = base.match(/^[0-9a-f]{24}_(.+)$/i);
  let name = (m ? m[1] : base).replace(/[^a-zA-Z0-9._-]+/g, '-');
  if (name.length > 80) name = name.slice(-80);
  if (!/\.[a-z0-9]{2,5}$/i.test(name)) name += '.png';
  return name;
}

async function fetchTo(url, dest) {
  if (fs.existsSync(dest)) return true;
  if (dryRun) return true;
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  downloaded++;
  return true;
}

async function localize(url, slug) {
  if (!HOSTS.test(url)) return url;
  const name = localName(url);
  const rel = `/images/blog/${slug}/${name}`;
  const dest = path.join(OUT_DIR, slug, name);
  try {
    await fetchTo(url, dest);
    rewritten++;
    return rel;
  } catch (err) {
    failures.push({ slug, url, reason: err.message });
    return url;
  }
}

for (const post of posts) {
  if (post.image) post.image = await localize(post.image, post.slug);
  if (post.logo) post.logo = await localize(post.logo, post.slug);
  if (post.html) {
    const srcs = [...new Set([...post.html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map((m) => m[1]))];
    for (const src of srcs) {
      const local = await localize(src, post.slug);
      if (local !== src) post.html = post.html.split(`src="${src}"`).join(`src="${local}"`);
    }
  }
}

if (!dryRun) fs.writeFileSync(DATA, JSON.stringify(posts, null, 2) + '\n');

console.log(`${dryRun ? '[dry run] ' : ''}${rewritten} image reference(s) localized in ${DATA}, ${downloaded} file(s) downloaded to ${OUT_DIR}.`);
if (failures.length) {
  console.log(`${failures.length} image(s) could not be fetched and were left as remote URLs:`);
  for (const f of failures) console.log(`  ${f.slug}: ${f.url} (${f.reason})`);
  process.exitCode = 2;
}
