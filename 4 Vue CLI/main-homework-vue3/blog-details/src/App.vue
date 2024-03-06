<template>
  <!-- <HeaderComponent />
  <ProjectComponent />
  <FooterComponent /> -->
  <ProjectDetails />
</template>

<script>
// import HeaderComponent from "./components/HeaderComponent.vue";
// import FooterComponent from "./components/FooterComponent.vue";
// import ProjectComponent from "./components/ProjectComponent.vue";
import ProjectDetails from "./pages/ProjectDetails.vue";

export default {
  name: "App",
  components: {
    // HeaderComponent,
    // FooterComponent,
    // ProjectComponent,
    ProjectDetails
  },
};
</script>

<style>
body {
  margin: 0;
  bottom: 0;
  font-family: "Jost";
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}
</style>
