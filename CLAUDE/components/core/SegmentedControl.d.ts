import React from "react";

export interface SegOption {
  label: React.ReactNode;
  value: string | number;
}

export interface SegmentedControlProps {
  options: SegOption[];
  value: string | number;
  onChange?: (value: string | number) => void;
  /** Render labels in IBM Plex Mono (for numeric intervals/units). @default false */
  mono?: boolean;
  style?: React.CSSProperties;
}

/**
 * Inset segmented switch for tabs, ranges and settings toggles.
 * @startingPoint section="Core" subtitle="Segmented control — tabs, ranges, settings" viewport="700x120"
 */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
