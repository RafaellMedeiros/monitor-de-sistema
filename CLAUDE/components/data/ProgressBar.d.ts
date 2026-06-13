import React from "react";

export interface ProgressBarProps {
  /** Fill percentage 0–100. */
  value: number;
  /** Color strategy. "auto" = green/amber/red at 60/85. @default "auto" */
  level?: "auto" | "none" | "ok" | "warn" | "crit";
  /** Explicit fill color (wins over level). */
  color?: string;
  /** Bar thickness in px. @default 8 */
  height?: number;
  /** Track color override. */
  track?: string;
  style?: React.CSSProperties;
}

/** Thin usage meter for per-core load, disk volumes, swap and memory bars. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
