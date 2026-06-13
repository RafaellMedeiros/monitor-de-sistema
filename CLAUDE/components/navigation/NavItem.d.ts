import React from "react";

export interface NavItemProps {
  /** Leading icon node (16px stroke SVG recommended). */
  icon?: React.ReactNode;
  label: React.ReactNode;
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Left-sidebar navigation row. */
export function NavItem(props: NavItemProps): JSX.Element;
