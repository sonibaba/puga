// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'axios',
      'addressbar-color'
    ],

    css: [
      'app.styl'
    ],

    extras: [
       //'ionicons-v4',
      // 'mdi-v3',
       //'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    framework: {
      //iconSet: 'fontawesome-v5',
      // lang: 'de', // Quasar language

      // all: true, // --- includes everything; for dev only!

      components: [
        'QLayout',
        'QHeader',
        'QDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QImg',
        'QParallax',
        'QHeader',
        'QFooter',
        'QBtn',
        'QAvatar',
        'QPageSticky',
        'QInput',
        'QToggle',
        'QCard',
        'QOptionGroup',
        'QCardSection',
        'QCardActions',
        'QLinearProgress',
        'QDialog',
        'QTooltip',
        'QBar',
        'QSpace',
        'QCarousel',
        'QCarouselControl',
        'QCarouselSlide',
        'QTabPanels',
        'QTabPanel',
        'QTabs',
        'QTab',
        'QRouteTab',
        'QSplitter',
        'QSeparator',
        'QTable',
        'QTh',
        'QTr',
        'QTd',
        'QBadge',
        'QUploader',
        'QSpinner',
        'QStepper',
        'QStep',
        'QStepperNavigation',
        'QChip',
        'QBanner',
        'QBtnDropdown',
        'QMenu',
        'QSelect',
        'QField',
        'QExpansionItem',
        'QMarkupTable',
        'QAjaxBar',
        'QRadio',
        'QScrollArea'
      ],

      directives: [
        'Ripple',
        'ClosePopup'
      ],

      // Quasar plugins
      plugins: [
        'Notify',
        'AddressbarColor'
      ],
      config: {
        notify: { /* Notify defaults */ }
      }
    },

    supportIE: false,

    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
      }
    },

    devServer: {
      // https: true,
      // port: 8080,
      open: false // opens browser window automatically
    },

    // animations: 'all', // --- includes all animations
    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {}, // only for NON InjectManifest
      manifest: {
        // name: 'tienda_dif',
        // short_name: 'tienda_dif',
        // description: 'Plataforma web',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/puga-icon.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/puga-icon.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/puga-icon.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/puga-icon.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/puga-icon.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app',
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
      iosStatusBarPadding: true/false, // add the dynamic top padding on iOS mobile devices
      backButtonExit: true/false // Quasar handles app exit on mobile phone back button
    },

    electron: {
      // bundler: 'builder', // or 'packager'

      extendWebpack (cfg) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'tienda_dif'
      }
    }
  }
}
