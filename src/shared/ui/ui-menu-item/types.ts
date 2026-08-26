import type { IActionableProps } from "~/shared/lib/use-actionable";

export interface IUiMenuItemProps extends IActionableProps {
  label: string;
  icon?: string;
  selected?: boolean;
}

export interface IUiMenuItemEmits {
  (e: "click", event: Event): void;
}
