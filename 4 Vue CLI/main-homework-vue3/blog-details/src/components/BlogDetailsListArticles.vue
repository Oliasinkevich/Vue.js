<template>
  <div>
    <li class="article-list__num">
      {{ blog.id }} <span class="article-list__item">{{ blog.article }}</span>
    </li>
  </div>
</template>

<script>
export default {
  name: "BlogDetailsListArticles",
  props: ["blog"],

  data() {
    return {};
  },

  mounted() {},
  computed: {
    getBlogList() {
      return this.$store.getters.getBlogList;
    },
  },

  methods: {},
};
</script>
<style lang="scss" scoped>
    .article-list {
        &__num {
            display: flex;
            gap: 14px;
            color: #CDA274;
            font-size: 20px;
            line-height: 25px;
            letter-spacing: 0.4px;
        }
        &__item {
            color: #4D5053;
            font-size: 22px;
            line-height: 33px;
            letter-spacing: 0.22px;
        }
    }
</style>
