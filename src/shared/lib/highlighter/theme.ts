import type { ThemeRegistrationRaw } from "shiki";

export const portfolioDark: ThemeRegistrationRaw = {
  name: "portfolio-dark",
  type: "dark",
  colors: {
    "editor.background": "transparent",
    "editor.foreground": "#90a1b9",
  },
  settings: [
    // база
    {
      scope: ["source", "punctuation", "meta.brace", "meta.delimiter"],
      settings: { foreground: "#90a1b9" },
    },

    // комментарии
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: { foreground: "#90a1b9" },
    },

    // ключевые слова / storage
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.operator.new",
        "keyword.operator.expression",
        "storage.type",
        "storage.modifier",
        "variable.language.this",
      ],
      settings: { foreground: "#615fff" },
    },

    // типы / классы / интерфейсы
    {
      scope: [
        "entity.name.type",
        "entity.name.class",
        "entity.other.inherited-class",
        "support.type",
        "support.class",
        "meta.type.annotation entity.name.type",
      ],
      settings: { foreground: "#00d5be" },
    },

    // строки
    {
      scope: ["string", "string.quoted", "string.template", "punctuation.definition.string"],
      settings: { foreground: "#ffb86a" },
    },

    // свойства и методы объекта
    {
      scope: [
        "variable.other.property",
        "variable.other.object.property",
        "meta.property-name",
        "support.variable.property",
        "entity.name.function.member",
        "meta.function-call.method",
      ],
      settings: { foreground: "#ff8904" },
    },

    // числа / константы / booleans
    {
      scope: [
        "constant.numeric",
        "constant.language",
        "constant.language.boolean",
        "constant.other",
      ],
      settings: { foreground: "#c27aff" },
    },

    // имена функций-объявлений
    {
      scope: ["entity.name.function", "support.function", "meta.function entity.name.function"],
      settings: { foreground: "#f8fafc" },
    },

    // параметры / переменные
    {
      scope: [
        "variable",
        "variable.parameter",
        "meta.definition.variable",
        "variable.other.readwrite",
      ],
      settings: { foreground: "#90a1b9" },
    },
  ],
};
