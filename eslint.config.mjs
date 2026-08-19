import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt(
  {
    files: ["**/*.{ts,vue}"],
    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  eslintConfigPrettier
);
