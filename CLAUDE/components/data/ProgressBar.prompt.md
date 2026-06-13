Thin horizontal meter for per-core CPU load, disk volume fill, swap and memory.

```jsx
<ProgressBar value={72} />                {/* auto amber */}
<ProgressBar value={40} color="var(--chart-mem)" level="none" />
```

`level="auto"` (default) colors the fill green/amber/red at 60/85. Width animates with the standard bar duration. Pair with a mono `%` readout to the right.
