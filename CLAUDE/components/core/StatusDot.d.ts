import React from "react";

export interface StatusDotProps {
  /** @default "ok" */
  level?: "ok" | "warn" | "crit" | "idle" | "accent";
  /** Diameter in px. @default 8 */
  size?: number;
  /** Pulse animation for "live / monitoring" indicators. @default false */
  pulse?: boolean;
  /** Explicit color override (wins over level). */
  color?: string;
  style?: React.CSSProperties;
}

/** Small round state indicator for process rows, interfaces and the live badge. */
export function StatusDot(props: StatusDotProps): JSX.Element;
