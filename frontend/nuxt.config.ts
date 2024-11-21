// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Car Rental',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/assets/logo/favicon.png' },
        { rel: 'stylesheet', href: '/assets/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: '/assets/css/linearicons.css' },
        { rel: 'stylesheet', href: '/assets/css/flaticon.css' },
        { rel: 'stylesheet', href: '/assets/css/animate.css' },
        { rel: 'stylesheet', href: '/assets/css/owl.carousel.min.css' },
        { rel: 'stylesheet', href: '/assets/css/owl.theme.default.min.css' },
        { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/assets/css/bootsnav.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
        { rel: 'stylesheet', href: '/assets/css/responsive.css' },
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js' },
        { src: '/assets/js/bootsnav.js' },
        { src: '/assets/js/owl.carousel.min.js' },
        { src: '/assets/js/custom.js' },
      ]
    }
  },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL
    }
  }
})