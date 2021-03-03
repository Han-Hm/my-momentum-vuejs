<template>
  <div class="goal-form">
    <h1>What is your main focus for today?</h1>
    <Input v-on:key-enter="submitGoal"/>
  </div>
</template>

<script lang="ts">
  
import { defineComponent } from 'vue'
import { setGoal } from '../utils/storageUtils'
import Input from './Input.vue'

export default defineComponent({
  components: { Input },
  name: 'GoalSettingForm',
  methods: {
    submitGoal(goal: string) {
      setGoal(goal)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goal-form {
  margin-top: 40px;
}
</style>
