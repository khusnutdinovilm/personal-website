import type { IActionableProps } from "~/shared/lib/use-actionable";

export interface IUiIconLinkProps extends IActionableProps {
  icon: string;
  label: string;
  size?: "sm" | "md" | "lg";
}
