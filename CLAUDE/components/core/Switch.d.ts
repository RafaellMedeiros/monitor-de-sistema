import React from "react";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Compact toggle for boolean settings rows. */
export function Switch(props: SwitchProps): JSX.Element;
