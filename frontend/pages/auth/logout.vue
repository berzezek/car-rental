<script setup lang="ts">
definePageMeta({
  auth: { unauthenticatedOnly: false, navigateAuthenticatedTo: '/' },
})
const runtimeConfig = useRuntimeConfig()

const { data } = useAuth()

const deleteCookie = (name) => {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

const logout = async () => {
  deleteCookie(runtimeConfig.public.access);
  deleteCookie(runtimeConfig.public.refresh);
  navigateTo('/');
};

</script>

<template>
  <div>
    <button @click="logout">
      Logout {{ data?.username }}
    </button>
  </div>
</template>
