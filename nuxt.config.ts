import { DESIGN } from './constants'
export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  buildModules: ['@nuxtjs/html-validator'],
  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: `${DESIGN.THEMES.theaterpedia}-${DESIGN.VARIANTS.flip}`, // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: ''
  },  
})
