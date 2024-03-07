<template>
  <div>
    <HomeBunner />
    <HomeFollowOurProjects />
    <HomeCounter />
    <HomeBlog />
    <FooterComponent />
  </div>
</template>

<script>
import HomeBunner from "@/components/HomeBunner.vue";
import HomeFollowOurProjects from "@/components/HomeFollowOurProjects.vue";
import HomeCounter from "@/components/HomeCounter.vue";
import HomeBlog from "@/components/HomeBlog.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomePage",
  components: {
    HomeBunner,
    HomeFollowOurProjects,
    HomeCounter,
    HomeBlog,
    FooterComponent,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
