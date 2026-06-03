# Mobot Design System

> **Mobot** — *Hire a Robot Fleet for Manual Testing.*
> Robot-powered, AI-enabled QA-as-a-service that runs mission-critical mobile app tests on **real, physical devices** using **real mechanical robots** supervised by human QA experts.

This repository is a **design system**: brand foundations, color + type tokens, logos and assets, written voice, and high-fidelity UI-kit recreations of Mobot's surfaces. Use it to produce on-brand interfaces, decks, mocks, and prototypes for Mobot.

---

## 1. Company & product context

Mobot (founded 2018, New York, NY; CEO **Eden Full Goh**) operates a fleet of **300+ real iOS & Android devices** physically tapped, swiped and toggled by **mechanical robots**. This lets Mobot automate the *"unautomatable"* — out-of-app / inter-app flows (deep links, push notifications, camera, Bluetooth/WiFi peripherals, multi-device hand-offs, payments, biometrics) that emulators and traditional frameworks can't cover. Robots execute test plans; **human Customer Success Managers (CSMs)** validate results, add bug notes, and publish same-day reports into the Mobot platform and integrations (e.g. Jira).

**The pitch in one line:** automate the manual, real-device testing humans hate doing — so engineering can build, QA can scale, and releases ship faster with fewer bugs.

### Products / surfaces
| Product | What it is | Surface |
|---|---|---|
| **Mobot Managed** | Fully-managed QA-as-a-service. Robots + CSM, test-suite maintenance, automatic bug reporting. The core offering. | Marketing site + platform |
| **Mobot Live** | Premium self-service add-on: control robots, run test cases on 300+ devices, rerun with AI bug detection. | Web app |
| **Mobot Insights** | Mobile-campaign monitoring for marketing/growth (critical journeys, real-time alerts, Jira tickets). | Web app |
| **Marketing website** (`mobot.io`) | Webflow-built. Hero, role-based use cases, case studies, testimonials, pricing. | Public web |
| **Mobot Platform** (`app.teammobot.com`) | The logged-in app: side-by-side baseline-vs-result test reports, pass/fail flags, CSM bug notes, device/network logs, screenshots & video per run. | Web app |

### Audiences
Sold to mobile teams across **Engineering, QA, Product, Marketing, and Support**. Buyers are eng leaders & QA managers at high-growth mobile companies (customers named publicly include Rappi, Citizen, Persona, Sandboxx, Homebase, Branch, Mapbox, Step, KOHO).

### Sources used to build this system
- **Logo:** `uploads/MobotLogo.png` (provided — white wordmark + robot mark).
- **Website:** `https://www.mobot.io/` (homepage, why-mobot, how-it-works, features, faq, mobot-managed, about) — read for copy, structure, asset URLs.
- **Illustration & icon style:** observed from live Webflow CDN assets (isometric 3D, violet→blue→pink gradients) under `cdn.prod.website-files.com/5f4e41fd21412324f49c63a6/…`.
- **Press:** BusinessWire Series A announcement (Aug 2022, $12.5M, Cota Capital).
- **App:** `app.teammobot.com` (login) and product descriptions of test reports — the platform UI kit is **reconstructed from documented behavior**, not a pixel source (see caveats).

---

## 2. Content fundamentals (voice & tone)

**Vibe:** confident, pl-spoken, lightly playful. Robots are the hero and a source of charm ("Robot Testing…Commence!", "🤖 Follow the Adventures of Mobot", "Adopt a Robot") — but the underlying promise is *serious, mission-critical reliability*. Optimistic and outcomes-driven, never jargon-heavy.

