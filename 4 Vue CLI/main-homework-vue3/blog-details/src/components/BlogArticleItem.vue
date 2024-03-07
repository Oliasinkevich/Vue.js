<template>
  <div>
    <div class="blog__wrp">
      <article
        class="blog__card"
        v-for="article in paginatedArticles"
        :key="article.id"
      >
        <div class="blog__tag">
          <p class="blog__tag_txt">{{ article.name }}</p>
        </div>
        <div class="blog__card-content">
          <img
            class="blog__card-content_img"
            :src="require(`@/assets/img/${article.img}`)"
            alt="article"
          />
          <h3 class="blog__card-content_title">{{ article.title }}</h3>
        </div>
        <div class="blog__date">
          <p class="blog__date_txt">{{ article.date }}</p>
          <svg
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle class="blog__card_circle" cx="26" cy="26.267" r="26" />
            <path
              d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </article>
    </div>
    <PaginationComponent
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page-changed="setCurrentPage"
    />
  </div>
</template>

<script>
import PaginationComponent from "./PaginationComponent.vue";
export default {
  name: "BlogArticleItem",
  components: {
    PaginationComponent,
  },

  data() {
    return {};
  },

  mounted() {},
  computed: {
    articles() {
      return this.$store.getters.getArticles;
    },
    paginatedArticles() {
      const articlesPerPage = 6; // количество статей на странице
      const startIndex = (this.currentPage - 1) * articlesPerPage;
      const endIndex = startIndex + articlesPerPage;
      return this.articles.slice(startIndex, endIndex);
    },
    totalPages() {
      const articlesPerPage = 6; // количество статей на странице
      const totalArticles = this.articles.length; // общее количество статей
      return Math.ceil(totalArticles / articlesPerPage); // округление вверх до целого числа
    },
    currentPage() {
      return Number(this.$route.params.page) || 1;
    },
  },

  methods: {
    setCurrentPage(page) {
      this.currentPage = page;
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.center {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
h2,
h3 {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  color: #292f36;
}
.blog {
  &__wrp {
    margin-bottom: 96px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 30px;
  }
  &__card {
    position: relative;
    z-index: 0;
    padding: 21px;
    width: 382px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-sizing: border-box;
    &:hover {
      transition: 0.3s;
      background: #f4f0ec;
    }
    &_circle {
      fill: #f4f0ec;
      cursor: pointer;
    }
    &:hover &_circle {
      transition: 0.3s;
      fill: #fff;
    }
  }
  &__tag {
    position: absolute;
    top: 249px;
    left: 41px;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 124px;
    min-height: 41px;
    background: #fff;
    border-radius: 8px 8px 8px 0;
    &_txt {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
  }
  &__card-content {
    &_img {
      margin-bottom: 21px;
      width: 100%;
      border-radius: 45px 45px 0px 0px;
    }
    &_title {
      margin-bottom: 30px;
      width: 305px;
      height: 70px;
      font-size: 25px;
      line-height: 31.25px;
      letter-spacing: 0.5px;
    }
  }
  &__date {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_txt {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
  }
}
</style>
