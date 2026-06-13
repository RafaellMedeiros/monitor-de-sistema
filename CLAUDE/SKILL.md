---
name: monitor-de-sistema-design
description: Use this skill to generate well-branded interfaces and assets for the Monitor de Sistema desktop app — a dark-first, high-density system-monitoring UI (Activity Monitor / htop / Grafana lineage), either for production or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create
static HTML files for the user to view. If working on production code, copy assets and read the
rules here to become an expert in designing with this system.

Quick orientation:
- Link `styles.css` for tokens. Dark is default; add `data-theme="light"` on a wrapper for light.
- **The one rule that matters most:** IBM Plex Sans for words, IBM Plex Mono for every number.
- Usage color triad: green `<60%` / amber `60–85%` / red `≥85%`. One blue accent for active state.
- Flat panels: `--bg-surface` + 1px `--border`, 8px radius, no shadow. Compact spacing.
- Components live in `components/` (Button, SegmentedControl, Switch, Badge, StatusDot, MetricCard,
  Sparkline, ProgressBar, NavItem). A full Dashboard screen is in `ui_kits/monitor/`.

If the user invokes this skill without other guidance, ask them what they want to build, ask a few
questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending
on the need.
