<template>
    <section class="blog center">
        <div class="blog__heading">
            <h2 class="blog__heading_title">Articles &amp;&nbsp;News</h2>
            <p class="blog__heading_txt">It&nbsp;is&nbsp;a&nbsp;long established fact that a&nbsp;reader will be&nbsp;distracted by&nbsp;the of&nbsp;readable content of&nbsp;a&nbsp;page when lookings at&nbsp;its layouts the points of&nbsp;using.</p>
        </div>
        <HomeBlogArticle/>
    </section>
</template>

<script>
import HomeBlogArticle from './HomeBlogArticle.vue'
export default {
  name: "HomeBlog",
  components: {
    HomeBlogArticle
  },

  data() {
    return {};
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
    h2, h3 {
        font-family: 'DM Serif Display', serif;
        font-weight: 400;
        color: #292F36;
    }
    .blog {
        &__heading {
            width: 811px;
            margin: 0 auto 52px auto;
            text-align: center;
            &_title {
                margin: 0 0 12px 0;
                font-size: 50px;
                line-height: 62.5px;
                letter-spacing: 1px;
            }
            &_txt {
                font-size: 22px;
                line-height: 33px;
                letter-spacing: 0.22px;
            }
        }
    }
</style>
