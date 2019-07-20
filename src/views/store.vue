<template>
  <div>
<!--    <a-input v-model="inputValue"/>-->
    <a-input @input="handleInput"></a-input>
    <p>{{ inputValue }}</p>
    <a-show :content="inputValue"></a-show>
  </div>
</template>

<script>
import AInput from '_c/AInpput.vue'
import AShow from '_c/AShow.vue'
export default {
  //
  name: 'store',
  components: {
    AInput,
    AShow
  },
  data () {
    return {
      inputValue: ''
    }
  },
  comments: {
    AInput
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>
