<template>
  <div>
    <main-slide :slidesImage="slidesImage" />
    <activities-main />
  </div>
</template>

<script setup lang="ts">
const { $amplitude } = useNuxtApp()
const slidesImage = [
  { src: '/assets/img/new/main_1.webp' },
  { src: '/assets/img/new/main_2.webp' },
  { src: '/assets/img/new/main_3.webp' }
]

onMounted(() => {
  $amplitude.track("Enter Activities Page")
  $amplitude.logEvent('activities_page_viewed')
})
</script>

<style scoped></style>