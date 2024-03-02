<template>
  <div>
    <div v-if="!isAuthenticated">
      <input type="text" placeholder="name" v-model="username" />
      <input type="text" placeholder="password" v-model="password" />
      <button @click="loginUser">Login</button>
    </div>
    <p v-else>Пользователь залогинен</p>
  </div>
</template>

<script>
export default {
  name: "AuthComponent",

  data() {
    return {
      username: "",
      password: "",
      trueUser: { username: "Petya", password: "Vasya" },
      isAuthenticated: false,
    };
  },

  methods: {
    loginUser() {
      if (this.username === this.trueUser.username && this.password === this.trueUser.password) {
        this.isAuthenticated = true;
      }
      this.password = '';
      this.username = '';
    },
  },
};
</script>

<style lang="scss" scoped></style>

<!-- Создайте компонент "Аутентификация" (Authentication), который будет отображать форму входа или сообщение об успешной аутентификации в зависимости от переданного пропса isAuthenticated. Используйте директиву v-if для условного отображения разных элементов в шаблоне компонента. -->
