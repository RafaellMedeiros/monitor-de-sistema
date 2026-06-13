import React from "react";

export interface BadgeProps {
  /** Severity → color + default label. @default "info" */
  level?: "ok" | "warn" | "crit" | "info";
  /** Override the default label text. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Uppercase severity pill for event logs and status columns. */
export function Badge(props: BadgeProps): JSX.Element;
