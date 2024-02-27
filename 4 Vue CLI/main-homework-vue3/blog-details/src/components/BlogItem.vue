<template>
    <div>
        <li>{{ blog.id }} {{ blog.article }}</li>
    </div>
</template>

<script>
export default {
    name: 'BlogItem',
    
    props: ['blog'],

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>