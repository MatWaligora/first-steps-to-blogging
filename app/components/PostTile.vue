<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ description }}</p>
    </div>
    <div class="card-footer">
      <nuxt-link tag="a" :to="`/posts/${post.id}`">Read all</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    description() {
      return this.post.body.substr(0, 15)
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
