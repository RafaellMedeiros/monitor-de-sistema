Compact real-time chart for any rolling metric — CPU, memory, disk I/O, network. Keep a fixed-length history array in state and push each tick.

```jsx
<Sparkline data={cpuHist} color="var(--chart-cpu)" fill="var(--chart-cpu-fill)" />
<Sparkline data={down} data2={up} color="var(--chart-net)" color2="var(--chart-mem)" fill="" />
```

Stretches to fill its parent (give the parent a height). `max="auto"` scales to the peak; pass a fixed number for % charts (use `100`). For two-series charts (read/write, up/down) set `fill=""`.
