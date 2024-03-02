<template>
  <div>
    <li @click="showDetails">Книга: {{ book.name }}</li>
    <div v-show="isVisible">
        <p>Писатель: {{ book.writer }}</p>
        <p>Год выпуска: {{ book.year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["book"],
  name: "BookComponent",

  data() {
    return {
        isVisible: false,
    };
  },

  mounted() {},

  methods: {
    showDetails() {
        return this.isVisible = !this.isVisible;
    }
  },
};
</script>

<style lang="scss" scoped></style>
