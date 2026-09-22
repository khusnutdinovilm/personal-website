export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recommended-vue/scss"],
  rules: {
    "selector-class-pattern": [
      "^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$",
      {
        message: "Ожидается BEM kebab-case: block__element--modifier",
      },
    ],
    "scss/dollar-variable-empty-line-before": null,
  },
};
