// https://nuxt.com/docs/api/configuration/nuxt-config
import { type LocaleObject } from "@nuxtjs/i18n";
interface ISiteLanguage extends LocaleObject {
  code: string;
  languageId: number;
  name: string;
  iso: string;
  file: string;
  flag: string;
}

const siteLanguages: ISiteLanguage[] = [
  {
    code: "fa",
    languageId: 1,
    name: "فارسی",
    iso: "fa-IR",
    dir: "rtl",
    file: "./lang/fa.json",
    flag: "/flags/fa.png",
  },
  {
    code: "en",
    languageId: 2,
    name: "English",
    iso: "en-US",
    dir: "ltr",
    file: "./lang/en.json",
    flag: "/flags/en.png",
  },
  {
    code: "ar",
    languageId: 3,
    name: "العربیه",
    iso: "ar-sa",
    dir: "rtl",
    file: "./lang/ar.json",
    flag: "/flags/ar.png",
  },
  {
    code: "ru",
    languageId: 4,
    name: "Русский",
    iso: "ru",
    dir: "ltr",
    file: "./lang/ru.json",
    flag: "/flags/ru.png",
  },
];

export default defineNuxtConfig({
  // @ts-ignore
  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: "",
      titleTemplate: "شتابیک | %s",
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
    // devProxy: {
    //   host: "127.0.0.1",
    // },
  },

  // schemaOrg: {
  //     defaults: false,
  //     identity: {
  //         type: "Organization",
  //         name: "Simagar",
  //         logo: "/logo.webp",
  //         url: "https://www.simagar.com/",
  //         address: {
  //             streetAddress: "Shariati St",
  //             addressLocality: "Tehran",
  //             addressRegion: "Tehran",
  //             postalCode: "1913844092",
  //             addressCountry: "IR",
  //         },
  //         sameAs: [
  //             "https://www.linkedin.com/in/company/simagar/",
  //             "https://www.instagram.com/simagarteam",
  //         ],
  //     },
  // },

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
    "nuxt-schema-org",
    "@nuxt/scripts",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    // "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/robots",
    "nuxt-seo-utils",
    "@nuxtjs/i18n",
    "@nuxt/icon",
  ],

  i18n: {
    // vueI18n: "./i18n.config.ts",  // if you are using custom path, default
    locales: siteLanguages,
    strategy: "prefix_except_default",
    defaultDirection: "rtl",
    defaultLocale: "fa", // default locale of your project for Nuxt pages and routings
    detectBrowserLanguage: false,
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

  // image: {
  //   domains: ["https://apiv2.simagar.com/"],
  //   format: ["avif", "webp", "jpg", "jpeg", "png"],
  //   screens: {
  //     xs: 320,
  //     sm: 640,
  //     md: 768,
  //     lg: 1024,
  //     xl: 1280,
  //     xxl: 1536,
  //     "2xl": 1536,
  //   },
  // },

  routeRules: {
    // "/": {swr: 60},
  },

  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "shetabic-color-mode-script",
    globalName: "__SHETABIC_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage", // or 'sessionStorage' or 'cookie'
    storageKey: "shetabic-color-mode",
  },

  // sitemap: {
  //     path: "/SiteMap.xml",
  //     sitemaps: {
  //         portfolio: {
  //             sources: [`/api/__sitemap__/urls/portfolios`],
  //         },
  //         blogs: {
  //             sources: [`/api/__sitemap__/urls/blogs`],
  //         },
  //         pages: {
  //             includeAppSources: true,
  //             exclude: ["/test"],
  //         },
  //     },
  // },

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      // this restricts user navigation to some directories of website
      // scope: "https://example.com/subdirectory/",
      name: "shetabic",
      short_name: "shetabic",
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

  runtimeConfig: {
    // Private keys are only available on the server

    // Public keys that are exposed to the client
    public: {
      title: "شتابیک",
      apiBaseUrlDev: "https://apiv2.simagar.com/",
      apiBaseUrlBuild: "https://apiv2.simagar.com/",
      seq: "",
      seqAddress: "",
    },
  },

  devServer: {
    // host:'192.168.1.164',
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

  robots: {
    disallow: ["*?*"],
  },

  compatibilityDate: "2024-09-18",
});
