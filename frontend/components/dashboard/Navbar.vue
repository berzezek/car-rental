<template>
  <!-- Navbar Start -->
  <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
    <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
      <h2 class="text-primary mb-0"><i class="fa fa-user-edit"></i></h2>
    </a>
    <a href="#" class="sidebar-toggler flex-shrink-0">
      <i class="fa fa-bars"></i>
    </a>
    <form class="d-none d-md-flex ms-4">
      <input class="form-control bg-dark border-0" type="search" placeholder="Search">
    </form>
    <div class="navbar-nav align-items-center ms-auto">
      <div class="nav-item dropdown d-flex">
        <a class="nav-link">
          <span class="d-none d-lg-inline-flex">{{ data?.username }}</span>
        </a>
        <a href="/auth/logout" class="nav-link">
          <span class="d-none d-lg-inline-flex">Log out</span>
        </a>
      </div>
    </div>
  </nav>
  <!-- Navbar End -->

</template>

<script lang="ts" setup>

const { data } = useAuth()

</script>