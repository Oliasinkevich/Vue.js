import { createStore } from "vuex";

export default createStore({
  state: {
    title: "Minimal Look Bedrooms",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
    articles: [
      {
        id:1,
        name: "Kitchan Design",
        img: "BlogArticle1.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:2,
        name: "Living Design",
        img: "BlogArticle2.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:3,
        name: "Interior Design",
        img: "BlogArticle3.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:4,
        name: "Kitchan Design",
        img: "BlogArticle4.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:5,
        name: "Living Design",
        img: "BlogArticle5.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:6,
        name: "Interior Design",
        img: "BlogArticle6.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:7,
        name: "Interior Design",
        img: "BlogArticle6.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:8,
        name: "Living Design",
        img: "BlogArticle5.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:9,
        name: "Kitchan Design",
        img: "BlogArticle4.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:10,
        name: "Interior Design",
        img: "BlogArticle3.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:11,
        name: "Living Design",
        img: "BlogArticle2.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:12,
        name: "Kitchan Design",
        img: "BlogArticle1.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:13,
        name: "Kitchan Design",
        img: "BlogArticle1.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:14,
        name: "Living Design",
        img: "BlogArticle2.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:15,
        name: "Interior Design",
        img: "BlogArticle3.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:16,
        name: "Kitchan Design",
        img: "BlogArticle4.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:17,
        name: "Living Design",
        img: "BlogArticle5.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
      {
        id:18,
        name: "Interior Design",
        img: "BlogArticle6.png",
        title: "Let&rsquo;s Get Solution For Building Construction Work",
        date: "26 December, 2022",
      },
    ],
    tags: [
      {
        id: 1,
        tag: "Kitchen",
        select: false,
      },
      {
        id: 2,
        tag: "Bedroom",
        select: false,
      },
      {
        id: 3,
        tag: "Building",
        select: false,
      },
      {
        id: 4,
        tag: "Architecture",
        select: false,
      },
      {
        id: 5,
        tag: "Kitchen Planning",
        select: false,
      },
    ],
    blogList: [
      {
        id: 1,
        tag: ["Kitchen", "Bedroom"],
        article:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 2,
        tag: ["Building", "Kitchen", "Bedroom"],
        article:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 3,
        tag: ["Kitchen Planning", "Kitchen", "Architecture"],
        article:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 4,
        tag: ["Building", "Bedroom"],
        article:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 5,
        tag: ["Building", "Architecture", "Bedroom"],
        article:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
    currentPage: 1,
    // начальное состояние
  },
  mutations: {
    setCurrentPage(state, page) {
      state.currentPage = page;
    },

    // методы для изменения состояния
  },
  actions: {
    // методы для асинхронных операций
  },
  getters: {
    getTitle: (state) => state.title,
    getDescription: (state) => state.description,
    getArticles: (state) => state.articles,
    getBlogList: (state) => state.blogList,
    getTags: (state) => state.tags,

    // методы для чтения состояния
  },
  modules: {
    // модули Vuex для разделения хранилища на под-хранилища
  },
});
