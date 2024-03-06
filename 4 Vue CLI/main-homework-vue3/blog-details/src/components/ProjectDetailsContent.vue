<template>
    <div class="project-details-content center">
        <ProjectDetailsDescription />
        <ProjectDetailsSlider />
    </div>
</template>

<script>
import ProjectDetailsDescription from "../components/ProjectDetailsDescription.vue";
import ProjectDetailsSlider from "../components/ProjectDetailsSlider.vue";

export default {
  name: "ProjectDetailsContent",
  components: {
    ProjectDetailsDescription,
    ProjectDetailsSlider
  },

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

    .center {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }
    .project-details-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
