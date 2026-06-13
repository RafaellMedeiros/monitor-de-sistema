import React from "react";

export interface MetricCardProps {
  /** Uppercase eyebrow, e.g. "TEMPERATURA". */
  label: React.ReactNode;
  /** Big mono readout, e.g. "52 °C". */
  value: React.ReactNode;
  /** Optional sub-line. */
  sub?: React.ReactNode;
  /** Color strategy. "auto" uses `percent` thresholds (60/85). @default "none" */
  level?: "none" | "auto" | "ok" | "warn" | "crit";
  /** Value 0–100 used when level="auto". */
  percent?: number;
  /** Explicit value color (wins over level). */
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Summary stat tile for dashboard headers.
 * @startingPoint section="Data" subtitle="MetricCard — labelled stat tile" viewport="700x140"
 */
export function MetricCard(props: MetricCardProps): JSX.Element;
