import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@vueuse/motion/nuxt",
  ],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      { code: "en-US", iso: "en-US", name: "English", file: "en-US.json" },
      { code: "vn-VN", iso: "vn-VN", name: "Vietnamese", file: "vn-VN.json" },
    ],
    defaultLocale: "en-US",
    vueI18n: "./i18n.options.ts",
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },

  css: ["~/assets/css/main.css"],
});
