<script setup lang="ts">
definePageMeta({
  auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/' },
  layout: 'dashboard',
})

</script>

<template>
  <dashboard-login />
</template>
