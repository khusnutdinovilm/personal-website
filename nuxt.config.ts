// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  srcDir: "src",

  dir: {
    pages: "app/routes",
    layouts: "app/layouts",
  },

  css: ["@/app/styles/main.scss"],

  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image"],

  image: {
    // современные форматы: модуль сам отдаст avif/webp, если браузер поддерживает
    format: ["avif", "webp"],

    // брейкпоинты для responsive-атрибута sizes
    screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 },

    // разрешённые внешние домены для оптимизации удалённых картинок
    // domains: ["images.unsplash.com", "storage.mysite.ru"],

    // качество по умолчанию
    quality: 80,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: (content: string, filepath: string) => {
            if (filepath.includes("shared/styles")) {
              return content;
            }
            return `@use "@/shared/styles/index.scss" as *;\n${content}`;
          },
        },
      },
    },
  },

  icon: {
    provider: "none",
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
      // иконки с динамическим именем (:icon из конфига) сканер не ловит — перечисляем явно
      icons: ["ri:linkedin-fill", "ri:github-fill"],
    },
    customCollections: [
      {
        prefix: "custom",
        dir: "./src/shared/assets/icons",
      },
    ],
  },
});
