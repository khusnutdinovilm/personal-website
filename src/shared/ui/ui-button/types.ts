import type { IActionableProps } from "~/shared/lib/use-actionable";

export type ButtonVariant =
  "primary" | "default" | "ghost" | "success" | "error" | "warning" | "link";

export interface IUiButtonProps extends IActionableProps {
  iconPrepend?: string;
  iconAppend?: string;
  variant?: ButtonVariant;
  loading?: boolean;
  btnLabel?: string;
}

export interface IUiButtonEmits {
  (e: "click", event: Event): void;
}
