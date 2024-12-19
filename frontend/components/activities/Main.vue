<template>
  <section class="blog3 section-padding">
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
                  <span class="category"><a href="blog.html">{{ $t(`activities.${activity.title}`) }}</a></span>
                  <span class="calendar"><a href="blog.html">{{ activity.date }}</a></span>
                  <h5><a href="post.html">{{ $t(`activities.${activity.title}`) }}</a></h5>
                  <p>{{ activity.content }}</p>
                  <a class="button-4">{{ $t('read_more') }}</a>
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
</template>

<script setup lang="ts">

const activities = ref([
  { id: 1, title: 'Swimming Pool', date: '27 Apr, 2024', img: '/assets/img/activity/swimming_pool.jpg', content: 'Enjoy a refreshing swim in our luxurious pool.' },
  { id: 2, title: 'Spa', date: '27 Apr, 2024', img: '/assets/img/activity/spa.jpg', content: 'Relax and rejuvenate in our spa with various treatments.' },
  { id: 3, title: 'Disco Bar', date: '27 Apr, 2024', img: '/assets/img/activity/disco_bar.jpg', content: 'Dance the night away at our vibrant disco bar.' },
  { id: 4, title: 'Restaurant', date: '27 Apr, 2024', img: '/assets/img/activity/restaurant.jpg', content: 'Savor gourmet dishes crafted by our top chefs.' },
  { id: 5, title: 'Billiards', date: '27 Apr, 2024', img: '/assets/img/activity/billiard.jpg', content: 'Enjoy a friendly game of billiards with your companions.' },
  { id: 6, title: 'Kids Playground', date: '27 Apr, 2024', img: '/assets/img/activity/playground.jpg', content: 'Let your kids have fun in our safe and entertaining playground.' },
]);
</script>

<style scoped></style>
