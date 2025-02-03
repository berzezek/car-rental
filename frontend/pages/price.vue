<template>
  <div>
    <main-loader v-if="isLoading" />
    <div>
      <main-slide :slidesImage="slidesImage" />
      <section class="blog3 section-padding" v-cloak>
        <div class="container">
          <div class="section">
            <div class="section-title">{{ $t('price.room_category.title') }}</div>
            <table class="rates-table">
              <thead>
                <tr>
                  <th>{{ $t('price.room_category.room_type') }}</th>
                  <th>{{ $t('price.room_category.rate') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="room in roomRates" :key="room.type">
                  <td>{{ $t(`price.room_category.${room.type}`) }}</td>
                  <td>{{ room.rate }}</td>
                </tr>
              </tbody>
            </table>
            <p><em>{{ $t('price.room_category.included') }}</em></p>
          </div>

          <div class="section">
            <div class="section-title">{{ $t('price.children_policy.title') }}</div>
            <ul>
              <li>{{ $t('price.children_policy.policy_1') }}</li>
              <li>{{ $t('price.children_policy.policy_2') }}</li>
              <li>{{ $t('price.children_policy.policy_3') }}</li>
              <li>{{ $t('price.children_policy.policy_4') }}</li>
            </ul>
          </div>

          <div class="section">
            <div class="section-title">{{ $t('price.check_in_out.title') }}</div>
            <p><strong>{{ $t('price.check_in_out.check_in') }}</strong></p>
            <p><strong>{{ $t('price.check_in_out.check_out') }}</strong></p>
            <p><em>{{ $t('price.check_in_out.early_check_in') }}</em></p>
            <p><em>{{ $t('price.check_in_out.late_check_out') }}</em></p>
          </div>
        </div>
      </section>
    </div>
  </div>

</template>

<script setup lang="ts">
const { $amplitude } = useNuxtApp();

const { finalizePendingLocaleChange } = useI18n();
const isLoading = ref(true);

const slidesImage = [
  { src: '/assets/img/sunny/7.webp' },
  { src: '/assets/img/sunny/8.webp' },
  { src: '/assets/img/sunny/9.webp' }
];

const roomRates = ref([
  { type: 'standard_single', rate: '1,250,000 UZS' },
  { type: 'standard_double', rate: '1,550,000 UZS' },
  { type: 'deluxe_single', rate: '1,700,000 UZS' },
  { type: 'deluxe_double', rate: '1,850,000 UZS' },
  { type: 'executive_suite', rate: '3,150,000 UZS' },
  { type: 'superior_connected', rate: '3,150,000 UZS' },
  { type: 'accessible_room', rate: '1,550,000 UZS' },
]);

const slides = [
  { src: "/assets/img/slider/1.jpg" },
  { src: "/assets/img/slider/2.jpg" },
  { src: "/assets/img/slider/3.jpg" }
]

onMounted(async () => {
  $amplitude.track('Enter Price Page');
  await finalizePendingLocaleChange();

  // Инициализация Vegas Slider
  $(document).ready(() => {
    // @ts-ignore
    $('#kenburnsSliderContainer').vegas({
      slides: slides,
      overlay: true,
      transition: 'fade2',
      animation: 'kenburnsUpLeft',
      transitionDuration: 1000,
      delay: 10000,
      animationDuration: 20000
    });
  });
  setTimeout(() => {
    isLoading.value = false
  }, 1000);
});
</script>

<style scoped>
.mt-5 {
  margin-top: 15rem !important;
  margin-bottom: 5rem !important;
}
</style>
