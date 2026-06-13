import React from "react";

const COLORS = {
  ok: "var(--status-ok)",
  warn: "var(--status-warn)",
  crit: "var(--status-crit)",
  idle: "var(--text-tertiary)",
  accent: "var(--accent)",
};

/** StatusDot — small state indicator, optionally pulsing (live). */
export function StatusDot({ level = "ok", size = 8, pulse = false, color, style = {} }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: color || COLORS[level] || COLORS.ok,
        flexShrink: 0,
        animation: pulse ? "ds-pulse 2s ease-in-out infinite" : "none",
        ...style,
      }}
    >
      <style>{"@keyframes ds-pulse{0%,100%{opacity:1}50%{opacity:.35}}"}</style>
    </span>
  );
}
