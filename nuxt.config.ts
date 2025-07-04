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
    "@nuxtjs/turnstile",
  ],
  turnstile: {
    siteKey: process.env.TURNSTILE_SITEKEY,
    secretKey: process.env.TURNSTILE_SECRET_KEY,
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
    // Private server-side only keys
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
    TURNSTILE_SECRET_KEY_TESTING: process.env.TURNSTILE_SECRET_KEY_TESTING,
    TURNSTILE_SITE_KEY_TESTING: process.env.TURNSTILE_SITE_KEY_TESTING,

    // Public keys exposed to the client
    public: {
      WEB3FORMS_ACCESS_KEY_NICK: process.env.WEB3FORMS_ACCESS_KEY_NICK,
      WEB3FORMS_ACCESS_KEY_WILL: process.env.WEB3FORMS_ACCESS_KEY_WILL,
      TURNSTILE_SITEKEY: process.env.TURNSTILE_SITEKEY,
    },
  },
});
