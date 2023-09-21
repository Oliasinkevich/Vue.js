<template>
  <div id="app">
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from '../pages/HomeComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

* {
  margin: 0;
  padding: 0;
  // position: relative;
  // z-index: 5;
}

body {
  font-family: "Lato";
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>
