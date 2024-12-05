<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})
const runtimeConfig = useRuntimeConfig()
const router = useRouter()


const username = ref<string | null>(null)

const { data } = useAuth()

// @ts-ignore
username.value = data?.username
const deleteCookie = (name: string) => {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

const logout = async () => {
  try {
    deleteCookie(runtimeConfig.public.access);
    deleteCookie(runtimeConfig.public.refresh);
    router.push('/dashboard');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

</script>

<template>
  <div class="container-fluid">
    <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
      <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4" @click="logout">

        <button class="btn btn-primary py-3 w-100 mb-4">Logout</button>
      </div>
    </div>
  </div>
</template>
