// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/scripts', '@vueuse/nuxt/module', 'nuxt-svgo', 'nuxt-swiper'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title:
        'Высшая школа программной инженерии',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  fonts: {
    families: [
      { name: 'Manrope Variable', weights: [200, 300, 400, 500, 600, 700, 800] },
      { name: 'IBM Plex Mono', weights: [300, 400, 500, 600, 700] },
      { name: 'RF Dewi Extended', weights: [300, 400, 500, 600, 700] },
    ],
  },

  srcDir: './src',
  dir: {
    app: 'app/entrypoint',
    pages: 'app/routes',
    layouts: 'app/layouts',
  },

  css: ['~/app/styles/main.css'],

  components: [{ path: './shared/ui', prefix: 'ui', extensions: ['vue'] }],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },

  svgo: {
    defaultImport: 'component',
    componentPrefix: 'icon',
    autoImportPath: false,
  },

  image: {
    format: ['webp'],
    domains: ['hsse.mipt.ru'],
  },
})
