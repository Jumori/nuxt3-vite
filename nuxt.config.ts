import path from 'path'

export default defineNuxtConfig({
  ssr: false,

  imports: {
    autoImport: true
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Projeto utilizando Vue3 + Nuxt3 + Vuetify3 + Vite'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap'
        }
      ]
    }
  },

  components: {
    dirs: ['~/components']
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/main.css'
  ],

  modules: ['@pinia/nuxt', 'vite-plugin-vue-type-imports/nuxt'],

  plugins: [],

  build: {
    transpile: ['vuetify']
  },

  runtimeConfig: {
    public: {
      baseURL: 'http://localhost:3333/',
      env: 'dev'
    }
  },

  vite: {
    define: {
      'process.env.DEBUG': false
    },
    resolve: {
      alias: {
        'tailwind.config.js': path.resolve(__dirname, 'tailwind.config.js')
      }
    },
    optimizeDeps: {
      include: ['tailwind.config.js']
    }
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore' // import { defineStore } from 'pinia'
    ]
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
