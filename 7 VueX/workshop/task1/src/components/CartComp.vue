<template>
  <div>
    <h3>Total items {{ totalItems }}</h3>
    <h3>Total price {{ totalPrice }}</h3>
    <CartItemComp v-for="item in items" :key="item.id" :item="item" />                          
  </div>
</template>

<script>
import CartItemComp from "./CartItemComp.vue";
export default {
  name: "CartComp",
  components: {
    CartItemComp,
  },
  methods: {
    addItemToCart() {
      const id = Date.now().toString();

      const newItem = {
        id: 1,
        name: "Good" + id,
        price: 10,
      };

      this.$store.commit("ADD_ITEM_TO_CART", newItem);
    },
  },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
    totalItems() {
      return this.$store.getters.totalItems;
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  created() {
    this.$store.dispatch('getCartData');
  },
};
</script>
