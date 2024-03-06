<template>
  <div class="project-details-description">
    <h2 class="project-details-description__heading">{{ getTitle }}</h2>
    <p class="project-details-description__txt">
      <span class="project-details-description__txt_span">{{
        getDescription
      }}</span>
      <span class="project-details-description__txt_span">{{
        getDescription
      }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "ProjectDetailsDescription",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  computed: {
        getTitle() {
            return this.$store.getters.getTitle
        },
        getDescription() {
            return this.$store.getters.getDescription
        }
    },
};
</script>
<style lang="scss" scoped>
    $widthCenter: 1200px;
    $fontText: 'Jost', sans-serif;
    $colorTitle: #292F36;
    $colorTxt: #4D5053;

    * {
        margin: 0;
        padding: 0;
        position: relative;
        z-index: 5;

        font-family: 'DM Serif Display', serif;
        font-style: normal;
        font-weight: 400;
        color: $colorTitle;
    }
    .project-details-description {
        width: 658px;
        &__heading {
            margin-bottom: 11px;
            font-size: 50px;
            line-height: 62.5px;
            letter-spacing: 1px;
        }
        &__txt {
            margin-bottom: 100px;
            display: flex;
            flex-direction: column;
            gap: 30px;
            &_span {
                color: $colorTxt;
                font-family: $fontText;
                font-size: 22px;
                line-height: 33px;
                letter-spacing: 0.22px;
            }
        }
    }
</style>
