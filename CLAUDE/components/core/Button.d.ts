import React from "react";

export interface ButtonProps {
  /** Visual style. @default "default" */
  variant?: "default" | "primary" | "ghost";
  /** @default "md" */
  size?: "sm" | "md";
  /** Destructive outline (red border + text), overrides variant color. */
  danger?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Flat, hairline-bordered button for desktop toolbars and panels.
 * @startingPoint section="Core" subtitle="Buttons — default, primary, ghost, danger" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
