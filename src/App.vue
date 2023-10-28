<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavMenu from './components/NavMenu.vue';
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <Suspense>
    <RouterView />
  </Suspense>
  <NavMenu />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;300;400&display=swap');

html,
body {
  font-family: "Barlow Condensed", sans-serif;
  overflow-x: hidden;
  max-height: 100vh;
  max-height: 100svh;
}

h1 {
  font-size: 40px;
}

p {
  font-size: 18px;
}
</style>
