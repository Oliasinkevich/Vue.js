<template>
  <div>
    <p>{{ item.name }}</p>
    <p>Price: {{ item.price }}</p>
    <p>Quantity: {{ item.quantity }}</p>
    <h3>TotalAmount: {{ item.quantity * item.price }}</h3>
  </div>
</template>

<script>
export default {
  name: "CartItemComp",
  props: ["item"],

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
