<template>
  <div class="watch">
    <p>{{hh}}:{{mm}}:{{ss}}</p>
  </div>
</template>

<script>
// import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue';
export default {
  name: 'Watch',
  // setup() {
  //   let hh = ref('');
  //   let mm = ref('');
  //   let ss = ref('');
  //   let timerId = ref(0);
    
  //   function addZeros(n) {
  //     return n.toString().length === 1 ? '0' + n : n.toString();
  //   }
  //   function setTime() {
  //     const date = new Date();
  //     hh = addZeros(date.getHours());
  //     mm = addZeros(date.getMinutes());
  //     ss = addZeros(date.getSeconds());
  //   }
  //   onBeforeMount(() => {
  //     setTime();
  //   })
  //   onMounted(() => {
  //     timerId = setInterval(setTime, 1000);
  //   });
  //   onUnmounted(() => {
  //     if (timerId.value) {
  //       clearInterval(timerId);
  //       timerId = 0;
  //     }
  //   });
  //   return {
  //     hh, mm, ss
  //   }
  // },
  data () {
    return {
      hh: 0,
      mm: 0,
      ss: 0,
      timerId: null,
    }
  },
  methods: {
    setTime() {
      const date = new Date();
      this.hh = this.addZeros(date.getHours());
      this.mm = this.addZeros(date.getMinutes());
      this.ss = this.addZeros(date.getSeconds());
    },
    addZeros(n) {
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
}
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
  p{
    margin-block-end: 0;
  }
</style>
