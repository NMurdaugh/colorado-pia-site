// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: "dark",
  },
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@nuxt/fonts",
    "@nuxt/scripts",
  ],
  scripts: {
    globals: {
      turnstile: "https://challenges.cloudflare.com/turnstile/v0/api.js",
    },
  },
  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    preset: "cloudflare_pages",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      WEB3FORMS_ACCESS_KEY_NICK: process.env.WEB3FORMS_ACCESS_KEY_NICK,
      WEB3FORMS_ACCESS_KEY_WILL: process.env.WEB3FORMS_ACCESS_KEY_WILL,
      TURNSTILE_SITEKEY: process.env.TURNSTILE_SITEKEY,
    },
  },
});
