Labelled summary tile — the row of stats above the dashboard charts (temperature, uptime, processes, load).

```jsx
<MetricCard label="TEMPERATURA" value="52 °C" sub="CPU · limite 96 °C" level="auto" percent={54} />
<MetricCard label="UPTIME" value="12d 22h 9min" sub="desde a última inicialização" />
```

Eyebrow is uppercased automatically; value renders in mono. `level="auto"` + `percent` colors the value green/amber/red at 60/85 thresholds.
