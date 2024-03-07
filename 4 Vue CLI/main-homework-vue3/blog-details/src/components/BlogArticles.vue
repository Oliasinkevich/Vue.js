<template>
  <section class="blog center">
    <BlogLatestPost />
    <section class="blog__news">
      <div class="blog__news-title">
        <h2 class="blog__heading_title">Articles &amp;&nbsp;News</h2>
      </div>
      <BlogArticleItem />
      <!-- <PaginationComponent /> -->
    </section>
  </section>
</template>

<script>
import BlogLatestPost from "./BlogLatestPost.vue";
import BlogArticleItem from "./BlogArticleItem.vue";
// import PaginationComponent from "./PaginationComponent.vue";

export default {
  name: "BlogArticles",
  components: {
    BlogLatestPost,
    BlogArticleItem,
    // PaginationComponent,
  },

  data() {
    return {
    };
  },

  mounted() {},

  methods: {},
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
  &__heading {
    &_title {
      margin: 0;
      font-size: 50px;
      line-height: 62.5px;
      letter-spacing: 1px;
    }
  }
  &__card {
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
  &blog__card-content {
    &_img {
      border-radius: 50px;
    }
  }
  &__latest-post {
    margin-bottom: 150px;
    &_title {
      margin-bottom: 27px;
      font-size: 50px;
      line-height: 62.5px;
      letter-spacing: 1px;
    }
  }
  &__latest-post-wrp {
    display: flex;
    gap: 65px;
    padding: 22px;
    border: 1px solid #e7e7e7;
    border-radius: 62px;
  }
  &__latest-post-img {
    border-radius: 50px;
  }
  &__latest-post-content {
    margin: 51px 34px 52px 0;
    &_title {
      margin-bottom: 22px;
      font-size: 25px;
      line-height: 31.25px;
      letter-spacing: 0.5px;
    }
    &_txt {
      font-size: 22px;
      line-height: 33px;
      letter-spacing: 0.22px;
    }
    &_description {
      margin-bottom: 41px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 469px;
      min-height: 198px;
    }
    &_date {
      display: flex;
      justify-content: space-between;
    }
    &_date-txt {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.16px;
      text-transform: capitalize;
    }
  }
  &__news {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__news-wrp {
    display: flex;
    justify-content: space-between;
  }
}
</style>
