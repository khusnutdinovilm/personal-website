import type { ITextControlProps } from "../ui-text-field";

export interface IUiTextInputProps extends ITextControlProps {
  type?: "text" | "email" | "password" | "number";
}
