import React from "react";

const MAP = {
  ok:      { fg: "var(--status-ok)",   bg: "var(--status-ok-soft)",   label: "OK" },
  warn:    { fg: "var(--status-warn)", bg: "var(--status-warn-soft)", label: "ALERTA" },
  crit:    { fg: "var(--status-crit)", bg: "var(--status-crit-soft)", label: "CRÍTICO" },
  info:    { fg: "var(--text-secondary)", bg: "var(--neutral-soft)",  label: "INFO" },
};

/** Badge — uppercase status pill for logs and severities. */
export function Badge({ level = "info", children, style = {} }) {
  const m = MAP[level] || MAP.info;
  return (
    <span
      style={{
        display: "inline-block",
        padding: "1px 9px",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-sans)",
        fontSize: "10px",
        fontWeight: 600,
        letterSpacing: "0.5px",
        color: m.fg,
        background: m.bg,
        ...style,
      }}
    >
      {children || m.label}
    </span>
  );
}
