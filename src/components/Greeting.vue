<template>
  <div class="hello">
    <!-- <h1><span>{{ msg }}, </span><span><Input :value="getName" /></span></h1> -->
    <h1><span>{{ msg }}, </span><span>{{ getName }}!</span></h1>
  </div>
</template>


<script lang="ts">
import { getName } from '../utils/storageUtils'

export default {
  name: 'Greeting',
  data() {
    return {
      msg: 'Hello'
    }
  },
  computed: {
    getName,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  color: #fff;
  font-size: 100%;
}
</style>
