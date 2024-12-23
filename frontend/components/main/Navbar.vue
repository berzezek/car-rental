<template>
  <nav class="navbar navbar-expand-lg" id="top" v-cloak>
    <div class="container">
      <div class="logo-wrapper">
        <a class="logo" href="/">
          <h2>{{ $t('common.company_title_part1') }} <span> {{ $t('common.company_title_part2') }}</span></h2>
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span
          class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span> </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="(link, index) in links" :key="index">
            <nuxt-link
              :class="['nav-link', activeLink === link.id ? 'active-link cursor-pointer' : '']"
              :to="localePath(link.to)"
              @click="setActiveLink(link.id)"
            >
              {{ $t(`${link.label}`) }}
            </nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside"
              aria-expanded="false">
              <i class="ti-angle-down">
                &#160;<img :src="locale ? `/assets/img/lang/${locale}.png` : '/assets/img/lang/translate.png'"
                  width="16px" alt="translate" />
              </i>
            </a>
            <ul class="dropdown-menu">
              <li v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="changeLang(locale.code)">
                <a href="#" class="dropdown-item">
                  <span><img :src="`/assets/img/lang/${locale.code}.png`" :alt="locale.language" />
                    &#160;&#160;&#160;{{ locale.name }}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="navbar-right">
          <div class="wrap">
            <div class="icon"> <i class="flaticon-phone-call"></i> </div>
            <div class="text">
              <p>{{ $t('common.need_help') }}</p>
              <h5><a :href="`tel:${$t('common.phone_number')}`">{{ $t('common.phone_number') }}</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

// Список ссылок для навигации
const links = [
  { id: 'home', to: '/#top', label: 'navbar.home' },
  { id: 'about', to: '/#about', label: 'navbar.about' },
  { id: 'activities', to: '/activities', label: 'navbar.activity' },
  { id: 'process', to: '/#process', label: 'navbar.process' },
  { id: 'price', to: '/price', label: 'navbar.price' },
  { id: 'contact', to: '/#contact', label: 'navbar.contact' }
]

// Активная ссылка
const activeLink = ref('home')

// Установка активной ссылки
const setActiveLink = (id: string) => {
  activeLink.value = id
}

const changeLang = (lang: 'en' | 'fr' | 'ru' | 'uz') => {
  setLocale(lang)
}
</script>

<style scoped>
img {
  width: 24px;
}

.nav-scroll {
  background-color: #28808E;
}

.active-link {
  font-weight: bold;
  color: #f5b754 !important;
}
</style>
