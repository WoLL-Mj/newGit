<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <testTracking />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import testTracking from './components/Demo.vue'
// import testTracking1 from './components/Demo1.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    testTracking
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
