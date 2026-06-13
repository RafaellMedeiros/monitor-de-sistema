# Monitor de Sistema — Design System

A dark-first, high-density **desktop instrumentation** design system, extracted from the
*Monitor de Sistema* desktop app (a native-style CPU/RAM/disk/network monitor in the lineage of
Activity Monitor, Task Manager, htop and Grafana). It exists to make any companion surface —
dialogs, secondary tools, settings panels, status widgets — look like it shipped with the app.

**Source:** the production component is `Monitor de Sistema.dc.html` at the project root
(5 interactive views: Dashboard, Processos, Performance, Histórico, Configurações, with a live
telemetry engine). Everything here is derived from it.

---

## Content fundamentals

- **Language:** Brazilian Portuguese (pt-BR). Numbers use the local convention — comma decimal
  separator (`34,2%`, `1,42`), period thousands (`1.204 threads`).
- **Tone:** terse, technical, instrument-like. Labels are nouns, not sentences: *Processos*,
  *Carga média*, *Uso por núcleo*. No marketing voice, no exclamation, no second person.
- **Eyebrows** above metrics are short and **UPPERCASE**: `TEMPERATURA`, `UPTIME`, `PROCESSOS`.
- **Units are explicit and spaced:** `52 °C`, `3,40 GHz`, `42 MiB/s`, `2,4 MiB/s`. Binary units
  (`GiB`, `MiB`) by default; decimal (`GB`, `MB`) is a user preference.
- **Events / logs** read like a syslog line: `09:41:55 · ALERTA · CPU · Uso de CPU atingiu 88%`.
- **No emoji.** Iconography is line-art only (see Iconography).

## Visual foundations

- **Theme:** dark by default (`--bg-app:#0B0E13`), with a full light theme under
  `[data-theme="light"]`. Surfaces are near-black blues at very low chroma; light theme is cool
  greys on white.
- **Surfaces are flat.** Panels = `--bg-surface` + a single 1px hairline border (`--border`),
  `--radius-xl` (8px) corners, **no drop shadows**. Elevation (`--shadow-pop`) is reserved for
  truly floating things (menus, tooltips). The depth cue is the border + a one-step-lighter fill
  (`bg-surface` → `bg-raised` → `bg-track`), not shadow.
- **Color is meaning.** A single accent (`--accent`, blue) marks the active/selected state only.
  Usage levels speak through the status triad — **green `<60%` / amber `60–85%` / red `≥85%`** —
  applied consistently to values, meters, per-core bars and badges.
- **Charts** use four fixed series hues: CPU blue, memory purple, disk-read orange,
  network/disk-write cyan. Line `stroke-width:1.5` with `vector-effect:non-scaling-stroke`,
  a soft area fill under single-series charts, three faint horizontal gridlines.
- **Typography:** IBM Plex Sans for everything that is words; **IBM Plex Mono for everything that
  is a number** (readouts, PIDs, byte counts, axis ticks, the status bar). This split is the
  single most important rule — it is what makes the UI read as an instrument.
- **Density:** compact. 12–14px padding, 12px gaps, 13px base text, 32px controls, 192px sidebar.
  Prefer flex/grid + `gap` over margins.
- **Motion:** restrained. Meters/bars animate width over `--dur-bar` (0.4s, ease-out); controls
  change state over `--dur-fast` (0.15s); the only ambient animation is the 2s pulse on the live
  "MONITORANDO" dot. Hover = +15% brightness or a step to `bg-raised`; no scale/bounce.
- **Layout:** app shell is fixed title bar (38px) + fixed left sidebar (192px) + scrollable
  content + fixed status bar (26px). Window chrome carries macOS traffic-light dots.

## Iconography

- **Line icons only**, Lucide-style: 16px box, `stroke-width:2`, `currentColor`, round caps/joins,
  no fill. They inherit the nav row's color (muted → accent when active).
- The app draws its five nav glyphs inline as SVG `<path>` (gauge, list, activity, clock, sliders).
  Match that weight if you add icons; the closest CDN set is **Lucide** (`https://unpkg.com/lucide`).
- **No emoji, no icon font, no PNG icons, no unicode-glyph icons** — except the `↑ ↓` arrows used
  for upload/download and `°` for temperature, which are treated as typography, not icons.

---

## Index / manifest

- `styles.css` — root entry; `@import`s the four token files. **Link this one file.**
- `tokens/` — `fonts.css` (IBM Plex via Google Fonts), `colors.css` (palette + dark/light semantic
  aliases), `typography.css` (families + scale), `spacing.css` (space/radii/borders/motion).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing) shown in the Design System tab.
- `components/`
  - `core/` — **Button**, **SegmentedControl**, **Switch**, **Badge**, **StatusDot**
  - `data/` — **MetricCard**, **Sparkline**, **ProgressBar**
  - `navigation/` — **NavItem**
- `ui_kits/monitor/` — full **Dashboard** screen recreation (`index.html`).
- `SKILL.md` — Agent-Skill manifest for downloading/using this system in Claude Code.

> **Share setting:** to let others in your org use this, set the file type to **Design System**
> in the Share menu.
