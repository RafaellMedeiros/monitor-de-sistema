import React from "react";

/**
 * SegmentedControl — the inset pill-group used for every in-app switch:
 * Performance tabs, history range/metric, theme, refresh interval, units.
 */
export function SegmentedControl({ options = [], value, onChange, mono = false, style = {} }) {
  return (
    <div
      style={{
        display: "inline-flex",
        gap: "2px",
        background: "var(--bg-raised)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "2px",
        ...style,
      }}
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <div
            key={String(opt.value)}
            onClick={() => onChange && onChange(opt.value)}
            style={{
              padding: "5px 14px",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              userSelect: "none",
              fontSize: "12px",
              fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
              fontWeight: active ? 600 : 400,
              background: active ? "var(--bg-track)" : "transparent",
              color: active ? "var(--text-primary)" : "var(--text-secondary)",
              transition: "background var(--dur-fast)",
            }}
          >
            {opt.label}
          </div>
        );
      })}
    </div>
  );
}
