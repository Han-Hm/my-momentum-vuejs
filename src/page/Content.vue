<template>
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
</template>

<script lang="ts" >
  import { defineComponent } from 'vue'
  import Watch from '../components/Watch.vue'
  import Greeting from '../components/Greeting.vue'
  import Form from '../components/Form.vue'
  import Goal from '../components/Goal.vue'
  import useUserData from '../utils/useUserData'

  export default defineComponent({
    name: 'Content',
    components: {
      Watch,
      Greeting,
      Form,
      Goal,
    },
    setup() {
      const { name, goal, setName, setGoal } = useUserData();

      return {
        name,
        goal,
        setName,
        setGoal
      }
    }
  })
</script>
