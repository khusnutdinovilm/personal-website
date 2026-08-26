import type { RouteLocationRaw } from "vue-router";

export type ActionableTarget = "_blank" | "_self" | "_parent" | "_top";

export interface IActionableProps {
  to?: RouteLocationRaw;
  href?: string;
  target?: ActionableTarget;
  disabled?: boolean;
}
