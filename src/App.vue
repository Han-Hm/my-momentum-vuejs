<template>
  <div id="app">
    <ul class="background" :style="wrapperStyle"></ul>
    <div class="background-overlay"></div>
    <Content />
  </div>
</template>

<script lang="ts" >
import { defineComponent, computed } from 'vue'
import Content from './page/Content.vue'
import getUnsplash from './utils/getUnsplash'

export default defineComponent({
  name: 'App',
  components: {
    Content
  },
  setup() {
    const unsplash = getUnsplash();
    const wrapperStyle = computed(() => {
      return unsplash.value?.urls?.regular ? {
        'background-image': `url(${unsplash.value?.urls?.regular})`
      } : {}
    });
    
    return { wrapperStyle }
  }
});
</script>

<style>
body {
  overflow: hidden;
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  overflow: hidden;
  display: table-cell;
  vertical-align: middle;
}
/* #app>div {
  margin-top: 50%;
  transform: translateY(-50%)
} */
.background {
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ddd;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  margin: 0;
  padding: 0;
}
.background-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-image: url('./assets/overlay-vignette.png');
  background-size: 100% 100%;
  opacity: 1;
  transition: opacity 0.3s ease-out;
  pointer-events: none;
}
</style>
