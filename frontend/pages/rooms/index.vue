<template>
  <div>
    <main-slide :slides-image="slidesImage" />
    <section class="cars4 section-padding">
      <div class="container">
        <div class="row">
          <!-- Content -->
          <div class="col-md-12 car-list">
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-30">
                <div class="item">
                  <figure><img src="/assets/img/new/room_1.webp" alt="" class="img-fluid"></figure>
                  <div class="content">
                    <div class="cont">
                      <h3>Standart</h3>
                      <div class="features"><span><i class="omfi-passengers"></i> Passengers</span>
                        <p>2</p>
                      </div>
                      <div class="book mt-30">
                        <div>
                          <div class="price">1,550,000 UZS <span>/ day</span></div>
                        </div>
                        <!-- <a href="car-details.html" class="button-4">Deatils</a> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 mb-30">
                <div class="item">
                  <figure> <img src="/assets/img/new/room_2.webp" alt="" class="img-fluid"> </figure>
                  <div class="content">
                    <div class="cont">
                      <h3>VIP</h3>
                      <div class="features"><span><i class="omfi-passengers"></i> Passengers</span>
                        <p>2</p>
                      </div>
                      <div class="book mt-30">
                        <div>
                          <div class="price">1,850,000 UZS <span>/ day</span></div>
                        </div>
                        <!-- <a href="car-details.html" class="button-4">Deatils</a> -->
                      </div>
                    </div>
                  </div>
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
const { $amplitude } = useNuxtApp();

const slidesImage = [
  { src: '/assets/img/new/room_1.webp' },
  { src: '/assets/img/new/room_2.webp' },
  { src: '/assets/img/new/room_3.webp' }
]

onMounted(() => {
  $amplitude.track("Enter Rooms Page")
  $amplitude.logEvent('rooms_page_viewed')
})
</script>

<style scoped></style>