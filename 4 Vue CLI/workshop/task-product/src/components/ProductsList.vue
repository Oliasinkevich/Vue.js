<template>
    <div>
        <button @click="uprise()">По возрастанию цены</button>
        <button @click="downrise()">По убыванию цены</button>
        <div class="arrange">
            <ProductMarket v-for="{ id, name, price } in goodsList" :key="id" :id="id" :name="name" :price="price">
            </ProductMarket>
        </div>
    </div>
</template>

<script>
import ProductMarket from './ProductMarket.vue';

export default {
    name: 'ProductsList',
    components: { ProductMarket },
    data() {
        return {
            goodsList: [
                { id: 1, name: "Apple", price: 600 },
                { id: 2, name: "Cucumber", price: 150 },
                { id: 3, name: "Tomato", price: 750 },
                { id: 4, name: "Watermelon", price: 1250 },
                { id: 5, name: "Salad", price: 80 },
                { id: 6, name: "Avocado", price: 820 }
            ]
        };
    },
    methods: {
        uprise() {
            this.goodsList = this.goodsList.sort((a, b) => a.price - b.price);
        },
        downrise() {
            this.goodsList = this.goodsList.sort((a, b) => b.price - a.price);
        }
    }
};
</script>

<style lang="scss" scoped>
.arrange {
    display: flex;
    gap: 20px;
    justify-content: center;
}
</style>