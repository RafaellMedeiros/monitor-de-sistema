import React from "react";

/** ProgressBar — thin meter; auto-colors by level when `level="auto"`. */
export function ProgressBar({ value = 0, level = "auto", color, height = 8, track, style = {} }) {
  const pct = Math.max(0, Math.min(100, value));
  let fillColor = color || "var(--accent)";
  if (level === "auto") {
    fillColor = pct >= 85 ? "var(--status-crit)" : pct >= 60 ? "var(--status-warn)" : "var(--status-ok)";
  } else if (level !== "none") {
    fillColor = { ok: "var(--status-ok)", warn: "var(--status-warn)", crit: "var(--status-crit)" }[level] || fillColor;
  }

  return (
    <div
      style={{
        height: `${height}px`,
        borderRadius: "var(--radius-xs)",
        background: track || "var(--bg-track)",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          borderRadius: "var(--radius-xs)",
          background: fillColor,
          transition: "width var(--dur-bar) var(--ease-out)",
        }}
      />
    </div>
  );
}
