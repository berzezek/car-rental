<template>
  <!-- Booking Search -->
  <section id="bookingseach" data-scroll-index="1" class="background bg-img bg-fixed section-padding"
    data-overlay-dark="5" data-background="/assets/img/slider/2.jpg">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mb-15">
          <div class="section-subtitle">{{ $t('rent_now') }}</div>
          <div class="section-title white">{{ $t('book_auto_rental') }}</div>
        </div>
      </div>
      <div class="booking-inner clearfix">
        <form action="#0" class="form1 brdr clearfix">
          <div class="col2 c3">
            <div class="select1_wrapper">
              <label>{{ $t('choose_car_type') }}</label>
              <div class="select1_inner">
                <select ref="carTypeSelect" class="select2 select" style="width: 100%">
                  <option value="0">{{ $t('choose_car_type') }}</option>
                  <option value="1">{{ $t('all') }}</option>
                  <option value="2">{{ $t('luxury_cars') }}</option>
                  <option value="3">{{ $t('sport_cars') }}</option>
                  <option value="4">{{ $t('suvs') }}</option>
                  <option value="5">{{ $t('convertible') }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col2 c4">
            <div class="select1_wrapper">
              <label>{{ $t('pick_up_location') }}</label>
              <div class="select1_inner">
                <select ref="pickUpLocationSelect" class="select2 select" style="width: 100%">
                  <option value="0">{{ $t('pick_up_location') }}</option>
                  <option value="1">{{ $t('dubai') }}</option>
                  <option value="2">{{ $t('abu_dhabi') }}</option>
                  <option value="3">{{ $t('sharjah') }}</option>
                  <option value="4">{{ $t('alain') }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col1 c1">
            <div class="input1_wrapper">
              <label>{{ $t('pick_up_date') }}</label>
              <div class="input1_inner">
                <input type="text" class="form-control input datepicker" :placeholder="$t('pick_up_date')" required>
              </div>
            </div>
          </div>
          <div class="col2 c5">
            <div class="select1_wrapper">
              <label>{{ $t('drop_off_location') }}</label>
              <div class="select1_inner">
                <select ref="dropOffLocationSelect" class="select2 select" style="width: 100%">
                  <option value="0">{{ $t('drop_off_location') }}</option>
                  <option value="1">{{ $t('alain') }}</option>
                  <option value="2">{{ $t('sharjah') }}</option>
                  <option value="3">{{ $t('abu_dhabi') }}</option>
                  <option value="4">{{ $t('dubai') }}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col1 c2">
            <div class="input1_wrapper">
              <label>{{ $t('return_date') }}</label>
              <div class="input1_inner">
                <input type="text" class="form-control input datepicker" :placeholder="$t('return_date')">
              </div>
            </div>
          </div>
          <div class="col3 c6">
            <button type="submit" class="booking-button">{{ $t('rent_now') }}</button>
          </div>
        </form>
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
