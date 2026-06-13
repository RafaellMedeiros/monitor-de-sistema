Row in the fixed left sidebar that switches the active view.

```jsx
<NavItem icon={<DashIcon/>} label="Dashboard" active={view==="dash"} onClick={() => setView("dash")} />
```

Active row gets `accent-soft` background + accent text + semibold; inactive rows hover to `bg-raised`. Pair with a 16px stroke icon (Lucide-style).
