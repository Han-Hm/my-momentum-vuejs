<template>
  <div id="app">
    <ul class="background" :style="wrapperStyle"></ul>
    <div v-if="name">
      <Watch />
      <Greeting />
      <div v-if="goal">
        <Goal :goal="goal"/>
      </div>
      <div v-else>
        <Form :msg="'What is your main focus for today?'" v-on:submit-form="setGoal"/>
      </div>
    </div>
    <div v-else>
      <Form :msg="'Hello, what\'s your name?'" v-on:submit-form="setName"/>
    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent, computed } from 'vue'
import Watch from './components/Watch.vue'
import Greeting from './components/Greeting.vue'
import Form from './components/Form.vue'
import Goal from './components/Goal.vue'
import getUnsplash from './utils/getUnsplash'
import useUserData from './utils/useUserData'

export default defineComponent({
  name: 'App',
  components: {
    Watch,
    Greeting,
    Form,
    Goal,
  },
  setup() {
    const { name, goal, setName, setGoal } = useUserData();
    const unsplash = getUnsplash();
    const wrapperStyle = computed(() => ({
      'background-image': `url(${unsplash.value?.urls?.regular})`
    }));

    return {
      name,
      goal,
      wrapperStyle,
      setName,
      setGoal
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  overflow: hidden;
}
/* #app>div {
  margin-top: 50%;
  transform: translateY(-50%)
} */
.background {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  margin: 0;
  padding: 0;
}
</style>
