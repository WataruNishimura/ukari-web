const lang = 'ja'
const siteName = '学生団体UKARI'
const siteDesc = '学生団体UKARI　公式ホームページ'
const siteKeywords = 'UKARI,学生団体,学生団体UKARI,札幌,高校生'

const baseHost = process.env.BASE_HOST || 'https://localhost:3000'
const baseDir = process.env.BASE_DIR || '/'
const baseUrl = baseHost + baseDir

const ogpImage = baseUrl + 'img/ogp/'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  router: {
    base: baseDir
  },
  head: {
    htmlAttrs: {
      lang,
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: `%s - ${siteName}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteDesc
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: siteKeywords
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteName
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: baseUrl
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: siteName
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDesc
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${ogpImage}ogp.jpg`
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:site',
        content: '@UKARI2018'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/common.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/fullcalendar.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['~/assets/scss/variable.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
    // analyze: true
  },
  generate: {
    fallback: true
  }
}
