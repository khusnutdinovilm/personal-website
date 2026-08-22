import type { RouteLocationRaw } from "vue-router";

export type ButtonVariant =
  "primary" | "default" | "ghost" | "success" | "error" | "warning" | "link";

export interface IUiButtonProps {
  iconPrepend?: string;
  iconAppend?: string;
  to?: RouteLocationRaw;
  href?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  btnLabel?: string;
}

export interface IUiButtonEmits {
  (e: "click", event: Event): void;
}
