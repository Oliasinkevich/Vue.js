<template>
  <BookList />
</template>

<script>

import BookList from './components/BookListComponent.vue'


export default {
  name: 'App',
  components: {
    BookList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- Разработка приложения для отображения информации о книгах
Требуется создать компонент "Книга" (Book), который будет отображать информацию о книге, такую как название, автор и год издания. Компонент "Книга" должен иметь возможность отображать дополнительные детали о книге по требованию пользователя. Также необходимо создать компонент "Список книг" (BookList), который будет отображать список книг из переданного массива. -->
