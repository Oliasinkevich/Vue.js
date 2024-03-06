<template>
  <div>
    <p>{{ item.name }}</p>
    <p>Price: {{ item.price }}</p>
    <button @click="addItemToCart(item)">Buy</button>
  </div>
  ``
</template>

<script>

export default {
  name: "CatalogItemComp",
  props: ["item"],

  data() {
    return {};
  },

  mounted() {},

  methods: {
    addItemToCart(item) {
      this.$store.dispatch("addToCart", item);
    },
  },
};
</script>
