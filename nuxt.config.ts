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
    "nuxt-mail",
  ],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  runtimeConfig: {
    mail: {
      message: {
        to: "nickmurdaugh@coloradopia.com",
      },
      smtp: {
        host: "smtp-relay.gmail.com",
        port: 587,
        auth: {
          user: "nickmurdaugh@coloradopia.com",
          pass: process.env.GMAIL_PASSWORD,
        },
      }
    }
  }
});
