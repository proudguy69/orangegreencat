// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["nitro-cloudflare-dev", "@nuxt/ui", "@nuxtjs/device", "@nuxt/content"],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  // mdc: {
  //   highlight: {
  //     theme: "min-nord",
  //     langs: ["java"]
  //   }
  // },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ["java", "diff"]
        }
      }
    }
  },
  vite: {
    server: {
      allowedHosts: ["orangegreencat.com"]
    }
  },
  
  app: {
    head: {
      title: 'Orangegreencat SMP',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: "title", content: "Orangegreencat SMP Website"},
        { name: "description",content: "Website for the OGCSMP! " },
        { name: "image",content: "https://orangegreencat.com/orangecat.png" },
        { name: "og:image",content: "https://orangegreencat.com/orangecat.png" },
        { name: "Ogimage",content: "https://orangegreencat.com/orangecat.png" },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/faviconv2.ico' },
      ],
    },
  },
})