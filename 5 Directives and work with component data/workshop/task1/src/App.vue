<template>
  <AuthComponent />
  <CartComponent />
  <MortgageCalculatorComponent />
</template>

<script>
import AuthComponent from "./components/AuthComponent.vue";
import CartComponent from "./components/CartComponent.vue";
import MortgageCalculatorComponent from "./components/MortgageCalculatorComponent.vue";

export default {
  name: "App",
  components: {
    AuthComponent,
    CartComponent,
    MortgageCalculatorComponent
  },
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
