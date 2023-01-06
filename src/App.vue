<template>
  <div id="app">
    <HomePage></HomePage>
  </div>
</template>

<script>
import HomePage from './container/HomePage/HomePage.vue';
export default {
  name: 'app',
  components: {
    HomePage,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;                                                                                                                                                                              
}
@import url('./styles/body.scss');
</style>
