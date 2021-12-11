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
    this.items = response.data
  }
}
</script>

<style>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
</style>
