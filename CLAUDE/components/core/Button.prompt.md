Bordered desktop button — use in toolbars, panel headers and confirmation rows; reach for `danger` on any destructive action.

```jsx
<Button variant="primary" onClick={save}>Aplicar</Button>
<Button danger onClick={kill}>Finalizar processo</Button>
```

Variants: `default` (hairline outline), `primary` (accent fill), `ghost` (text-only). Flags: `danger` (red outline, beats variant color), `disabled`, `size="sm"`. Hover lifts brightness ~15%; no shadow.
