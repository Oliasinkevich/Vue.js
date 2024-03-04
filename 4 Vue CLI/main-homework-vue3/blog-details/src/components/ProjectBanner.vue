<template>
  <section class="project-bunner">
    <img
      class="project-bunner__img"
      src="../assets/img/ProjectBanner.jpg"
      alt="Banner"
      width="1950"
      height="356"
    />
    <div class="project-bunner__content">
      <h2 class="project-bunner__content_title">Our Project</h2>
      <p>
        <a class="project-bunner__content_txt" href="#">Home&nbsp;</a>/
        <a class="project-bunner__content_txt" href="#">Project</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectBanner",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
$widthCenter: 1200px;
$fontText: "Jost", sans-serif;
$colorTitle: #292f36;
$colorTxt: #4d5053;

.project-bunner {
  margin-bottom: 200px;
  &__img {
    position: relative;
    width: 100%;
    background-size: cover;
  }
  &__content {
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 0px 100px;
    text-align: center;
    background: #fff;
    border-radius: 37px 37px 0 0;
    &_title {
      font-family: DM Serif Display;
      font-size: 50px;
      //   line-height: 63px;
      line-height: 34px;
    }
    &_txt {
      color: $colorTxt;
      font-family: $fontText;
      font-size: 22px;
      line-height: 33px;
      letter-spacing: 0.22px;
    }
  }
}
</style>
