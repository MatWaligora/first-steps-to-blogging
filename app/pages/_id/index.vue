<template>
  <section class="container">
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <post :post="post"></post>
  </section>
</template>

<script>
import Post from '~/components/Post.vue'

export default {
  components: {
    Post
  },
  asyncData({ $axios, params }) {
    return $axios
      .get(`http://localhost:9000/posts/${params.id}`)
      .then(res => {
        return {
          post: res.data,
          errorMessage: null
        }
      })
      .catch(e => {
        return {
          post: {},
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
