<template>
  <section class="container">
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <ul v-else class="list-group">
      <post-tile v-for="post in posts" :key="post.id" :post="post" />
    </ul>
  </section>
</template>

<script>
import PostTile from '~/components/PostTile.vue'

export default {
  name: 'Posts',
  components: {
    PostTile
  },
  asyncData({ $axios }) {
    return $axios
      .get('http://localhost:9000/posts')
      .then(res => {
        return {
          posts: res.data,
          errorMessage: null
        }
      })
      .catch(e => {
        return {
          posts: [],
          errorMessage: e
        }
      })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
