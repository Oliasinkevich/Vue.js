<template>
  <HeaderComponent />
  <BlogDetails />
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import BlogDetails from "./components/BlogDetails.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    BlogDetails,
    FooterComponent,
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
