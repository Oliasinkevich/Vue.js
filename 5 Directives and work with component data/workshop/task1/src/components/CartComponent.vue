<template>
  <div>
    <ul>
      <li v-for="good in goods" :key="good.id">
        <p>{{ good.name }}</p>
        <label
          >Quantity:
          <input type="number" v-model="good.quantity" />
        </label>
        <p>Price: {{ good.price }}</p>
        <p>Subtotal: {{ good.price * good.quantity }}</p>
      </li>
    </ul>
    <h3>Total: {{ totalCalc }}</h3>
  </div>
</template>

<script>
export default {
  name: "CartComponent",

  data() {
    return {
      goods: [
        {
          id: 1,
          name: "apple",
          price: 12,
          quantity: 1,
        },
        {
          id: 2,
          name: "watermelon",
          price: 25,
          quantity: 1,
        },
        {
          id: 3,
          name: "orange",
          price: 17,
          quantity: 1,
        },
      ],
    };
  },

  computed: {
    totalCalc() {
        return this.goods.reduce((sum, good) => sum + good.price * good.quantity, 0) 
    }
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>

<!-- Разработать интерфейс корзины товаров, в котором пользователь может изменять количество товаров в корзине и видеть общую сумму покупки. Каждый товар представлен в виде блока, содержащего поле ввода для изменения количества товара и отображение его цены. При изменении количества товаров в поле ввода, необходимо автоматически пересчитывать стоимость каждого товара и обновлять общую сумму покупки.  -->

