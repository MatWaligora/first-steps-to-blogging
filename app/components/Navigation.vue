<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <nuxt-link class="nav-link" exact to="/">Home</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" exact to="/posts">Posts</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
.nuxt-link-active {
  font-weight: bold;
}
</style>
