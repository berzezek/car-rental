<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg" id="top">
    <div class="container">
      <!-- Logo -->
      <div class="logo-wrapper">
        <nuxt-link class="logo" to="/#top">
          <h2>{{ $t('company_title') }}</h2>
        </nuxt-link>
      </div>
      <!-- Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span
          class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span> </button>
      <!-- Menu -->
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="/#home" data-scroll-nav="0">{{ $t('home') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="/#about" data-scroll-nav="1">{{ $t('about') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="/#services" data-scroll-nav="2">{{ $t('services') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="/#cars" data-scroll-nav="3">{{ $t('cars') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="/#car_types" data-scroll-nav="4">{{ $t('car_types') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="/#process" data-scroll-nav="5">{{ $t('process') }}</a></li>
          <li class="nav-item"><a class="nav-link" href="/#contact" data-scroll-nav="7">{{ $t('contact') }}</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              data-bs-auto-close="outside" aria-expanded="false">
              <i class="ti-angle-down">
                &#160;<img src="/assets/img/lang/translate.png" width="16px" alt="translate" />
              </i>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item"><span><img src="/assets/img/lang/united-kingdom.png" alt="uk"
                      @click="setLocale('en')" />&#160;&#160;&#160;English</span></a></li>
            </ul>
          </li>
        </ul>
        <div class="navbar-right">
          <div class="wrap">
            <div class="icon"> <i class="flaticon-phone-call"></i> </div>
            <div class="text">
              <p>{{ $t('need_help') }}</p>
              <h5><a href="tel:8551004444">{{ $t('phone_number') }}</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { setLocale } = useI18n()

</script>

<style scoped>
img {
  width: 24px;
}
</style>