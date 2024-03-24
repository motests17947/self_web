// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head() {
    return {
      title: 'Guu Web',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '這是 Guu 的個人網站喔' }
      ],
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  stylelint: {
    lintOnStart: false, // 專案啟動時不自動檢查所有相關檔案
    chokidar: true      // 監聽文件異動進行檢核（文件未列出此選項）
  },
  css: [
    '../assets/css/main.scss', 
    '../assets/css/fonts/fonts.css'
  ],
  build: {
    extractCSS: true,
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Open+Sans': true,
    },
  },
})