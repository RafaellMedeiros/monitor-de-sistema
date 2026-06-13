Tiny round indicator for process status, network interfaces, and the pulsing "MONITORANDO" dot.

```jsx
<StatusDot level="ok" />
<StatusDot level="ok" pulse size={7} />   {/* live */}
```

Levels map to status colors; `idle` is muted grey, `accent` is brand blue. `pulse` for live telemetry.
