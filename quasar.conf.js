module.exports = function () {
  return {
    supportTS: false,

    boot: [

      'axios'
    ],

    css: [
      'app.sass'
    ],

    extras: [
      'roboto-font',
      'material-icons'
    ],

    build: {
      vueRouterMode: 'hash',


















      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        },
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        }
        )
      }
    },


    devServer: {
      https: false,
      port: 8080,
      open: true
    },


    framework: {
      iconSet: 'material-icons',
      lang: 'en-us',
      config: {},




      importStrategy: 'auto',









      plugins: [ 'Loading' ]
    },



    animations: [],


    ssr: {
      pwa: false
    },


    pwa: {
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {},
      manifest: {
        name: 'torre_test_app',
        short_name: 'torre_test_app',
        description: 'This is my test app for my future awesome job at torre!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true
    },


    electron: {
      bundler: 'packager',

      packager: {},

      builder: {


        appId: 'torre_front_end'
      },

      nodeIntegration: true,

      extendWebpack (/* cfg */) {

      }
    }
  }
}
