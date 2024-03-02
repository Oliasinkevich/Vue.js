<template>
  <div>
    <ul>
      <h3>Продукты</h3>
      <li v-for="product in products" :key="product.id">
        <p>Product: {{ product.name }}</p>
        <p>Price: {{ formattedPrice(product) }}</p>
        <p v-if="product.available">Available</p>
        <p v-else>Out of stock</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductDetailsComponent",

  data() {
    return {
      products: [
        {
          name: "apple",
          price: 13,
          available: true,
        },
        {
          name: "watermelon",
          price: 24,
          available: true,
        },
        {
          name: "pineapaple",
          price: 29,
          available: false,
        },
      ],
    };
  },

  mounted() {},

  computed: {
    formattedPrice() {
      return function (product) {
        return "$" + product.price;
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
