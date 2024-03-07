<template>
  <nav class="pagination">
    <router-link
      v-if="currentPage > 1"
      class="btn"
      :to="getPageUrl(currentPage - 1)"
      @click="emitPageChanged(currentPage - 1)"
    >
      &#10094;
    </router-link>
    <router-link
      class="btn"
      v-for="page in printPages"
      :key="page"
      :to="getPageUrl(page)"
      :class="{ btn__active: currentPage === page }"
      @click="emitPageChanged(page)"
    >
      {{ page }}
    </router-link>
    <router-link
      v-if="currentPage < totalPages"
      class="btn"
      :to="getPageUrl(currentPage + 1)"
      @click="emitPageChanged(currentPage + 1)"
    >
      &#10095;
    </router-link>
  </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "PaginationComponent",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {};
  },
  computed: {
    printPages() {
      const start = Math.max(this.currentPage - 2, 1);
      const end = Math.min(start + 4, this.totalPages);
      return Array.from({ length: end - start + 1 }, (_, i) => i + start);
    },
    ...mapState(["currentPage"]),
  },
  methods: {
    getPageUrl(page) {
      return `/blog/${page}`;
    },
    emitPageChanged(page) {
     this.setCurrentPage(page);
     this.$emit("page-changed", page);
   },
    ...mapMutations(["setCurrentPage"]),
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 51px 0 104px;
  text-align: center;
}
.btn {
  color: #292f36;
  width: 52px;
  height: 52px;
  border: 1px solid #cda274;
  border-radius: 50%;
  font-size: 16px;
  line-height: 52px;
  font-weight: 600;
  &:hover,
  &__active {
    background-color: #f4f0ec;
    border-color: #f4f0ec;
  }
}
</style>
