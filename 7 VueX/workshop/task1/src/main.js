import { createApp } from "vue";
import App from "./App.vue";
import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    count: 0,
    cartItems: [],
    catalogItems: [
      // {
      //   id: 273525,
      //   name: "good1",
      //   price: 150,
      // },
      // {
      //   id: 273529,
      //   name: "good2",
      //   price: 250,
      // },
      // {
      //   id: 273530,
      //   name: "good3",
      //   price: 330,
      // },
    ],
  },
  getters: {
    cartItems(state) {
      return state.cartItems;
    },
    catalogItems(state) {
      return state.catalogItems;
    },
    totalItems(state) {
      return state.cartItems.length;
    },
    totalPrice(state) {
      return state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  mutations: {
    INCREMENT(state) {
      state.count++;
    },
    DECREMENT(state) {
      state.count--;
    },
    ADD_ITEM_TO_CART(state, cartItem) {
      state.cartItems.push(cartItem);
    },
    SET_CATALOG_DATA(state, catalogData) {
      state.catalogItems = catalogData;
    },
    SET_CART_DATA(state, cartgData) {
      state.cartItems = cartgData;
    },
  },
  actions: {
    addToCart({ commit, state }, item) {
      const find = state.cartItems.find(({ id }) => id === item.id);
      if (find) {
        find.quantity++;
      } else {
        const newItem = {
          ...item,
          quantity: 1,
        };
        commit("ADD_ITEM_TO_CART", newItem);
      }
    },
    getCatalogData({ commit }) {
      setTimeout(() => {
        const catalogData = [
          {
            id: 273525,
            name: "good1",
            price: 150,
          },
          {
            id: 273529,
            name: "good2",
            price: 250,
          },
          {
            id: 273530,
            name: "good3",
            price: 330,
          },
        ];
        commit("SET_CATALOG_DATA", catalogData);
      }, 2000);
    },
    getCartData({ commit }) {
      setTimeout(() => {
        const cartData = [];
        commit("SET_CART_DATA", cartData);
      }, 2000);
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
