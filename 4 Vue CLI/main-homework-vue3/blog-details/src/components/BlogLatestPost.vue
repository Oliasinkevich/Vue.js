<template>
  <article class="blog__latest-post">
    <h2 class="blog__latest-post_title">Latest Post</h2>
    <div class="blog__latest-post-wrp">
      <img
        class="blog__latest-post-img"
        src="../assets/img/BlogLatestPost.png"
        alt="Latest Post"
        width="569"
        height="478"
      />
      <div class="blog__latest-post-content">
        <h3 class="blog__latest-post-content_title">
          Low Cost Latest Invented Interior Designing Ideas
        </h3>
        <div class="blog__latest-post-content_description">
          <p class="blog__latest-post-content_txt">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu&nbsp;sem vitae
            turpis dignissim maximus.posuere in.Contrary to&nbsp;popular belief.
          </p>
          <p class="blog__latest-post-content_txt">
            Lorem Ipsum is&nbsp;not simply random text. It&nbsp;has roots
            in&nbsp;a&nbsp;piece of&nbsp;classica.
          </p>
        </div>
        <div class="blog__latest-post-content_date">
          <p class="blog__latest-post-content_date-txt">
            26&nbsp;December,2022
          </p>
          <a href="#">
            <svg
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="blog__latest-post-wrp_circle"
                cx="26"
                cy="26.5"
                r="26"
                fill="#F4F0EC"
              />
              <path
                d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "BlogLatestPost",

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
            border: 1px solid #E7E7E7;
            border-radius: 62px;
            transition: 3s;
            &:hover {
                background: #F4F0EC;
            }
            &_circle {
                transition: 3s;
                fill: #F4F0EC;
                cursor: pointer;
            }
            &:hover &_circle {
                fill: #fff;
            }
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
    }
</style>
