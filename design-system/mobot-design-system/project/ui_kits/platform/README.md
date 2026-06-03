# Mobot — Platform UI Kit

A high-fidelity recreation of the **Mobot platform** (`app.teammobot.com`) — the logged-in app where customers review robot-executed test runs.

> ⚠️ **Reconstructed from product descriptions, not the live app.** The platform sits behind login, so this kit is a faithful *approximation* of the documented experience (side-by-side baseline-vs-result reports, pass/fail flags, CSM bug notes, device/network logs, screenshots & video per run). Swap in real screens/code when available.

Open `index.html`. It boots to the **Test Runs** list; click any row to open the **Test Report** detail; "Back to runs" returns.

## Screens & interactions
- **Test Runs** — summary stat tiles (pass rate, runs, open bugs, devices), status filter pills, and a runs table with pass / fail / flaky / running badges. Rows are clickable.
- **Test Report** — status header + run metadata (device, run id, robot, duration), tabbed body (Steps / Device logs / Network / Video), step-by-step **baseline vs robot-result** screenshots with tap indicators, and a side panel with the **CSM verification note**, downloadable artifacts, and auto-filed bugs.

## Components (`*.jsx`)
| File | Exports |
|---|---|
| `shell.jsx` | `Sidebar`, `Topbar`, `Icon`, `useLucide` |
| `Runs.jsx` | `RunsView`, `StatusBadge`, `RUNS`, `BADGE` |
| `Report.jsx` | `ReportView` |
| `App.jsx` | `App` (view routing) |

## Conventions
- Tokens from `../../colors_and_type.css`; layout from `shell.css`.
- Navy sidebar (`--mobot-ink`) + light content area; indigo for the active nav item and primary actions.
- Icons: **Lucide** via CDN. Status colors use the QA semantic tokens (`--pass`, `--fail`, `--warn`, `--info`).
- Mono (`--font-mono`) for device IDs, run IDs, actions, and logs.
