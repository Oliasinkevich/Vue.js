<template>
  <div>
    <CatalogItemComp v-for="item in catalogItems" :key="item.id" :item="item" />
  </div>
</template>

<script>
import CatalogItemComp from "./CatalogItemComp.vue";
export default {
  name: "CatalogComp",
  components: {
    CatalogItemComp,
  },
  data() {
    return {};
  },
  computed: {
    catalogItems() {
      return this.$store.getters.catalogItems;
    },
  },
  created() {
    this.$store.dispatch('getCatalogData');
  },

  mounted() {},

  methods: {},
};
</script>
