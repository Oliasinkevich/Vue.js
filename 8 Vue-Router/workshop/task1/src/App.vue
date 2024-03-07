<template>
  <nav>
    <RouterLink to="/home">Home</RouterLink>
    <RouterLink to="/about">About Us</RouterLink>
    <RouterLink to="/contact">Contact Us</RouterLink>
    <RouterLink to="/catalog">Catalog</RouterLink>
    <RouterLink to="/404">Info</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>

<script>
export default {
  name: "App",
  components: {},
};
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
