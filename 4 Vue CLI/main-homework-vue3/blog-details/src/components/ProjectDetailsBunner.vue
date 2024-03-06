<template>
  <div>
    <section class="blog-details-bunner">
      <img
        class="blog-details-bunner__img"
        src="../assets/img/ProjectDetailsBunner.png"
        alt="Bunner"
        width="1920"
        height="356"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "ProjectDetailsBunner",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
    $widthCenter: 1200px;
    $fontText: 'Jost', sans-serif;
    $colorTitle: #292F36;
    $colorTxt: #4D5053;
    .blog-details-bunner {
        margin-bottom: 200px;
        &__img {
            position: relative;
            width: 100%;
            background-size: cover;
        }
    }
</style>