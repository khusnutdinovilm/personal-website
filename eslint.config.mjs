import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt(
  {
    files: ["**/*.{ts,vue}"],
    rules: {
      "vue/block-order": [
        "error",
        {
          order: ["template", "script", "script[setup]", ["style[scoped]", "style"]],
        },
      ],
      "vue/component-definition-name-casing": ["error", "kebab-case"],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always", // Для пустых элементов вроде <img/> и <input/>
            normal: "never", // Обычные теги не должны быть самозакрывающимися
            component: "always", // Самозакрывающиеся компоненты
          },
          svg: "always", // Самозакрывающиеся SVG теги
          math: "always", // Самозакрывающиеся MathML теги
        },
      ],
      "vue/define-macros-order": [
        "error",
        {
          order: ["defineOptions", "defineProps", "defineEmits", "defineModel", "defineSlots"],
          defineExposeLast: true,
        },
      ],
      "vue/attributes-order": [
        "error",
        {
          order: [
            "DEFINITION",
            "LIST_RENDERING",
            "CONDITIONALS",
            "RENDER_MODIFIERS",
            "GLOBAL",
            "UNIQUE",
            "SLOT",
            "TWO_WAY_BINDING",
            "OTHER_DIRECTIVES",
            ["ATTR_DYNAMIC", "ATTR_STATIC", "ATTR_SHORTHAND_BOOL"],
            "EVENTS",
            "CONTENT",
          ],
        },
      ],
      "vue/multi-word-component-names": "error",
      "vue/no-v-html": "warn",
      "vue/v-slot-style": ["error", "shorthand"],
      "vue/component-name-in-template-casing": ["error", "kebab-case"],
      "vue/custom-event-name-casing": ["error", "kebab-case"],
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    // Nuxt-страницы и лейауты — односложные имена это норма (index, default, about…)
    files: ["src/app/routes/**/*.vue", "src/app/layouts/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  eslintConfigPrettier
);
