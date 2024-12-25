<template>
  <div>
    <main-loader v-if="isLoading"/>

    <div>
      <main-slide :slidesImage="slidesImage"/>
      <activities-main />
    </div>
  </div>
</template>

<script setup lang="ts">
const isLoading = ref(true)
const slidesImage = [
  { src: '/assets/img/sunny/4.webp' },
  { src: '/assets/img/sunny/5.webp' },
  { src: '/assets/img/sunny/6.webp' }
]

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<style scoped></style>