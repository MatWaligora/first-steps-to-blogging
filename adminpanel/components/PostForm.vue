<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form>
          <div class="form-group">
            <label for="postTitle">Title: </label>
            <input
              id="postTitle"
              v-model="post.title"
              type="text"
              class="form-control"
              placeholder="post title"
            />
          </div>
          <div class="form-group">
            <label for="postBody">Body: </label>
            <textarea
              id="postBody"
              v-model="post.body"
              class="form-control"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn btn-success"
            @click.prevent="handleSubmit"
          >
            {{ editMode ? 'Save post' : 'Add post' }}
          </button>
        </form>
        <div class="mt-4">
          <p v-if="error" class="text-danger">{{ error }}</p>
          <p v-if="success" class="text-success">
            Cool, you added a post !
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  props: {
    postProp: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      post: {
        title: '',
        body: ''
      },
      success: false,
      editMode: false,
      error: null
    }
  },
  created() {
    if (this.postProp) {
      this.post = this.postProp
      this.editMode = true
    }
  },
  methods: {
    handleSubmit() {
      this.editMode ? this.updatePost() : this.addPost()
    },
    async addPost() {
      try {
        await this.$axios.post('http://localhost:9000/posts', this.post)
        this.error = null
        this.success = true
      } catch {
        this.error = 'Could not add your post'
      }
    },
    async updatePost() {
      try {
        await this.$axios.put(
          `http://localhost:9000/posts/${this.post.id}`,
          this.post
        )
        this.error = null
        this.success = false
      } catch {
        this.error = 'Could not update your post'
      }
    }
  }
}
</script>

<style scoped></style>
