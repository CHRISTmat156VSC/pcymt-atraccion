<template>
  <div id="app">
    <HomeView />
  </div>
</template>

<script>
import HomeView from '@/views/HomeView.vue';

export default {
  name: 'App',
  components: {
    HomeView 
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  background-color: #f8f9fa; 
}
</style>