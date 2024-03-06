<template>
  <div>
    <HeaderComponent />
    <ProjectDetailsBunner />
    <ProjectDetailsContent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import ProjectDetailsBunner from "../components/ProjectDetailsBunner.vue";
import ProjectDetailsContent from "../components/ProjectDetailsContent.vue";
import FooterComponent from "../components/FooterComponent.vue";



export default {
  name: "ProjectDetails",
  components: {
    HeaderComponent,
    ProjectDetailsBunner,
    ProjectDetailsContent,
    FooterComponent
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
$fontText: "Jost", sans-serif;
$colorTitle: #292f36;
$colorTxt: #4d5053;
* {
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 5;

  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-weight: 400;
  color: $colorTitle;
}
a {
  color: $colorTitle;
  text-decoration: none;
}
ul {
  list-style: none;
}
.center {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
