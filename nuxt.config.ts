// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/device", "@nuxt/content"],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: "cloudflare_pages",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: 'orangegreencat',
        d1_databases: [{
          binding: 'orangegreencat',
          database_name: 'orangegreencat',
          database_id: 'a8c1ada3-60d1-4f8e-8854-fd49ca84b173'
        }]
      }
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
    },
    database: {
      type: 'd1',
      bindingName: 'orangegreencat'
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