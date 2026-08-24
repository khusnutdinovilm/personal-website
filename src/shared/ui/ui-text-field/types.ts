export type TextFieldVariant = "default" | "success" | "error" | "warning";

export interface IUiTextFieldProps {
  id: string;
  label?: string;
  hintText?: string;
  variant?: TextFieldVariant;
  disabled?: boolean;
}

export interface ITextControlProps extends Omit<IUiTextFieldProps, "variant"> {
  icon?: string;
  isSuccess?: boolean;
  isError?: boolean;
  isWarning?: boolean;
}
