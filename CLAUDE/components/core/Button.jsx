import React from "react";

/**
 * Button — bordered control used across toolbars and panels.
 * Flat, hairline-bordered by default; `primary` fills with accent;
 * `danger` is the destructive outline used for "Finalizar processo".
 */
export function Button({
  variant = "default",
  size = "md",
  danger = false,
  disabled = false,
  children,
  onClick,
  style = {},
  ...rest
}) {
  const pad = size === "sm" ? "5px 12px" : "7px 14px";
  const fontSize = size === "sm" ? "12px" : "13px";

  const palettes = {
    default: { bg: "transparent", color: "var(--text-primary)", border: "var(--border)" },
    primary: { bg: "var(--accent)", color: "#08111E", border: "var(--accent)" },
    ghost:   { bg: "transparent", color: "var(--text-secondary)", border: "transparent" },
  };
  let p = palettes[variant] || palettes.default;
  if (danger) p = { bg: "transparent", color: "var(--status-crit)", border: "var(--status-crit)" };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        font: "inherit",
        fontFamily: "var(--font-sans)",
        fontSize,
        fontWeight: 600,
        padding: pad,
        borderRadius: "var(--radius-md)",
        border: `1px solid ${p.border}`,
        background: p.bg,
        color: p.color,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "filter var(--dur-fast) var(--ease-out), opacity var(--dur-fast)",
        whiteSpace: "nowrap",
        ...style,
      }}
      onMouseEnter={(e) => !disabled && (e.currentTarget.style.filter = "brightness(1.15)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
      {...rest}
    >
      {children}
    </button>
  );
}
