<template>
  <section class="container">
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <PostForm :post-prop="post" />
  </section>
</template>

<script>
import PostForm from '~/components/PostForm.vue'

export default {
  name: 'EditPostPage',
  components: {
    PostForm
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
