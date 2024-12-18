<template>
  <div>
    <!-- Cars 3 -->
    <section id="products" data-scroll-index="3" class="cars3 section-padding">
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
              <div v-for="product in products" :key="product.id" class="item mb-15">
                <div class="project-date">
                  <a class="br">
                    <div class="year">${{ product.price }} <span>/ {{ $t('day') }}</span></div>
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
                <a class="img" :href="productDetail(product.id)">
                  <img :src="product.photos?.[0]?.thumbnail || '/assets/img/placeholder.jpg'" :alt="product.title"
                    class="img-fluid">
                  <div class="bottom-fade"></div>
                  <div class="arrow"> <i class="ti-arrow-right"></i> </div>
                </a>
                <div class="info">
                  <div class="title"><a>{{ product.title }}</a></div>
                  <div class="details">
                    <span><i class="omfi-door"></i> {{ product.options?.number_seats || '-' }} {{ $t('seats') }}</span>
                    <span><i class="omfi-transmission"></i> {{ product.options?.engine || '-' }}</span>
                    <span><i class="omfi-age"></i> {{ $t('age') }} {{ product.options?.millage || '-' }}</span>
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
import type { ApiResponse, Product } from '~/types/apiResponse'

const localeRoute = useLocaleRoute()
const { locale } = useI18n()

const props = defineProps<{
  products: ApiResponse<Product>
}>()

const products = ref(props.products.results)

const productDetail = (id: number) => {
  // const route = localeRoute(`/products/${id}/`, locale.value)
  // return route ? route.path : '/'
  console.log('productDetail', id)
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

watch(products, () => {
  initializeCarousel()
})

onMounted(() => {
  initializeCarousel()
})
</script>
