---
name: mobot-design
description: Use this skill to generate well-branded interfaces and assets for Mobot (robot-powered mobile QA testing), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, logos, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key files:
- `README.md` — company context, content/voice, visual foundations, iconography, manifest.
- `colors_and_type.css` — color, type, spacing, radius & shadow tokens + semantic classes. Import this in every artifact.
- `assets/` — Mobot logos & robot mark (white + navy).
- `preview/` — small spec cards for colors, type, spacing, components, brand.
- `ui_kits/website/` — interactive marketing-homepage recreation (React + JSX).
- `ui_kits/platform/` — test-runs dashboard + report recreation (React + JSX).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Brand cheat-sheet: deep navy `#101820` + white, indigo `#6C5CE7` accent, signature violet→blue→pink gradients, rounded-geometric type (Rubik stand-in) + JetBrains Mono for logs/IDs, Lucide icons, friendly rounded corners, soft cool shadows. Voice: confident, outcome-driven, lightly playful about the robots ("Automate the unautomatable"). Pass = green, fail = red, flaky = amber.
