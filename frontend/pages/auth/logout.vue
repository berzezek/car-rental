<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})
const runtimeConfig = useRuntimeConfig()
const router = useRouter()

const { data } = useAuth()

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

const logout = async () => {
  try {
    deleteCookie(runtimeConfig.public.access);
    deleteCookie(runtimeConfig.public.refresh);
    await router.push('/auth/login');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

</script>

<template>
  <div class="container-fluid">
    <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
      <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4" @click="logout">

        <button class="btn btn-primary py-3 w-100 mb-4">Logout {{ data?.username }}</button>
      </div>
    </div>
  </div>
</template>
