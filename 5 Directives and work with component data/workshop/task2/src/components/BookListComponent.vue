<template>
    <div>
        <ul>
            <BookComponent v-for="book in books" :key="book.id" :book="book">
            </BookComponent>
        </ul>
    </div>
</template>

<script>

import BookComponent from './BookComponent.vue';
export default {
    name: 'BookListComponent',
    data() {
        return {
            books: [
                {
                    name: '1984',
                    writer: 'Джордж Оруэл',
                    year: 1997
                },
                {
                    name: 'Snuff',
                    writer: 'Виктор Пелевин',
                    year: 2015
                },
                {
                    name: 'Идиот',
                    writer: 'Федор Достоевский',
                    year: 1987
                },
                {
                    name: 'Атлант Расправил плечи',
                    writer: 'Айн Рэнд',
                    year: 2007
                },
            ]
        };
    },
    mounted() {
    },
    methods: {},
    components: { BookComponent }
};
</script>

<style lang="scss" scoped>

</style>