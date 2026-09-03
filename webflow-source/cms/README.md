# Webflow CMS exports

Webflow's site export does **not** include CMS collection items, so the blog
posts and case studies on mobot.io have to be brought over separately.

## Blog posts
1. In Webflow: **CMS → Blog Posts → Export** (top-right of the collection view).
2. Save the CSV here as `blog.csv`.
3. From the repo root: `node scripts/import-webflow-blog.mjs`

Writes `src/data/posts.generated.json`, rendered by `/resources/blog` and
`/resources/blog/[slug]` (rich-text bodies included). The importer uses
**Created On** as the display date (the site-wide republish stamped every post
with the same **Published On**), maps `Category - Blog Type` to a tag
(`how-tos` → "How-to", which drives the how-to sections on the blog, the
homepage, and the solution pages), computes read time, rewrites links back to
mobot.io as local links, and points legacy `uploads-ssl.webflow.com` images at
the current Webflow CDN. Cover images are hot-linked from that CDN; copy them
into `public/images/blog/` and update `image` if the Webflow site is ever taken
down.

## Case studies
1. **CMS → Case Studies → Export**, save as `case-studies.csv`.
2. `node scripts/import-webflow-blog.mjs webflow-source/cms/case-studies.csv --kind case-study --out src/data/case-studies.generated.json`

Writes `src/data/case-studies.generated.json`, rendered by `/customers` and
`/customers/[slug]`. Entries whose slug matches one of the five existing
case-study summaries (citizen…, how-the-1-neobank…, how-rappi…, how-a-top-10-social-network…,
how-sandboxx…) fill in the full article on the existing card; any others are
added as new cards.

Re-run the script any time a CSV changes, then commit the generated JSON.
