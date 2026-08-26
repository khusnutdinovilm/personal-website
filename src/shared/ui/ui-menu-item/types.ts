import type { RouteLocationRaw } from "vue-router";
import type { ButtonTarget } from "../ui-button";

export interface IUiMenuItemProps {
  label: string;
  icon?: string;
  selected?: boolean;
  to?: RouteLocationRaw;
  href?: string;
  target?: ButtonTarget;
}

export interface IUiMenuItemEmits {
  (e: "click", event: Event): void;
}
