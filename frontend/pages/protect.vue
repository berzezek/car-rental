<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
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
</script>

<template>
  <h1>Only I am protected!</h1>
  <p>{{ data }}</p>
  <p>{{ status }}</p>
  <p>{{ lastRefreshedAt }}</p>
  <p>{{ token }}</p>
  <p>{{ refreshToken }}</p>
  
</template>