// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@sidebase/nuxt-auth', '@nuxtjs/i18n'],
  nitro: {
    preset: 'static',
    routeRules: {
      '/**': {
        // headers: {
        //   'Cache-Control':
        //     'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
        //   Pragma: 'no-cache',
        //   Expires: '0',
        // },
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
        token: {
          signInResponseRefreshTokenPointer: '/refresh',
          refreshRequestTokenPointer: '/refresh',
          cookieName: process.env.NUXT_AUTH_REFRESH_NAME,
          maxAgeInSeconds: 60 * 60 * 24 - 60 * 5,
          sameSiteAttribute: 'lax',
          secureCookieAttribute: false,
          httpOnlyCookieAttribute: false,
        },
      },
      pages: {
        login: '/auth/login'
      },
      session: {
        dataType: {
          id: 'string | number',
          username: 'string',
          email: 'string',
        },
      }
    },
    sessionRefresh: {
      enablePeriodically: 1000 * 60,
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