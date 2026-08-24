import { createHighlighter, type Highlighter } from "shiki";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";

import { portfolioDark } from "./theme";

export const SUPPORTED_LANGS = [
  "ts",
  "js",
  "vue",
  "scss",
  "css",
  "html",
  "json",
  "bash",
  "markdown",
] as const;

export type SupportedLang = (typeof SUPPORTED_LANGS)[number];

export const THEME_NAME = "portfolio-dark";

let instance: Promise<Highlighter> | null = null;

export const getHighlighter = () => {
  instance ??= createHighlighter({
    themes: [portfolioDark],
    langs: [...SUPPORTED_LANGS],
    engine: createJavaScriptRegexEngine(),
  });

  return instance;
};
