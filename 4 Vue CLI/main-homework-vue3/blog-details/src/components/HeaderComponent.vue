<template>
  <header class="header center">
    <a class="header__logo" href="#">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
          fill="#CDA274"
        />
      </svg>
      <p class="header__logo_txt">Interno</p>
    </a>
    <nav class="header__nav">
      <ul class="header__menu">
        <li>
          <a href="#" class="header__menu_link">Home</a>
        </li>
        <li>
          <a href="#" class="header__menu_link">Project</a>
        </li>
        <li>
          <a href="#" class="header__menu_link">Blog</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
$colorTitle: #292f36;

* {
  margin: 0;
  padding: 0;
}
.header {
  display: flex;
  justify-content: space-between;
  padding-top: 53px;
  padding-bottom: 57px;
  align-items: center;

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    &_txt {
      font-family: "DM Serif Display";
      font-size: 40px;
      line-height: 50px;
      color: $colorTitle;
    }
  }

  &__menu {
    display: flex;
    gap: 45px;

    &_link {
      color: #292f36;
      text-align: center;
      font-family: Jost;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
    }
  }
}
</style>
