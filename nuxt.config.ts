// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@nuxt/image", "@vueuse/nuxt"],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});