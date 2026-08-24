import type { RouteLocationRaw } from "vue-router";

export type ButtonVariant =
  "primary" | "default" | "ghost" | "success" | "error" | "warning" | "link";

export type ButtonTarget = "_blank" | "_self" | "_parent" | "_top";

export interface IUiButtonProps {
  iconPrepend?: string;
  iconAppend?: string;
  to?: RouteLocationRaw;
  href?: string;
  target?: ButtonTarget;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  btnLabel?: string;
}

export interface IUiButtonEmits {
  (e: "click", event: Event): void;
}
