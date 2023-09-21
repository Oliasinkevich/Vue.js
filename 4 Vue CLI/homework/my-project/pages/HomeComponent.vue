<template>
    <div>
        <!-- <LineComponent /> -->
        <HeaderComponent />
        <HomePromoComponent />

    </div>
</template>

<script>
// import LineComponent from '@/components/LineComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import HomePromoComponent from '@/components/HomePromoComponent.vue';

export default {
    name: 'HomeComponent',
    components: {
    // LineComponent,
    HeaderComponent,
    HomePromoComponent
}
};
</script>

<style lang="scss" scoped>

</style>