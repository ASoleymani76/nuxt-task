// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: "",
      titleTemplate: "nuxt-task | %s",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "fa",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: ["~/assets/css/main.css"],

  nitro: {
    compressPublicAssets: true,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@pinia/nuxt",
    "nuxt-swiper",
    "pinia-plugin-persistedstate/nuxt",
    "@vite-pwa/nuxt",
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@nuxt/icon",
  ],

  icon: {
    provider: "server",
    fallbackToApi: false,
    customCollections: [
      {
        prefix: "icon",
        dir: "./assets/icons",
      },
    ],
  },

  fonts: {
    provider: "local",
    defaults: {
      weights: [400, 500, 600, 700, 800],
    },
    families: [
      {
        name: "Samim",
      },
    ],
  },

  runtimeConfig: {
    // Private keys are only available on the server

    // Public keys that are exposed to the client
    public: {
      title: "nuxt-task",
      apiBaseUrlDev: "https://apiv2.simagar.com/",
      apiBaseUrlBuild: "https://apiv2.simagar.com/",
      seq: "",
      seqAddress: "",
    },
  },

  devServer: {
    port: 3004,
  },

  vite: {
    build: {
      cssCodeSplit: false,
    },
  },

  experimental: {
    inlineRouteRules: true,
  },

  compatibilityDate: "2024-09-18",
});
