<template>
  <div class="bg-secondary rounded h-100 p-4">
    <h6 class="mb-4">Add vehicle</h6>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingModel" placeholder="Madel" v-model="vehicleData.model">
      <label for="floatingModel">Model</label>
    </div>
    <div class="form-floating mb-3">
      <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model="vehicleData.category">
        <option selected disabled>Open this select menu</option>
        <option v-for="category in catalogStore.categories.results" :key="category.id" :value="category.id">{{ category.title }}</option>
      </select>
      <label for="floatingSelect">Select category</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingBrand" placeholder="Model" v-model="vehicleData.brand">
      <label for="floatingBrand">Brand</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingBody" placeholder="Brand" v-model="vehicleData.body_type">
      <label for="floatingBody">Body</label>
    </div>
    <div class="form-floating mb-3">
      <input type="number" class="form-control" id="floatingPrice" placeholder="Price" v-model="vehicleData.price">
      <label for="floatingPrice">Price</label>
    </div>
    <button @click="submit" class="btn btn-primary mt-4">Add</button>
  </div>
</template>

<script setup lang="ts">
import type { VehicleAdd } from '~/types/apiResponse';

const catalogStore = useCatalogStore()
const vehicleData = ref({} as VehicleAdd)

const submit = async () => {
  await catalogStore.createCar(vehicleData.value)
}

onMounted(async () => {
  await callOnce(async () => {
    await catalogStore.fetchCategories()
  })
})

</script>