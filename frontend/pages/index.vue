<template>
	<div>
		<main-slide />
		<main-about />
		<main-service />
		<main-search />
		<main-cars :cars="catalogs" />
		<main-category />
		<main-process />
		<main-video />
		<main-client />
		<main-testimonial />
		<main-blog />
		<main-talk />
	</div>
</template>

<script setup lang="ts">
const catalogs = useCatalogStore()

await callOnce(catalogs.fetch)

</script>