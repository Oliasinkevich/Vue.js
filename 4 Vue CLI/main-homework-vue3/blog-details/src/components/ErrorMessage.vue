<template>
  <div class="error center">
    <div class="error-content">
      <h2 class="error-content__title">404</h2>
      <h3 class="error-content__desc">
        We&nbsp;are sorry, but the page you requested was not found
      </h3>
      <router-link class="error-content__btn" to="/"
        ><span>Back To Home</span>
        <svg
          width="17.151611"
          height="16.005859"
          viewBox="0 0 17.1516 16.0059"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            id="Vector"
            d="M1.01001 7.93823L14.7332 7.80151M9.62817 1.41431L16.1511 7.93726L9.49683 14.5918"
            stroke="#CDA274"
            stroke-opacity="1.000000"
            stroke-width="2.000000"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
    <div class="error-img">
      <img src="../assets/img/ErrorMessage.jpg" alt="error" />
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "ErrorMessage",

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
h2,
h3 {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  color: #292f36;
}
.error {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 81px;
}
.error-content {
  min-width: 569px;
  &__title {
    margin: 0 0 15px 0;
    font-family: DM Serif Display;
    font-size: 250px;
    line-height: 125%;
    color: #cda274;
  }
  &__desc {
    margin: 0 0 23px 0;
    font-size: 35px;
    line-height: 150%;
    letter-spacing: 1px;
  }
  &__btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 26px 54px;
    border-radius: 18px;
    background: #292f36;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    line-height: 22.5px;
    letter-spacing: 0.36px;
  }
  &__btn:hover {
    cursor: pointer;
    box-shadow: inset 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  }
  &__btn:active {
    transition: 0.3s;
    opacity: 0.8;
  }
}
</style>
