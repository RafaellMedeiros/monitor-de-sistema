# Monitor de Sistema — UI Kit

High-fidelity recreation of the **Monitor de Sistema** desktop app's primary view (Dashboard),
built from the production `Monitor de Sistema.dc.html`. Demonstrates the full app chrome:
window title bar, fixed left sidebar, summary metric tiles, the 2×2 live-chart grid, and the
bottom status bar.

- `index.html` — the Dashboard screen (static recreation; charts drawn from sample series).

The source app also ships Processos (sortable table + kill), Performance (CPU/Mem/Disk/Net tabs),
Histórico (period charts + event log) and Configurações (theme, interval, units, alerts) views —
see the root `Monitor de Sistema.dc.html` for the live, interactive original.

Composes design-system tokens directly. In product code, build these screens out of the
`MetricCard`, `Sparkline`, `ProgressBar`, `SegmentedControl`, `Button`, `Badge`, `StatusDot`
and `NavItem` primitives.
