Inset pill-group for mutually-exclusive choices — Performance tabs, history range/metric, theme, refresh interval, units. The workhorse switch of the app.

```jsx
<SegmentedControl
  value={tab}
  onChange={setTab}
  options={[{label:"CPU",value:"cpu"},{label:"Memória",value:"mem"}]}
/>
```

Use `mono` for numeric option sets (intervals like `0,5 s` / `1 s`, units). Active segment gets `bg-track` + semibold.
