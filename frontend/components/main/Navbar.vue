<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg" id="top" v-cloak>
    <div class="container">
      <!-- Logo -->
      <div class="logo-wrapper">
        <a class="logo" href="index.html">
          <h2>{{ $t('company_title_part1') }} <span> {{ $t('company_title_part2') }}</span></h2>
        </a>
      </div>
      <!-- Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span
          class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span> </button>
      <!-- Menu -->
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active cursor-pointer" href="/#top">{{ $t('home') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="/#about">{{ $t('about') }}</a></li>
          <!-- <li class="nav-item"><a class="nav-link" href="/#services" data-scroll-nav="2">{{ $t('services') }}</a></li> -->
          <!-- <li class="nav-item"><a class="nav-link" href="/#products">{{ $t('rooms') }}</a></li> -->
          <!-- <li class="nav-item"><a class="nav-link" href="/#car_types" data-scroll-nav="4">{{ $t('car_types') }}</a></li> -->
          <li class="nav-item"><a class="nav-link" href="/activities">{{ $t('activity') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="/#process">{{ $t('process') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="/#contact">{{ $t('contact') }}</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside"
              aria-expanded="false">
              <i class="ti-angle-down">
                &#160;<img :src="locale ? `/assets/img/lang/${locale}.png` : '/assets/img/lang/translate.png'"
                  width="16px" alt="translate" />
              </i>
              <!-- <i class="ti-angle-down">
                &#160;<img :src="currentLang ? `/assets/img/lang/${currentLang}.png` : '/assets/img/lang/translate.png'"
                  width="16px" alt="translate" />
              </i> -->
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
              <p>{{ $t('need_help') }}</p>
              <h5><a :href="`tel:${$t('phone_number')}`">{{ $t('phone_number') }}</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const commonStore = useCommonStore()


const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const changeLang = (lang: 'en' | 'fr' | 'ru' | 'uz') => {
  commonStore.switchLoader(true);
  commonStore.switchLoader(false);
  // reload page
  setTimeout(() => {
    window.location.reload();
  }, 100);
  setLocale(lang);
}

</script>


<style scoped>
img {
  width: 24px;
}

.nav-scroll {
  background-color: #28808E;
}
</style>