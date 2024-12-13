<template>
  <div class="container-fluid position-relative d-flex p-0">

    <dashboard-sidebar />

    <!-- Content Start -->
    <div class="content">
      <dashboard-navbar />

      <slot />

      <!-- Back to Top -->
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>

  </div>
</template>

<script setup lang="ts">

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'
    },
    {
      rel: 'stylesheet',
      href: '/assets/dashboard/lib/owlcarousel/assets/owl.carousel.min.css'
    },
    {
      rel: 'stylesheet',
      href: '/assets/dashboard/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'
    },
    {
      rel: 'stylesheet',
      href: '/assets/dashboard/css/bootstrap.min.css'
    },
    {
      rel: 'stylesheet',
      href: '/assets/dashboard/css/style.css'
    }

  ],
  script: [
    {
      src: 'https://code.jquery.com/jquery-3.4.1.min.js',
      tagPosition: 'head'
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js',
      tagPosition: 'head'
    },
    {
      src: '/assets/dashboard/lib/chart/chart.min.js',
      tagPosition: 'head'
    },
    {
      src: '/assets/dashboard/lib/easing/easing.min.js',
      tagPosition: 'head'
    },
    {
      src: '/assets/dashboard/lib/waypoints/waypoints.min.js',
      tagPosition: 'head'
    },
    {
      src: '/assets/dashboard/lib/owlcarousel/owl.carousel.min.js',
      tagPosition: 'head'
    },
    {
      src: '/assets/dashboard/lib/tempusdominus/js/moment.min.js',
      tagPosition: 'head'
    },
    {
      src: '/assets/dashboard/lib/tempusdominus/js/moment-timezone.min.js',
      tagPosition: 'head'
    },
    {
      src: '/assets/dashboard/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js',
      tagPosition: 'head'
    },
    {
      src: '/assets/dashboard/js/main.js',
      tagPosition: 'head'
    }
  ]
})
</script>