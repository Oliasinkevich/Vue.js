<template>
  <header class="header center">
    <router-link class="header__logo" to="/">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
      </svg>                
      <h1 class="header__logo_title">Interno</h1>
    </router-link>
    <nav class="header__nav">
      <router-link class="header__menu-link" to="/">Home</router-link>
      <router-link class="header__menu-link" to="/blog">Blog</router-link>
      <router-link class="header__menu-link" to="/blogdetails">Blog Details</router-link>
    </nav>
  </header>
  <router-view/>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "App",
  components: {
  },
  computed: {
    ...mapGetters(['getTitle','getDescription','getArticle', 'getBlogList', 'getTags'])
  }
};
</script>

<style lang="scss">
  #app {
    margin: 0;
    padding: 0;
    font-family: 'Jost', sans-serif;
    font-weight: 400;
    color: #4D5053;
  }
  h1 {
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #4D5053;
  }
  ul {
    list-style: none;
  }
  .center {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  .header {
    margin: 44px auto 45px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__logo {
      display: flex;
      align-items: center;
      gap: 10px;
      &_title {
          font-size: 40px;
          line-height: 50px;
      }
    }
    &__nav {
      width: 300px;
      display: flex;
      justify-content: space-between;
    }
    &__menu-link {
      font-size: 20px;
      line-height: 25px;
    }
    &__menu-link:hover {
      opacity: 0.7;
      transition: .3s;
    }
  }
</style>
