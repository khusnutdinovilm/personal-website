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

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon"],

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

  fonts: {
    families: [
      {
        name: "Fira Code",
        provider: "google",
        weights: [400, 700],
      },
    ],
  },

  icon: {
    clientBundle: {
      scan: true,
      includeCustomCollection: true,
    },
    customCollections: [
      {
        prefix: "custom",
        dir: "./src/shared/assets/icons",
      },
    ],
  },
});
