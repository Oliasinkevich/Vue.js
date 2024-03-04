<template>
  <div class="projects center">
    <div class="categories-project">
      <div class="categories-project-wrp">
        <button
          class="categories-project-wrp__btn"
          v-for="project in projects"
          :key="project.id"
          @click="switchProjectCategories(project.comp)"
        >
          {{ project.name }}
        </button>
      </div>
      <div class="project-wrp">
        <component :is="activeComponent" />
      </div>
      <PaginationComp />
    </div>
  </div>
</template>

<script>
import BathroomCategory from "./BathroomCategory.vue";
import BedroomCategory from "./BedroomCategory.vue";
import KitchenCategory from "./KitchenCategory.vue";
import LivingRoomCategory from "./LivingRoomCategory.vue";
import PaginationComp from "./PaginationComp.vue";

export default {
  name: "ProjectCategories",
  components: {
    BathroomCategory,
    BedroomCategory,
    KitchenCategory,
    LivingRoomCategory,
    PaginationComp,
  },

  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Bathroom",
          comp: "BathroomCategory",
        },
        {
          id: 2,
          name: "Bedroom",
          comp: "BedroomCategory",
        },
        {
          id: 3,
          name: "Kitchen",
          comp: "KitchenCategory",
        },
        {
          id: 4,
          name: "Living Room",
          comp: "LivingRoomCategory",
        },
      ],
      activeComponent: "BathroomCategory",
    };
  },

  mounted() {},

  methods: {
    switchProjectCategories(componentName) {
      this.activeComponent = componentName;
    },
  },
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
  font-weight: 600;
  color: $colorTitle;
}

.center {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
.projects {
  // margin-bottom: 200px;
  display: flex;
  justify-content: center;
}
.categories-project {
  display: flex;
  flex-direction: column;
  gap: 61px;
}
.categories-project-wrp {
  min-width: 880px;
  display: flex;
  justify-content: center;
  gap: 30px;
  border: 1px solid #cda274;
  border-radius: 18px;
  &__btn {
    padding: 26px 66px;
    border: none;
    border-radius: 18px;
    background: none;
    font-family: $fontText;
    font-size: 18px;
    line-height: 22.5px;
    letter-spacing: 0.36px;
    transition: 0.3s;
    &:hover {
      background: #cda274;
      color: #fff;
    }
    &:active {
      background: #fff;
      color: #cda274;
    }
  }
}
.project-wrp {
  display: flex;
  justify-content: center;
}
</style>
