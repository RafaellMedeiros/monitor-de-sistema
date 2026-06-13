import React from "react";

export interface SparklineProps {
  /** Primary series (oldest → newest). */
  data: number[];
  /** Optional second series (e.g. upload vs download). */
  data2?: number[] | null;
  /** Primary stroke color. @default "var(--chart-cpu)" */
  color?: string;
  /** Second stroke color. @default "var(--chart-mem)" */
  color2?: string;
  /** Area fill under the primary line; pass "" to disable. */
  fill?: string;
  /** Y max, or "auto" to scale to the data peak. @default "auto" */
  max?: number | "auto";
  /** Show horizontal grid lines. @default true */
  grid?: boolean;
  /** Pixel height of the rendered SVG. @default 56 */
  height?: number;
  style?: React.CSSProperties;
}

/**
 * Live area/line chart for dashboard tiles and detail panels.
 * @startingPoint section="Data" subtitle="Sparkline — live area/line chart" viewport="700x160"
 */
export function Sparkline(props: SparklineProps): JSX.Element;
