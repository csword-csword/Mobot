# Fonts

The Mobot marketing site is built in Webflow and its exact webfont files
could not be extracted during system creation.

**Current approach:** `colors_and_type.css` loads **Rubik** and **JetBrains Mono**
from the Google Fonts CDN. Rubik is a rounded-geometric typeface chosen as a
close match to the rounded MOBOT wordmark; JetBrains Mono covers device IDs,
logs, and test metadata.

**To make this fully offline / brand-exact:**
1. Drop the real Mobot brand `.woff2` files into this folder.
2. Replace the `@import` at the top of `colors_and_type.css` with `@font-face`
   rules pointing at these files.
3. Update `--font-display` / `--font-body` / `--font-mono` if family names change.
