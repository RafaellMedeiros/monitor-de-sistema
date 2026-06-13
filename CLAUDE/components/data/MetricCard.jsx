import React from "react";

/**
 * MetricCard — the summary tile: eyebrow label, big mono readout, sub-line.
 * Auto-colors the value by usage level when `level` is "auto" + `percent`.
 */
export function MetricCard({ label, value, sub, level = "none", percent, color, style = {} }) {
  let valueColor = color || "var(--text-primary)";
  if (level === "auto" && typeof percent === "number") {
    valueColor = percent >= 85 ? "var(--status-crit)" : percent >= 60 ? "var(--status-warn)" : "var(--status-ok)";
  } else if (level !== "none" && level !== "auto") {
    valueColor = { ok: "var(--status-ok)", warn: "var(--status-warn)", crit: "var(--status-crit)" }[level] || valueColor;
  }

  return (
    <div
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: "12px 14px",
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        ...style,
      }}
    >
      <div style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "1px", fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase" }}>
        {label}
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "22px", fontWeight: 600, color: valueColor }}>
        {value}
      </div>
      {sub != null && (
        <div style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--text-tertiary)" }}>{sub}</div>
      )}
    </div>
  );
}
