<template>
    <div>
        <ProjectBanner />
        <ProjectCategories />
    </div>
</template>

<script>
import ProjectBanner from './ProjectBanner.vue';
import ProjectCategories from './ProjectCategories.vue';

export default {
    name: 'ProjectComponent',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { 
        ProjectBanner, 
        ProjectCategories 
    }

};
</script>

<style lang="scss" scoped>

</style>