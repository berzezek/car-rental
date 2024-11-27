<template>
	<div>
		<main-loader v-if="isLoading" />
		<div v-else>
			<div>
				<main-slide />
				<main-about />
				<!-- <main-service /> -->
				<main-search />
				<main-cars :cars="catalogs.cars" />
				<!-- <main-category /> -->
				<main-process />
				<main-video />
				<main-client />
				<main-faq />
				<!-- <main-blog /> -->
				<main-talk />
			</div>
		</div>
	</div>

</template>

<script setup lang="ts">
const commonStore = useCommonStore()
const isLoading = ref(commonStore.isLoading)

const catalogs = useCatalogStore()
await callOnce(catalogs.fetchCars)
</script>