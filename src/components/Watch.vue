<template>
  <div class="watch">
    <p>{{hh}}:{{mm}}:{{ss}}</p>
  </div>
</template>

<script lang="ts">import { defineComponent } from "vue";

export default defineComponent({
  name: 'Watch',
  data () {
    return {
      hh: '00',
      mm: '00',
      ss: '00',
      timerId: 0,
    }
  },
  methods: {
    setTime() {
      const date = new Date();
      this.hh = this.addZeros(date.getHours());
      this.mm = this.addZeros(date.getMinutes());
      this.ss = this.addZeros(date.getSeconds());
    },
    addZeros(n: number) {
      return n.toString().length === 1 ? '0' + n : n.toString();
    }
  },
  mounted() {
    this.timerId = setInterval(this.setTime, 1000);
  },
  created() {
    this.setTime();
  },
  unmounted() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
  }
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
  p {
    margin-block-end: 0;
  }
</style>
