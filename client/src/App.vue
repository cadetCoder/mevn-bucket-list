<template>
  <div id="app">
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'App',
  date() {
    return {
      items: []
    }
  },
  async mounted() {
    const response = await axios.get('api/bucketListItems/')
  }
}
</script>

<style>

</style>
