<template>
    <section class="bunner">
        <img class="bunner__img" src="../assets/img/BlogBunner.png" alt="Banner" width="1920" height="356">
        <div class="bunner__content">
            <h2 class="bunner__content_title">Articles &amp;&nbsp;News</h2>
            <p>
                <router-link class="bunner__content_link" to="/">Home</router-link> /
                <router-link class="bunner__content_link" to="/blog">Blog</router-link>
            </p>
        </div>
    </section>
</template>

<script>
export default {
  name: 'BlogBunner',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
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
    h2 {
        font-family: 'DM Serif Display', serif;
        font-weight: 400;
        color: #292F36;
    }
    .bunner {
        margin-bottom: 200px;
        &__img {
            position: relative;
            width: 100%;
            background-size: cover;
        }
        &__content {
            position: absolute;
            top: 372px;
            left: 50%;
            transform: translate(-50%, 0);
            padding: 41px 78px;
            text-align: center;
            background: #fff;
            border-radius: 37px 37px 0 0;
            &_title {
                font-size: 50px;
                line-height: 62.5px;
            }
            &_link {
                font-size: 22px;
                line-height: 33px;
                letter-spacing: 0.22px;
            }
            &_link:hover {
                opacity: .7;
                transition: .3s;
            }
        }
    }
</style>