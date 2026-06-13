import React from "react";

/** Switch — small iOS-style toggle for settings (alerts, preferences). */
export function Switch({ checked = false, onChange, disabled = false, style = {} }) {
  return (
    <div
      role="switch"
      aria-checked={checked}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
        width: "36px",
        height: "20px",
        borderRadius: "var(--radius-pill)",
        background: checked ? "var(--accent)" : "var(--bg-track)",
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        flexShrink: 0,
        transition: "background var(--dur-fast)",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "2px",
          left: checked ? "18px" : "2px",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: "#FFFFFF",
          transition: "left var(--dur-fast) var(--ease-out)",
          boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
        }}
      />
    </div>
  );
}
