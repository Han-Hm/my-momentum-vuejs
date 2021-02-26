<template>
  <div class="goal-form">
    <h1>What is your main focus for today?</h1>
    <Input v-on:key-enter="submitGoal"/>
  </div>
</template>

<script>
import { setGoal } from '../utils/storageUtils'
import Input from './Input.vue'

export default {
  components: { Input },
  name: 'GoalSettingForm',
  methods: {
    submitGoal(goal) {
      setGoal(goal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goal-form {
  margin-top: 40px;
}
</style>
