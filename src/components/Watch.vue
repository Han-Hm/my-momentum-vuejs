<template>
  <div class="watch">
    <div>{{time}}</div>
    <div class="change" v-on:click="changeDateFormat"></div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import useTime, { DateFormat } from "../utils/useTime";

  export default defineComponent({
    name: 'Watch',
    setup() {
      const dateFormat = ref<DateFormat>('HH:mm:ss');
      const time = useTime(dateFormat.value);
      const changeDateFormat = () => {
        console.log('@@')
        dateFormat.value = 'hh:mm a';
      }
      
      return {
        time, 
        changeDateFormat
      }
    },
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .watch {
    font-size: 1050%;
    letter-spacing: -5px;
    color: #ffffff;
    text-align: center;
    font-weight: 500;
    user-select: none;
  }
  .change {
    width: 20px;
    height: 20px;
    background-color: #000;
  }
</style>