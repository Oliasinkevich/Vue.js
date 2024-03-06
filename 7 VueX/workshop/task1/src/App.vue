<template>
  <CountComp />
  <CatalogComp />
  <CartComp />
</template>

<script>
import CountComp from './components/CountComp.vue'
import CartComp from './components/CartComp.vue'
import CatalogComp from './components/CatalogComp.vue'



export default {
  name: 'App',
  components: {
    CountComp,
    CartComp,
    CatalogComp
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
