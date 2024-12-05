<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})

const {
  status,
  data,
  lastRefreshedAt,
  token,
  refreshToken,
  getSession,
  signUp,
  signIn,
  signOut,
  refresh
} = useAuth()

if (status.value !== 'authenticated') {
  navigateTo('/auth/login')
} 
</script>

<template>
  <p>{{ data }}</p>
  <p>{{ status }}</p>
  <p>{{ lastRefreshedAt }}</p>
  <p>{{ token }}</p>
  <p>{{ refreshToken }}</p>
  
</template>