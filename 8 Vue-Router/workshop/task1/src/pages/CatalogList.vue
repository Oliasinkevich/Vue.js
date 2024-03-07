<template>
  <div>
    <ul>
      <li v-for="item in currentPageList" :key="item.id">
        <p>{{ item.id }}</p>
        <p>{{ item.name }}</p>
        <p>{{ item.price }}</p>
      </li>
    </ul>
    <div v-if="totalPages">
      <router-link
        v-for="page in totalPages"
        :key="page"
        :to="`/catalog/${page}`"
      >
        {{ page }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogList",

  data() {
    return {
      catalogList: [
        { id: 1, name: "good1", price: 100 },
        { id: 2, name: "good2", price: 100 },
        { id: 3, name: "good3", price: 100 },
        { id: 4, name: "good4", price: 100 },
        { id: 5, name: "good5", price: 100 },
        { id: 6, name: "good6", price: 100 },
        { id: 7, name: "good7", price: 100 },
        { id: 8, name: "good8", price: 100 },
        { id: 9, name: "good9", price: 100 },
        { id: 10, name: "good10", price: 100 },
        { id: 11, name: "good11", price: 100 },
        { id: 12, name: "good12", price: 100 },
        { id: 13, name: "good13", price: 100 },
        { id: 14, name: "good14", price: 100 },
        { id: 15, name: "good15", price: 100 },
      ],
      currentPage: 0,
      totalItemsPerPage: 5,
    };
  },

  mounted() {},

  methods: {},
  computed: {
    totalPages() {
      return Math.ceil(this.catalogList.length / this.totalItemsPerPage);
    },
    currentPageList() {
      const pageNumber = this.currentPage;
      const startIndex = (pageNumber - 1) * this.totalItemsPerPage;
      const endIndex = startIndex + this.totalItemsPerPage;
      return this.catalogList.slice(startIndex, endIndex);
    },
  },
  watch: {
    $route(to) {
      this.currentPage = +to.params.page;
    },
  },
};
</script>
