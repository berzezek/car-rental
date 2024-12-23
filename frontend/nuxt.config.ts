// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@sidebase/nuxt-auth', '@nuxtjs/i18n'],
  nitro: {
    preset: 'static',
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
  app: {
    baseURL: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Azure Resort',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', files: [{ path: 'en.json' }] },
      { code: 'ru', language: 'ru-RU', name: 'Русский', files: [{ path: 'ru.json' }] },
      { code: 'fr', language: 'fr-FR', name: 'Français', files: [{ path: 'fr.json' }] },
      { code: 'uz', language: 'uz-UZ', name: 'O`zbek', files: [{ path: 'uz.json' }] },
    ],
    defaultLocale: 'en',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      cookieSecure: false,
      alwaysRedirect: false,
    }
  }
})