<template>
  <div>
    <h3 @click="ShowDetails(user)">User {{ user.id }}</h3>
    <p>Name: {{ user.name }}</p>
    <!-- <div v-show="user.showInfo">
      <p>Surname: {{ user.surname }}</p>
      <p>Email: {{ user.email }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "UserComponent",
  props: ["user"],

  data() {
    return {};
  },

  mounted() {},

  methods: {
    ShowDetails(user) {
      this.$emit('ChangeShowInfo', user.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
