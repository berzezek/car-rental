<template>
	<section id="featured-cars" class="featured-cars">
		<div class="container">
			<div class="section-header">
				<p>checkout <span>the</span> featured cars</p>
				<h2>featured cars</h2>
			</div><!--/.section-header-->
			<div class="featured-cars-content">
				<div class="row">
					<div class="col-lg-3 col-md-4 col-sm-6" v-for="catalog in catalogs" :key="catalog.id">
						<div class="single-featured-cars">
							<div class="featured-img-box">
								<div class="featured-cars-img">
									<img :src="catalog.photos[0]?.original_photo" :alt="catalog.options.brand">
								</div>
								<div class="featured-model-info">
									<p>
										model: {{ catalog.options.model }}
										<span class="featured-mi-span"> {{ catalog.options.millage }} mi</span>
										<span class="featured-hp-span"> {{ catalog.options.engine }}</span>
										automatic
									</p>
								</div>
							</div>
							<div class="featured-cars-txt">
								<h2><a>{{ catalog.options.brand }} {{ catalog.options.model }}</a></h2>
								<h2><a>{{ catalog.category_data.title }}</a></h2>
								<h3>${{ catalog.price }}</h3>
								<p>
									{{ catalog.options.description }}
								</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div><!--/.container-->

	</section><!--/.featured-cars-->
</template>

<script setup lang="ts">
import type { Vehicle } from '~/types/apiResponse'
const props = defineProps({
	catalogs: {
		type: Array as PropType<Vehicle[]>,
		required: true,
	},
});
</script>