- **Person:** Speaks to **"you / your team"**; Mobot is **"we / our robots."** Direct second person.
- **Casing:** Marketing headlines use **Title Case**. Eyebrows/labels are **UPPERCASE** ("UNIFIED AUTOMATION FOR EVERY TEAM", "try mobot and:"). Body is sentence case.
- **Sentence shape:** Lead with the customer's *pain*, then Mobot's *fix*, then the *outcome*. Often a punchy two-beat: short problem sentence → short solution sentence. e.g. *"Engineers want to build, not be burdened by manual testing. Automate the un-automatable and free up your team."*
- **Signature phrases:** "Automate the unautomatable," "100% coverage," "real devices, not emulators," "the way humans actually use them," "QA-as-a-service," "ship with confidence," "the automation ceiling."
- **Numbers as proof:** Outcomes are quantified and front-and-center — "300+ devices," "30%+ QA efficiency," "20h+/week saved," "$150k recovered revenue," "4.2 → 4.8 App Store rating," "99.9% crash-free." Stat-led case-study cards are a core pattern.
- **Emoji:** **Used sparingly** on social/blog and a few nav accents (🚀 Introducing Mobot Live, 🤖, 💸, 🪳). **Avoid emoji in the product UI and formal marketing body.** When in doubt, prefer the robot mark or a real icon over an emoji.
- **Punctuation flourishes:** Em-dashes for asides; ellipses + exclamation for the playful robot voice ("Robot Testing…Commence!"); arrows on CTAs ("Schedule a Demo →").
- **CTAs:** "Schedule a Demo →", "Try Mobot →", "Explore Use Cases →", "Read Case Study →". Always action-first, often arrow-suffixed.

**Do:** be specific, lead with outcomes, let the robots be likable.
**Don't:** overpromise vaguely, drown in adjectives, lean on emoji in-product, or sound like generic enterprise SaaS.

---

## 3. Visual foundations

**Overall feel:** clean, bright, techy-but-friendly. High-contrast **deep navy (`#101820`)** anchors hero/footer moments against lots of **white space**, accented by **soft violet→blue→pink gradients** drawn from the brand's isometric illustrations. Rounded geometry everywhere (echoing the rounded MOBOT wordmark and the round robot mark) keeps a serious B2B product approachable.

- **Color:** Monochrome navy + white backbone. The **gradient** (`--brand-violet → --brand-indigo → --brand-blue`, sometimes adding `--brand-pink`) is the signature flourish — used in illustrations, hero accents, gradient text, and key CTAs. Solid **indigo `#6C5CE7`** is the primary interactive accent. QA semantics use **green = pass, red = fail, amber = flaky/attention**, gold for review stars.
- **Type:** One rounded-geometric family (**Rubik** as the stand-in for the brand wordmark feel) across display + body; **JetBrains Mono** for device IDs, logs, and test metadata. Display weights are 600–700, tight tracking; body is 400 at generous 1.55 line-height. Eyebrows are uppercase with wide tracking.
- **Backgrounds:** Predominantly flat **white / `#F4F6F8`** in light sections; **`#101820`** for hero, CTA, and footer "moments." No photographic hero — a looping **product/robot video** and **isometric vector illustrations** carry the visuals. Occasional very-soft gradient washes (`--brand-gradient-soft`) behind feature cards. No noisy textures or grain.
- **Imagery vibe:** **Isometric 3D vector illustrations**, light and airy, cool-leaning, with violet/blue/pink gradient fills, floating geometric confetti (diamonds, plus-signs), soft drop shadows. Cool, optimistic, never photographic or gritty. Customer logos shown in monochrome/grayscale "Trusted by" marquees.
- **Animation:** Tasteful and functional — gentle fades/slide-ups on scroll, a horizontally-scrolling logo marquee, role/automation tabs that swap content, looping explainer video. Smooth ease-out (~200–300ms). No bounce, no aggressive parallax. Respect `prefers-reduced-motion`.
- **Hover states:** Buttons darken/lift slightly (subtle `translateY(-1px)` + shadow); links shift to indigo; cards raise shadow (`--shadow-sm`→`--shadow-md`). Arrow CTAs nudge the arrow right.
- **Press states:** Quick settle back to flat (remove lift), slight darken. No big scale-down.
- **Borders:** Hairline `1px` in `--gray-200` on light. On dark, borders are `--mobot-ink-3` or subtle white at low alpha. Inputs and cards favor borders over heavy shadows.
- **Shadows:** Soft, cool-tinted, low-opacity navy (`rgba(16,24,32,…)`). Elevation ladder xs→lg. CTAs/gradient elements may use a colored `--shadow-brand` glow. No hard or black drop shadows.
- **Corner radii:** Friendly and rounded. Buttons & inputs ≈ `10–14px`; cards ≈ `14–20px`; pills/tags fully rounded (`--r-pill`); the robot/logo mark is circular. Larger containers use `20–28px`.
- **Cards:** White, `--r-lg` corners, `1px --gray-200` border **or** `--shadow-sm` (rarely both heavy), generous `24–32px` padding. Stat/case-study cards put a big gradient or navy number up top.
- **Transparency & blur:** Sparingly — a sticky translucent nav with slight backdrop-blur; soft gradient overlays. Not a glassmorphism-heavy brand.
- **Layout rules:** Centered max-width container (~1200px) with comfortable gutters; clear vertical rhythm with `64–96px` section padding; sticky top nav; CTA + footer on navy. Content is generously spaced, never dense.
- **Buttons:** Primary = solid **indigo** (or brand gradient for hero) with white text, `--r-md`, arrow suffix. Secondary = navy/white outline or ghost. Pills for tabs/filters.

