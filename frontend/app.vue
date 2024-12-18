<script setup lang="ts">
const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange();
  $(document).ready(function () {
    //@ts-ignore
    $('#kenburnsSliderContainer').vegas({
      slides: [{
        src: "/assets/img/slider/slide_1.jpg"
      }, {
        src: "/assets/img/slider/slide_2.jpg"
      }, {
        src: "/assets/img/slider/slide_3.jpg"
      }],
      overlay: true,
      transition: 'fade2',
      animation: 'kenburnsUpLeft',
      transitionDuration: 1000,
      delay: 10000,
      animationDuration: 20000
    });
  });

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
