import React from "react";

/** NavItem — sidebar navigation row with icon + label and active state. */
export function NavItem({ icon, label, active = false, onClick, style = {} }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "8px 10px",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "13px",
        fontWeight: active ? 600 : 400,
        background: active ? "var(--accent-soft)" : "transparent",
        color: active ? "var(--accent)" : "var(--text-secondary)",
        transition: "background var(--dur-fast)",
        ...style,
      }}
      onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "var(--bg-raised)"; }}
      onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}
    >
      {icon && <span style={{ flexShrink: 0, display: "inline-flex" }}>{icon}</span>}
      <span>{label}</span>
    </div>
  );
}
