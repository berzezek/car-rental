<template>
  <!-- Booking Search -->
  <section id="bookingseach" data-scroll-index="1" class="background bg-img bg-fixed section-padding"
    data-overlay-dark="5" data-background="/assets/img/sunny/12.webp">
    <div class="container h-5">
      <div class="booking-inner clearfix">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();


const carTypeSelect = ref(null);
const pickUpLocationSelect = ref(null);
const dropOffLocationSelect = ref(null);

const initSelect2 = () => {
  // @ts-ignore
  if (carTypeSelect.value) $(carTypeSelect.value).select2();
  // @ts-ignore
  if (pickUpLocationSelect.value) $(pickUpLocationSelect.value).select2();
  // @ts-ignore
  if (dropOffLocationSelect.value) $(dropOffLocationSelect.value).select2();
};

onMounted(() => {
  initSelect2();
});

watch(
  () => t('choose_car_type'),
  () => {
    initSelect2();
  }
);
</script>

<style scoped>
.c1 {
  width: 25%;
}

.h-5 {
  height: 50vh !important;
}
</style>