<template>
  <dashboard-table :table-heads="tableHeads" :table-data="catalogs.cars"/>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})

const tableHeads = ['id', 'category', 'model', 'brand', 'price'];

const catalogs = useCatalogStore();
onMounted(async () => {
  await callOnce(catalogs.fetchCars);
});
</script>
