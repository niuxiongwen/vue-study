<template>
  <div class="email">
   email: niuxiongwen@gmail.com
    <button @click="handleClick">按我 </button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  },
  //
  mounted () {
    console.log(this.$bus)
  }
}
</script>
<style>
.email{
  border: 1px solid red;
}
</style>
