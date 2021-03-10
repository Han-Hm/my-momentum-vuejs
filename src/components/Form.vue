<template>
  <div>
    <h1>{{ msg }}</h1>
    <Input v-on:key-enter="submit"/>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import Input from './Input.vue'

  export default defineComponent({
    components: { Input },
    name: 'Form',
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    setup: (props, { emit }) => {
      const submit = (arg: string) => {
        emit('submit-form', arg);
      }

      return { submit }
    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>