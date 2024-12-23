<template>
  <div>
    <section class="blog3 section-padding" v-cloak>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-12" v-for="activity in activities" :key="activity.id">
                <div class="item">
                  <div class="post-img">
                    <a> <img :src="activity.img" :alt="$t(`activities.${activity.title}`)"> </a>
                  </div>
                  <div class="post-cont">
                    <span class="calendar"><a>{{ $t(`activities.${activity.date}`) }}</a></span>
                    <h5><a>{{ $t(`activities.${activity.title}`) }}</a></h5>
                    <p>{{ $t(`activities.${activity.content}`) }}</p>
                    <!-- <a class="button-4">{{ $t('common.read_more') }}</a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="blog3-sidebar row">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const activities = ref([
  { id: 1, title: 'swimming_pool', date: 'date.swimming_pool', img: '/assets/img/activity/swimming_pool.jpg', content: 'content.swimming_pool' },
  { id: 2, title: 'spa', date: 'date.spa', img: '/assets/img/activity/spa.jpg', content: 'content.spa' },
  { id: 3, title: 'disco_bar', date: 'date.disco_bar', img: '/assets/img/activity/disco_bar.jpg', content: 'content.disco_bar' },
  { id: 4, title: 'restaurant', date: 'date.restaurant', img: '/assets/img/activity/restaurant.jpg', content: 'content.restaurant' },
  { id: 5, title: 'billiards', date: 'date.billiards', img: '/assets/img/activity/billiard.jpg', content: 'content.billiards' },
  { id: 6, title: 'kids_playground', date: 'date.kids_playground', img: '/assets/img/activity/playground.jpg', content: 'content.kids_playground' },
])

</script>

<style scoped></style>
