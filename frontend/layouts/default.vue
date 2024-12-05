<template>
	<div>
		<main-scroll />
		<main-navbar />

		<slot />
		<main-footer />
		<main-popup />
	</div>
</template>

<script setup lang="ts">

useHead({
	link: [
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap'
		},
		{
			rel: 'stylesheet',
			href: '/assets/css/plugins.css'
		},
		{
			rel: 'stylesheet',
			href: '/assets/css/style.css'
		}
	],
  script: [
    {
      src: '/assets/js/jquery-3.7.1.min.js',
      tagPosition: 'head'
    },
		{
			src: '/assets/js/jquery-migrate-3.4.1.min.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/popper.min.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/modernizr-2.6.2.min.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/imagesloaded.pkgd.min.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/jquery.isotope.v3.0.2.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/bootstrap.min.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/scrollIt.min.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/jquery.waypoints.min.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/owl.carousel.min.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/jquery.stellar.min.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/jquery.magnific-popup.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/select2.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/datepicker.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/YouTubePopUp.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/vegas.slider.min.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/custom.js',
			tagPosition: 'head'
		},
		{
			src: '/assets/js/vegas-slider-kenburns.js',
			tagPosition: 'head'
		}
  ]
})
</script>
