<template>
  <div class="bg-secondary rounded h-100 p-4">
    <h6 class="mb-4">Add product</h6>
    <div class="form-floating mb-3">
      <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model="productData.category">
        <option selected disabled>Open this select menu</option>
        <option v-for="category in catalogStore.categories.results" :key="category.id" :value="category.id">{{ category.title }}</option>
      </select>
      <label for="floatingSelect">Select category</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingPrice" placeholder="Title" v-model="productData.title">
      <label for="floatingPrice">Title</label>
    </div>
    <div class="form-floating mb-3">
      <input type="number" class="form-control" id="floatingPrice" placeholder="Price" v-model="productData.price">
      <label for="floatingPrice">Price</label>
    </div>
    <button @click="submit" class="btn btn-primary mt-4">Add</button>
  </div>
</template>

<script setup lang="ts">
import type { ProductAdd } from '~/types/apiResponse';

const catalogStore = useCatalogStore()
const productData = ref({} as ProductAdd)

const submit = async () => {
  await catalogStore.createProduct(productData.value)
}

onMounted(async () => {
  await callOnce(async () => {
    await catalogStore.fetchCategories()
  })
})

</script>