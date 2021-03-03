<template>
  <div class="goal">
    <h1>TODAY:</h1>
    <p>{{ goal }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Goal',
  props: {
    goal: {
      type: String,
      default: ''
    }
  },
  created() {
    console.log(this.goal)
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goal {
  margin-top: 40px;
}
h1 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0;
}
p {
  font-size: 2.5em;
  margin: 0;
}
</style>
