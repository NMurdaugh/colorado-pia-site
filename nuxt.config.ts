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
    [
      "nuxt-mail",
      {
        message: {
          to: process.env.NUXT_MAIL_TARGET,
        },
        smtp: {
          host: process.env.NUXT_MAIL_SMPT,
          port: process.env.NUXT_MAIL_PORT,
          auth: {
            user: process.env.NUXT_MAIL_USERNAME,
            pass: process.env.NUXT_MAIL_PASSWORD,
          },
        },
      },
    ],
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
      },
    },
  },
});
