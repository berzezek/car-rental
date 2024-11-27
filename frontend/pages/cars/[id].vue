<template>
  <div>
    <!-- Kenburns SlideShow -->
    <aside class="kenburns-section" id="kenburnsSliderContainerDetails" data-overlay-dark="5">
      <div class="kenburns-inner h-100"></div>
    </aside>
    <!-- Details -->
    <section class="car-details section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <div class="row mb-60">
              <div class="col-md-12">
                <div class="section-subtitle">{{ car.category_data.title }}</div>
                <div class="section-title">{{ `${car.brand} ${car.model}` }}</div>
                <p class="mb-30">{{ $t('car_description') }}</p>
                <ul class="list-unstyled list">
                  <li v-for="feature in ['roadside_assistance', 'free_cancellation', 'rent_now_pay']" :key="feature">
                    <div class="list-icon"><span class="ti-check"></span></div>
                    <div class="list-text">
                      <p>{{ $t(feature) }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Gallery Image -->
            <div class="row">
              <div class="col-md-12">
                <h3>{{ $t('image_gallery') }}</h3>
              </div>
            </div>
            <div class="row gallery-items mb-60">
              <div
                class="col-md-4 gallery-masonry-wrapper single-item cardio"
                v-for="photo in car.photos"
                :key="photo.id"
              >
                <a :href="photo.original_photo" :title="`${car.brand} - ${car.model}`" class="gallery-masonry-item-img-link img-zoom">
                  <div class="gallery-box">
                    <div class="gallery-img">
                      <img :src="photo.thumbnail" class="img-fluid mx-auto d-block" alt="" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <!-- FAQs -->
            <div class="row">
              <div class="col-md-12">
                <h3>{{ $t('rental_conditions') }}</h3>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-12">
                <ul class="accordion-box clearfix">
                  <li class="accordion block" v-for="(faq, index) in rentalFaqs" :key="index">
                    <div class="acc-btn"><span class="count">{{ index + 1 }}.</span> {{ $t(faq.title) }}</div>
                    <div class="acc-content">
                      <div class="content">
                        <div class="text">{{ $t(faq.content) }}</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Sidebar -->
          <div class="col-lg-4 col-md-12">
            <div class="sidebar-car">
              <div class="title">
                <h4>${{ car.price }} <span>{{ $t('per_day') }}</span></h4>
              </div>
              <div class="item">
                <div class="features" v-for="(feature, key) in carFeatures" :key="key">
                  <span><i :class="feature.icon"></i> {{ $t(feature.label) }}</span>
                  <p>{{ feature.value }}</p>
                </div>
                <div class="btn-double mt-30">
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#0">
                    {{ $t('rent_now') }}
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=8551004444" target="_blank">
                    <span class="fa-brands fa-whatsapp"></span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const catalogs = useCatalogStore();
const route = useRoute();

await callOnce(() => catalogs.fetchCar(route.params.id.toString()));
const car = catalogs.car;

const rentalFaqs = [
  { title: 'contract_annexes', content: 'contract_annexes_content' },
  { title: 'license_age', content: 'license_age_content' },
  { title: 'prices', content: 'prices_content' },
  { title: 'payments', content: 'payments_content' },
  { title: 'delivery', content: 'delivery_content' },
  { title: 'traffic_fines', content: 'traffic_fines_content' },
];

const carFeatures = {
  doors: { label: 'doors', icon: 'omfi-door', value: car.options?.number_seats || '-' },
  passengers: { label: 'passengers', icon: 'omfi-passengers', value: car.options?.passengers || '-' },
  transmission: { label: 'transmission', icon: 'omfi-transmission', value: car.options?.transmission || '-' },
  luggage: { label: 'luggage', icon: 'omfi-luggage', value: car.options?.luggage || '-' },
  air_condition: { label: 'air_condition', icon: 'omfi-condition', value: car.options?.air_condition? 'Yes' : 'No' },
  age: { label: 'age', icon: 'omfi-age', value: car.options?.age || '-' },
};

onMounted(() => {
  //@ts-ignore
  $('#kenburnsSliderContainerDetails').vegas({
    slides: car.photos?.map((photo) => ({ src: photo.original_photo })) || [],
    overlay: true,
    transition: 'fade2',
    animation: 'kenburnsUpRight',
    transitionDuration: 1000,
    delay: 10000,
    animationDuration: 20000,
  });
});
</script>
