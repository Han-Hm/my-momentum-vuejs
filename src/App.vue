<template>
  <div id="app">
    <ul class="background"></ul>
    <div v-if="name">
      <Watch />
      <Greeting />
      <div v-if="goal">
        <Goal :goal="goal"/>
      </div>
      <div v-else>
        <GoalSettingForm />
      </div>
    </div>
    <div v-else>
      <h1>Hello, what's your name?</h1>
      <Input v-on:key-enter="initName"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Watch from './components/Watch.vue'
import Greeting from './components/Greeting.vue'
import Input from './components/Input.vue'
import { getGoal, getName, setName } from './utils/storageUtils'
import GoalSettingForm from './components/GoalSettingForm.vue'
import Goal from './components/Goal.vue'

export default defineComponent({
  name: 'App',
  components: {
    Watch,
    Greeting,
    Input,
    GoalSettingForm,
    Goal,
  },
  data() {
    return {
      name: '',
      goal: ''
    }
  },
  created() {
    this.name = getName();
    this.goal = getGoal();
    console.log(this.goal)
  },
  methods: {
    initName(name: string) {
      setName(name)
      this.name = name;
    }
  },
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
  
  background-image: url(https://farm5.staticflickr.com/4176/34378167170_be43601df6_k.jpg?momo_cache_bg_uuid=db7c36d0-28ec-40da-ba6c-872d3746f2be);
}
</style>