---

## 4. Iconography

- **Brand mark:** The **Mobot robot** — a round head in negative space inside a white circle, three antennae tipped with dots, two "broadcast" wave arcs, and two round eyes. Always monochrome (white on dark, navy on light). Provided in `assets/`. Treat the circular robot head as the standalone app/favicon mark.
- **UI icons:** The marketing site uses **custom thin-line / lightly-filled vector icons**, often **tinted violet/indigo** (e.g. lightbulb, "cyborg head," lock, gear), matching the illustration palette. They are simple, rounded, single-accent-color line icons.
- **Recommended icon set for new work:** **[Lucide](https://lucide.dev)** (CDN) — its rounded-cap, ~2px stroke, geometric style is the closest open match to Mobot's line icons. Tint with `--brand-indigo` or `--fg-2`. **FLAG:** this is a substitution; Mobot's own marketing icons are bespoke SVGs we could not download (see caveats). Use Lucide consistently rather than mixing sets.
- **Emoji:** brand-flavor only (social/blog, occasional nav badge like 🚀/🤖). **Not** part of the product UI vocabulary — prefer the robot mark or a Lucide icon.
- **Status glyphs:** Use filled circular check (pass), x/alert (fail), exclamation (flaky) in the semantic colors — these mirror the platform's pass/fail report language.

---

## 5. Index / manifest

**Root**
- `README.md` — this file.
- `SKILL.md` — Agent-Skill entry point (Claude Code compatible).
- `colors_and_type.css` — all color, type, spacing, radius & shadow tokens + semantic classes. **Import this in every artifact.**

**Folders**
- `assets/` — logos & marks: `mobot-logo-white.png`, `mobot-logo-navy.png`, `mobot-icon-white.png`, `mobot-icon-navy.png`.
- `fonts/` — `README.md` (font sourcing note; brand uses Google-CDN Rubik for now).
- `preview/` — Design-System tab cards (colors, type, spacing, components, brand).
- `ui_kits/website/` — marketing-site UI kit (`index.html` + JSX components).
- `ui_kits/platform/` — Mobot platform / test-report UI kit (`index.html` + JSX components). *Reconstructed from product docs.*
- `scraps/` — working files (asset extraction, screenshots). Not part of the system.

---

## 6. Caveats / open items
- **Fonts:** exact brand webfonts couldn't be extracted from the live Webflow CSS. **Rubik** (Google Fonts CDN) is used as a close match to the rounded-geometric MOBOT wordmark. *Please share the real font files to embed under `fonts/`.*
- **Illustrations:** Mobot's signature isometric SVG illustrations are hosted on a CDN that blocked download. They're documented and approximated (gradient + isometric motif) but **not** included as files. *Please export & share the illustration set if you want them reusable.*
- **UI icons:** substituted with **Lucide** (closest match). Swap for Mobot's bespoke SVGs if/when available.
- **Platform UI kit** is reconstructed from written product descriptions (side-by-side reports, pass/fail, logs, video) — **not** from the live app, which is behind login. Treat as a faithful approximation pending real screens/code.
- **Colors** were sampled from rendered illustrations + logo; hexes are accurate to the eye but not pulled from a brand spec.
