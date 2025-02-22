<template>
  <div>
    <!-- Cars 3 -->
    <section id="cars" data-scroll-index="3" class="cars3 section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center mb-30">
            <div class="section-subtitle">{{ $t('select_your_car') }}</div>
            <div class="section-title"><span>{{ $t('car_fleet') }}</span></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="owl-theme owl-carousel">
              <div v-for="car in cars" :key="car.id" class="item mb-15">
                <div class="project-date">
                  <a class="br">
                    <div class="year">${{ car.price }} <span>/ {{ $t('day') }}</span></div>
                  </a>
                  <div class="br-left-top">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                      <path d="M11 0L0 0L0 11C0 4.92487 4.92487 0 11 0Z" fill="#ffffff"></path>
                    </svg>
                  </div>
                  <div class="br-right-bottom">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-11 h-11">
                      <path d="M11 0L0 0L0 11C0 4.92487 4.92487 0 11 0Z" fill="#ffffff"></path>
                    </svg>
                  </div>
                </div>
                <a class="img" :href="carDetail(car.id)">
                  <img :src="car.photos?.[0]?.thumbnail || '/assets/img/placeholder.jpg'" :alt="car.brand"
                    class="img-fluid">
                  <div class="bottom-fade"></div>
                  <div class="arrow"> <i class="ti-arrow-right"></i> </div>
                </a>
                <div class="info">
                  <div class="title"><a>{{ car.brand }} {{ car.model }}</a></div>
                  <div class="details">
                    <span><i class="omfi-door"></i> {{ car.options?.number_seats || '-' }} {{ $t('seats') }}</span>
                    <span><i class="omfi-transmission"></i> {{ car.options?.engine || '-' }}</span>
                    <span><i class="omfi-age"></i> {{ $t('age') }} {{ car.options?.millage || '-' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="line-vr-section"></div>
  </div>
</template>

<script setup lang="ts">
import type { ApiResponse, Vehicle } from '~/types/apiResponse'

const localeRoute = useLocaleRoute()
const { locale } = useI18n()

const props = defineProps<{
  cars: ApiResponse<Vehicle>
}>()

const cars = ref(props.cars.results)

const carDetail = (id: number) => {
  const route = localeRoute(`/cars/${id}/`, locale.value)
  return route ? route.path : '/'
}

const initializeCarousel = () => {
  if (typeof window !== 'undefined') {
    $(document).ready(() => {
      //@ts-ignore
      $('.cars3 .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 }
        }
      })
    })
  }
}

watch(cars, () => {
  initializeCarousel()
})

onMounted(() => {
  initializeCarousel()
})
</script>
