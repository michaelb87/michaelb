
import createBlog from './rss/blog.js'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Michael Bierbaumer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],
  styleResources: {
    scss: ['~/assets/scss/main.scss']
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    //'@nuxtjs/bulma',
    '@nuxtjs/apollo',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/proxy',
    '@nuxtjs/feed',
  ],
  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
      }
    }
  },
  markdownit: {  
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  feed: [
    {
      path: '/feed.xml', // The route to your feed.
      async create(feed) {
        await createBlog(feed)
      },
      cacheTime: 1, //1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
      data: [] // Will be passed as 2nd argument to `create` function
    }
  ],
  proxy: [
      'http://localhost:1337/uploads',
    ]
  ,
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
