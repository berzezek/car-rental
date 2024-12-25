<script setup lang="ts">
const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange();
  location.reload();
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage :transition="{
      name: 'my',
      mode: 'out-in',
      onBeforeEnter
    }" />
  </NuxtLayout>
</template>

<style>
.my-enter-active,
.my-leave-active {
  transition: opacity 0.5s;
}

.my-enter,
.my-leave-active {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
