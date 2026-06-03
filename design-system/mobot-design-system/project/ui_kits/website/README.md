# Mobot — Website UI Kit

A high-fidelity, interactive recreation of the **mobot.io** marketing homepage, rebuilt from the live site's structure, copy, logos, and illustration style.

Open `index.html` for the full clickable homepage.

## Interactions
- **Role tabs** (Engineering / QA / Product / Marketing / Support) swap the use-case panel live.
- **"Schedule a Demo"** (nav, hero, panels, CTA) opens a demo-request modal with a success state.
- **Trusted-by** customer marquee auto-scrolls (pauses on hover).
- Cards lift on hover; CTA arrows nudge.

## Components (`*.jsx`)
| File | Exports | Notes |
|---|---|---|
| `ui.jsx` | `Button`, `Container`, `Eyebrow`, `Logo`, `TrustBar`, `Icon`, `useLucide` | Primitives. `Button` variants: `primary`, `grad`, `dark`, `ghost`, `ghost-light`. |
| `Nav.jsx` | `Nav` | Announcement bar + sticky blurred nav. |
| `Hero.jsx` | `Hero` | Navy hero with glowing robot mark. |
| `Roles.jsx` | `Roles`, `ROLES` | Role-based use-case tabs. |
| `Cases.jsx` | `Cases`, `Testimonials`, `CASES`, `QUOTES` | Gradient stat cards + 5-star quotes. |
| `Footer.jsx` | `Footer` | Navy CTA banner + 4-col footer. |
| `App.jsx` | `App`, `DemoModal` | Wires it together. |

## Conventions
- Pull tokens from `../../colors_and_type.css`; layout from `site.css`.
- Icons: **Lucide** via CDN (`<i data-lucide>` + `lucide.createIcons()` through the `useLucide()` hook). Tint with `--brand-indigo`.
- Each component file assigns its exports to `window` so sibling Babel scripts can use them.
- Logos referenced from `../../assets/`.

**Fidelity note:** layout, copy, palette and logos match the live site; exact illustrations and brand fonts are approximated (see root README caveats).
