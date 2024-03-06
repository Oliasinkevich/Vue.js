<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="decrease">-</button>
    <button @click="increase">+</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CountComp",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    increase() {
      this.$store.commit("INCREMENT");
    },
    ...mapMutations(["DECREMENT"]),
    decrease() {
      //   this.$store.commit("DECREMENT");
      this.DECREMENT();
    }
  },
  computed: {
    counter() {
      return this.$store.state.count;
    },
  },
};
</script>
