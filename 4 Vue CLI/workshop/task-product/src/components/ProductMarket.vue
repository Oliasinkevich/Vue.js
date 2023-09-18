<template>
    <div class="product">
        <p> {{ id }}</p>
        <p> {{ name }}</p>
        <p> {{ price }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProductMarket',
    props: ['id', 'name', 'price']
};
</script>

<style lang="scss" scoped>
.product {
    border: 1px solid #000;
    padding: 5px;
    margin-top: 20px;
}
</style>