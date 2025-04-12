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
    '@pinia-plugin-persistedstate/nuxt',
    "nuxt-swiper",
    "@vite-pwa/nuxt",
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@nuxt/icon",
  ],

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      // this restricts user navigation to some directories of website
      // scope: "https://example.com/subdirectory/",
      name: "nuxt-task",
      short_name: "nuxt-task",
      theme_color: "#ffffff",
      description: "",
      background_color: "#000000",
      dir: "rtl",
      lang: "fa",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "/favicon/android-chrome-192x192v1.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/favicon/android-chrome-512x512v1.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/favicon/favicon-16x16v1.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "/favicon/apple-touch-iconv1.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "/favicon/favicon-32x32v1.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "/favicon/faviconv1.ico",
          sizes: "16x16",
          type: "image/ico",
        },
      ],
    },
    workbox: {
      cleanupOutdatedCaches: true,
    },
  },

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
      apiBaseUrlDev: "https://api.ariaexport.com/",
      apiBaseUrlBuild: "https://api.ariaexport.com/",
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
