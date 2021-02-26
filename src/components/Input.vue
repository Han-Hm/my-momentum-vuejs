<template>
  <div class="item_form">
    <input type="text" v-model="newValue" @keypress.enter="onKeypressEnter" />
  </div>
</template>
<script>

export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      newValue: this.value,
    };
  },
  methods: {
    onKeypressEnter () {
      this.$emit('key-enter', this.newValue);
    }
  }
};
</script>
<style scoped>
input {
  background: transparent;
  font-size: 2em;
  color: #fff;
  text-align: center;
  border: none;
  outline: none;
  border-bottom: 1px solid #fff;
}
</style>