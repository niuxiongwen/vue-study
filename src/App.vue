<template>
  <div id="app">
    <a-layout>
      <router-view/>
    </a-layout>
  </div>
</template>
<script>
import ALayout from '_c/ALayout.vue'
export default {
  name: 'app',
  components: {
    ALayout
  }
}
</script>
