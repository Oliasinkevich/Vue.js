<template>
  <section class="counter">
    <div class="counter__wrp center">
      <div class="counter__wrp-content">
        <div class="counter__wrp-flex">
          <h2 class="counter__wrp-flex_title">12</h2>
          <p class="counter__wrp-flex_txt">Years Of Experiance</p>
        </div>
        <svg
          width="1"
          height="130"
          viewBox="0 0 1 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="2.18557e-08"
            x2="0.499994"
            y2="130"
            stroke="#CDA274"
          />
        </svg>
      </div>
      <div class="counter__wrp-content">
        <div class="counter__wrp-flex">
          <h2 class="counter__wrp-flex_title">85</h2>
          <p class="counter__wrp-flex_txt">Success Project</p>
        </div>
        <svg
          width="1"
          height="130"
          viewBox="0 0 1 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="2.18557e-08"
            x2="0.499994"
            y2="130"
            stroke="#CDA274"
          />
        </svg>
      </div>
      <div class="counter__wrp-content">
        <div class="counter__wrp-flex">
          <h2 class="counter__wrp-flex_title">15</h2>
          <p class="counter__wrp-flex_txt">Active Project</p>
        </div>
        <svg
          width="1"
          height="130"
          viewBox="0 0 1 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="2.18557e-08"
            x2="0.499994"
            y2="130"
            stroke="#CDA274"
          />
        </svg>
      </div>
      <div class="counter__wrp-content">
        <div class="counter__wrp-flex">
          <h2 class="counter__wrp-flex_title">95</h2>
          <p class="counter__wrp-flex_txt">Happy CUstomers</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeCounter",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
$widthCenter: 1200px;
* {
  margin: 0;
  padding: 0;
}
.center {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
.counter {
  margin: 0 0 96px 0;
  padding: 151px 0;
  background: #f4f0ec;
  &__wrp {
    width: $widthCenter - 118;
    display: flex;
    gap: 76px;
    justify-content: space-between;
  }
  &__wrp-content {
    display: flex;
    gap: 70px;
    align-items: center;
  }
  &__wrp-flex {
    display: flex;
    flex-direction: column;
    // align-items: center;
    &_title {
      margin-bottom: 16px;
      font-family: DM Serif Display;
      color: #cda274;
      font-weight: 400;
      font-size: 85px;
      line-height: 106.25px;
      letter-spacing: 1.7px;
    }
    &_txt {
      font-size: 22px;
      line-height: 33px;
      letter-spacing: 0.22px;
    }
  }
}
</style>
