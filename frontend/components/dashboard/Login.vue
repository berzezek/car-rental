<template>
  <!-- Sign In Start -->
  <div class="container-fluid">
    <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
      <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
        <p v-if="errMess" class="mx-auto">{{ errMess }}</p>
        <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <a href="index.html" class="">
              <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Eco drive</h3>
            </a>
            <h3>Sign In</h3>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="Username" v-model="username">
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating mb-4">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
            <label for="floatingPassword">Password</label>
          </div>
          <button @click="login" class="btn btn-primary py-3 w-100 mb-4">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
  }
})

const username = ref('');
const password = ref('');
const errMess = ref('');

const router = useRouter();

const { signIn } = useAuth()

const redirectAfterLogin = () => {
  return router.currentRoute.value.query.redirect as string || '/dashboard';
}

const login = async () => {
  if (!username.value || !password.value) {
    console.error('Username and password are required');
    errMess.value = 'Username and password are required';
    return;
  }
  try {
    await signIn({
      username: username.value,
      password: password.value,
    }, {callbackUrl: redirectAfterLogin(), external: true});
  } catch (error) {
    console.error('Login failed:', error);
    errMess.value = 'Login failed';
  } finally {
    username.value = '';
    password.value = '';
  }
};

</script>