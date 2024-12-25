<template>
  <dashboard-table :table-heads="tableHeads" :table-data="catalogs.products"/>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})

const tableHeads = ['id', 'category', 'title', 'price'];

const catalogs = useCatalogStore();
onMounted(async () => {
  await callOnce(catalogs.fetchProducts);
});
</script>
