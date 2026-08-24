import type { SupportedLang } from "../../lib/highlighter";

export type CodeBlockSize = "sm" | "md" | "lg";

export interface IUiCodeBlockProps {
  code: string;
  lang?: SupportedLang;
  lineNumbers?: boolean;
  size?: CodeBlockSize;
  numberGap?: number;
}
