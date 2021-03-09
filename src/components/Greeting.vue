<template>
  <div class="hello">
    <!-- <h1><span>{{ msg }}, </span><span><Input :value="getName" /></span></h1> -->
    <h1><span>{{ getGreetingMsg }}, </span><span>{{ getName }}!</span></h1>
  </div>
</template>


<script lang="ts">
import { getName } from '../utils/storageUtils'

export default {
  name: 'Greeting',
  computed: {
    getName,
    getGreetingMsg() {
      const hours = new Date().getHours()
      if (hours < 12) {
        return 'Good Morning'
      }
      return hours < 18 ? 'Good Evening' : 'Good Night'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  color: #fff;
  font-size: 100%;
}
</style>
