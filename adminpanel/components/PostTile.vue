<template>
  <li class="list-group-item">
    <nuxt-link tag="a" :to="`/newpost/${post.id}`">{{ post.title }}</nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
.post {
  display: block;
  width: 60%;
  margin: 20px 0;
  padding: 20px;
}

.post > .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
