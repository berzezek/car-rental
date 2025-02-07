<template>
  <div>
    <main-loader v-if="isLoading" />

    <div v-cloak>
      <aside data-scroll-index="0" class="kenburns-section" id="kenburnsSliderContainer" data-overlay-dark="4">
      </aside>
      <div class="kenburns-inner">
        <div class="caption">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1>{{ $t('common.company_title_part1') }} {{ $t('common.company_title_part2') }}</h1>
                <h5>{{ $t('common.company_description') }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const isLoading = ref(true);

const props = defineProps<{
  slidesImage: { src: string }[];
}>();

// Функция для случайной сортировки массива
const shuffleArray = (array: { src: string }[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const slider = () => {
  // Перемешиваем слайды
  const shuffledSlides = shuffleArray(props.slidesImage);

  //@ts-ignore
  $('#kenburnsSliderContainer').vegas({
    slides: shuffledSlides,
    overlay: true,
    transition: 'fade2',
    animation: 'kenburnsUpLeft',
    transitionDuration: 1000,
    delay: 10000,
    animationDuration: 20000,
  });
};

onMounted(() => {
  slider();
  setTimeout(() => {
    isLoading.value = false;
  }, 2500);
});

</script>

<style>
.kenburns-inner {
  position: absolute;
  top: 0;
  left: 10rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
}

@media (max-width: 767px) {
  .kenburns-inner {
    left: 0;
    justify-content: center;
  }
}
</style>
