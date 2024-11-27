// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@sidebase/nuxt-auth', '@nuxtjs/i18n'],
  nitro: {
    preset: 'static',
    routeRules: {
      '/**': {
        headers: {
          'Cache-Control':
            'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          Pragma: 'no-cache',
          Expires: '0',
        },
      },
    },
  },
  ssr: true,
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL,
      v1: process.env.NUXT_API_URL + 'api/v1',
      refresh: process.env.NUXT_AUTH_REFRESH_NAME,
      access: process.env.NUXT_AUTH_ACCESS_NAME,
    }
  },
  // auth
  auth: {
    baseURL: process.env.NUXT_API_URL,
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: 'api/token/', method: 'post' },
        signOut: false,
        getSession: { path: 'api/session/', method: 'get' },
      },
      token: {
        signInResponseTokenPointer: '/access',
        cookieName: process.env.NUXT_AUTH_ACCESS_NAME,
        maxAgeInSeconds: 60 * 4,
      },
      refresh: {
        isEnabled: true,
        endpoint: { path: 'api/token/refresh/', method: 'post' },
        // refreshOnlyToken: true,
        token: {
          signInResponseRefreshTokenPointer: '/refresh',
          refreshRequestTokenPointer: '/access',
          cookieName: process.env.NUXT_AUTH_REFRESH_NAME,
          maxAgeInSeconds: 60 * 4,
          sameSiteAttribute: 'lax',
          secureCookieAttribute: false,
          // cookieDomain: 'sidebase.io',
          httpOnlyCookieAttribute: false,
        }
      },
      pages: {
        login: '/auth/login'
      },
    },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    }
  },
  // app
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Car Rental',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap' },
        { rel: 'stylesheet', href: '/assets/css/plugins.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
      ],
      script: [
        { src: '/assets/js/jquery-3.7.1.min.js' },
        { src: '/assets/js/jquery-migrate-3.4.1.min.js' },
        { src: '/assets/js/modernizr-2.6.2.min.js' },
        { src: '/assets/js/imagesloaded.pkgd.min.js' },
        { src: '/assets/js/jquery.isotope.v3.0.2.js' },
        { src: '/assets/js/popper.min.js' },
        { src: '/assets/js/bootstrap.min.js' },
        { src: '/assets/js/scrollIt.min.js' },
        { src: '/assets/js/jquery.waypoints.min.js' },
        { src: '/assets/js/owl.carousel.min.js' },
        { src: '/assets/js/jquery.stellar.min.js' },
        { src: '/assets/js/jquery.magnific-popup.js' },
        { src: '/assets/js/select2.js' },
        { src: '/assets/js/datepicker.js' },
        { src: '/assets/js/YouTubePopUp.js' },
        { src: '/assets/js/vegas.slider.min.js' },
        { src: '/assets/js/custom.js' },
        { src: '/assets/js/vegas-slider-kenburns.js' },
      ]
    }
  },
  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', files: [{ path: 'navbar/en.json' }, { path: 'about/en.json' }, { path: 'footer/en.json' }, { path: 'slide/en.json' }, { path: 'service/en.json' }, { path: 'search/en.json' }, { path: 'process/en.json' }, { path: 'talk/en.json' }, { path: 'cars/en.json' }, { path: 'faq/en.json' }] },
      { code: 'ar', language: 'ar-SA', name: 'عربي', files: [{ path: 'navbar/ar.json' }, { path: 'about/ar.json' }, { path: 'footer/ar.json' }, { path: 'slide/ar.json' }, { path: 'service/ar.json' }, { path: 'search/ar.json' }, { path: 'process/ar.json' }, { path: 'talk/ar.json' }, { path: 'cars/ar.json' }, { path: 'faq/ar.json' }] },
      { code: 'ru', language: 'ru-RU', name: 'Русский', files: [{ path: 'navbar/ru.json' }, { path: 'about/ru.json' }, { path: 'footer/ru.json' }, { path: 'slide/ru.json' }, { path: 'service/ru.json' }, { path: 'search/ru.json' }, { path: 'process/ru.json' }, { path: 'talk/ru.json' }, { path: 'cars/ru.json' }, { path: 'faq/ru.json' }] },
      { code: 'ua', language: 'ua-UA', name: 'Українська', files: [{ path: 'navbar/ua.json' }, { path: 'about/ua.json' }, { path: 'footer/ua.json' }, { path: 'slide/ua.json' }, { path: 'service/ua.json' }, { path: 'search/ua.json' }, { path: 'process/ua.json' }, { path: 'talk/ua.json' }, { path: 'cars/ua.json' }, { path: 'faq/ua.json' }] },
    ],
    defaultLocale: 'en',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      cookieSecure: false,
    }
  }
})