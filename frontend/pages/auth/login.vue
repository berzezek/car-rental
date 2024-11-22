<script setup lang="ts">
definePageMeta({
  auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/' },
  layout: 'login',
})

const { signIn } = useAuth()
const router = useRouter()
const route = useRoute()

const credentials = {
  username: 'foo',
  password: 'bar',
}

const login = async () => {
  try {
    // Вызов signIn с передачей credentials
    await signIn({
      username: 'foo',
      password: 'bar',
    }, { callbackUrl: route.query.redirect as string || '/' });
  } catch (error) {
    // Лог ошибок при логине
    console.error('Login failed:', error);
  }

};


</script>

<template>
  <div>
    <button @click="login">
      Username and Password
    </button>
  </div>
</template>
