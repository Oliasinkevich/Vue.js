<template>
  <section class="article center">
    <section class="article-wrp">
      <div class="full-article">
        <h2 class="full-article__title">
          Let&rsquo;s Get Solution for Building Construction Work
        </h2>
        <img
          class="full-article__img"
          src="../assets/img/BlogDetailsContent1.png"
          alt="BlogDetailsContent1"
          width="803"
          height="539"
        />
        <div class="full-article__date-wrp">
          <p class="full-article__date">26 December,2022</p>
          <p class="full-article__link-wrp">
            <a class="full-article__link" href="#">Interior / </a>
            <a class="full-article__link" href="">Home / </a>
            <a class="full-article__link" href="">Decore</a>
          </p>
        </div>
        <div class="full-article__txt-wrp">
          <p class="full-article__txt">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu&nbsp;sem vitae
            turpmaximus.posuere in.Contrary to&nbsp;popular belief.There are
            many variations of&nbsp;passages of&nbsp;Lorem Ipsum available, but
            the majority have suffered alteration in&nbsp;some form,
            by&nbsp;injecthumour, or&nbsp;randomised words which don&rsquo;t
            look even slightly believable.
          </p>
          <p class="full-article__txt">
            Embarrassing hidden in&nbsp;the middle of&nbsp;text. All the Lorem
            Ipsum generators on&nbsp;the Internet tend to&nbsp;repeat predefined
            chunks as&nbsp;necessary.
          </p>
        </div>
      </div>
      <div class="quote-wrp">
        <div class="quote">
          <svg
            width="74"
            height="56"
            viewBox="0 0 74 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
              fill="#CDA274"
            />
          </svg>
          <p class="quote__txt">
            The details are not the details. They make the design.
          </p>
        </div>
      </div>
      <article class="article-list">
        <h2 class="article-list__title">Design sprints are great</h2>
        <p class="article-list__txt">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu&nbsp;sem vitae
          turpmaximus.posuere in.Contrary to&nbsp;popular belief.There are many
          variations of&nbsp;passages of&nbsp;Lorem Ipsum available, but the
          majority have suffered.
        </p>
        <ul class="article-list__item-wrp">
          <BlogDetailsListArticles
            v-for="blog in filterArticle"
            :key="blog.id"
            v-bind:blog="blog"
          />
        </ul>
      </article>
      <div class="article-content">
        <img
          class="article-content__img"
          src="../assets/img/BlogDetailsContent2.png"
          alt="BlogDetailsContent2"
          width="803"
          height="365"
        />
        <p class="article-content__txt">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu&nbsp;sem vitae
          turpmaximus.posuere in.Contrary to&nbsp;popular belief.There are many
          variations of&nbsp;passages of&nbsp;Lorem Ipsum available, but the
          majority have suffered.
        </p>
      </div>
    </section>
    <div class="tags">
      <h2 class="tags__txt">Tags</h2>
      <div class="tags-wrp">
        <button
          href="#"
          @click="selectedTag(tag)"
          v-for="tag in getTags"
          :key="tag.id"
          class="tags-wrp__btn"
        >
          {{ tag.tag }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import BlogDetailsListArticles from "@/components/BlogDetailsListArticles.vue";
export default {
  name: "BlogDetailsContent",
  components: {
    BlogDetailsListArticles,
  },

  data() {
    return {
      currentTag: "",
    };
  },

  mounted() {},

  methods: {
    selectedTag(tag) {
      this.currentTag = tag;
    },
  },
  computed: {
    getTags() {
      return this.$store.getters.getTags;
    },
    getBlogList() {
      return this.$store.getters.getBlogList;
    },
    filterArticle() {
      if (this.currentTag === "") {
        return this.getBlogList;
      }
      return this.getBlogList.filter((el) =>
        el.tag.includes(this.currentTag.tag)
      );
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
    h2, h3 {
        font-family: 'DM Serif Display', serif;
        font-weight: 400;
        color: #292F36;
    }
    ol {
        list-style: none;
    }
    .article {
        display: flex;
        gap: 52px;
    }
    .article-wrp {
        margin-bottom: 96px;
        width: 803px;
    }
    .full-article {
        &__title {
            margin-bottom: 21px;
            width: 684px;
            font-size: 50px;
            line-height: 62.5px;
        }
        &__img {
            margin-bottom: 46px;
            border-radius: 50px;
        }
        &__date-wrp {
            margin-bottom: 48px;
            display: flex;
            justify-content: space-between;
        }
        &__date {
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.16px;
            text-transform: capitalize;
        }
        &__link-wrp {
            width: 249px;
        }
        &__link {
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.16px;
            text-transform: capitalize;
        }
        &__txt-wrp {
            margin-bottom: 35px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 236px;
        }
        &__txt {
            font-size: 22px;
            line-height: 33px;
            letter-spacing: 0.22px;
        }
    }
    .article-list {
        &__title {
            margin-bottom: 20px;
            font-size: 50px;
            line-height: 62.5px;
            letter-spacing: 1px;
        }
        &__txt {
            margin-bottom: 24px;
            font-size: 22px;
            line-height: 33px;
            letter-spacing: 0.22px;
        }
        &__item-wrp {
            margin-bottom: 44px;
            width: 732px;
            display: flex;
            flex-direction: column;
            gap: 32px;
        }
    }
    .quote-wrp {
        margin-bottom: 27px;
        background: #F4F0EC;
    }
    .quote {
        padding: 53px 227px;
        text-align: center;
        &__txt {
            color: #CDA274;
            font-size: 25px;
            font-style: italic;
            line-height: 31.25px;
            letter-spacing: 0.5px;
        }
    }
    
    .article-content {
        &__img {
            margin-bottom: 35px;
            border-radius: 50px;
        }
        &__txt {
            font-size: 22px;
            line-height: 33px;
            letter-spacing: 0.22px;
        }
    }
    .tags {
        width: 345px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        &__txt {
            font-size: 25px;
            line-height: 31.25px;
            letter-spacing: 0.5px;
        }
    }
    .tags-wrp {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        &__btn {
            box-sizing: border-box;
            border: none;
            border-radius: 10px;
            padding: 9px 30px;
            background: #F4F0EC;
            color: #292F36;
            text-align: center;
            font-size: 17px;
            line-height: 22.5px;
            letter-spacing: 0.36px;
        }
        &__btn:hover {
            background: #000;
            color: #fff;
            transition: 0.3s;
            cursor: pointer;
        }
        &__btn:active {
            opacity: 0.7;
            transition: 0.3s;
        }
    }
</style>
