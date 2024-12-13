<template>
  <!-- Table Start -->
  <div class="container-fluid pt-4 px-4">
    <div class="bg-secondary rounded h-100 p-4">
      <h6 class="mb-4">Hoverable Table</h6>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" v-for="(head, index) in tableHeads" :key="index">{{ head }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, idx) in tableData.results" :key="idx">
            <td v-for="(head, idx) in tableHeads" :key="idx">{{ data[head as keyof typeof data] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- Table End -->
</template>

<script setup lang="ts">
import type { ApiResponse, Vehicle } from '~/types/apiResponse';

const props = defineProps<{
  tableHeads: Array<string>,
  tableData: ApiResponse<Vehicle>
}>();

</script>
