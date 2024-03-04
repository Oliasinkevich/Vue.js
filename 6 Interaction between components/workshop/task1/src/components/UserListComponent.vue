<template>
  <div>
    <h1>List Users</h1>
    <div v-if="ShowInfo">
      <p>Surname: {{ ShowInfo.surname }}</p>
      <p>Email: {{ ShowInfo.email }}</p>
    </div>
    <UserComponent
      v-for="user in userList"
      :key="user.id"
      :user="user"
      @ChangeShowInfo="ChangeShowInfo"
    />
  </div>
</template>

<script>
import UserComponent from "./UserComponent.vue";

export default {
  name: "UserListComponent",
  data() {
    return {
      userList: [
        {
          id: 1,
          name: "Olia",
          surname: "Sinkevich",
          email: "olga.sinkevich@tut.by",
          showInfo: false,
        },
        {
          id: 2,
          name: "Inga",
          surname: "Mendeleva",
          email: "inga.mendeleva@yahoo.com",
          showInfo: false,
        },
        {
          id: 3,
          name: "Maria",
          surname: "Popova",
          email: "maria.popova85@gmail.com",
          showInfo: false,
        },
        {
          id: 4,
          name: "Igor",
          surname: "Vasechkin",
          email: "igor.vasechkin88@mail.ru",
          showInfo: false,
        },
      ],
      currentUserId: null,
      //   showDescription: false,
    };
  },
  mounted() {},
  methods: {
    ChangeShowInfo(id) {
      this.currentUserId = id;
      //   this.showDescription = true;
      //   const user = this.userList.find((item) => item.id === id);
      // if (user) {
      //   user.showInfo = !user.showInfo;
      // }
    },
  },
  computed: {
    ShowInfo() {
      if (this.currentUserId) {
        return this.userList.find((item) => item.id === this.currentUserId);
      }
      return null;
    },
  },
  components: { UserComponent },
};
</script>

<style lang="scss" scoped></style>
