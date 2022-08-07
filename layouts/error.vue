<template>
  <div>
    <div class="container1">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
}
</script>

<style scoped>
.container1 {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
