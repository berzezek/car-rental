<template>
	<div>

		<main-service />

		<main-new-car />

		<main-featured-car :catalogs="catalog.data"/>

	</div>
</template>

<script setup lang="ts">
const catalog = useCatalogStore()

await callOnce(catalog.fetch)

</script>