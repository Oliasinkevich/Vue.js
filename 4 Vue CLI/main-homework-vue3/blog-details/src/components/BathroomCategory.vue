<template>
  <div>
    <div class="project-content">
      <div class="project-article-wrp">
        <article
          class="project-article"
          v-for="article in articles1"
          :key="article.id"
        >
          <img
            :src="require(`../assets/img/${article.img}`)"
            :alt="article.alt"
          />
          <div class="project-article-content">
            <div>
              <h2 class="project-article__heading">Minimal Bedroom</h2>
              <p class="project-article__txt">Decor / Artchitecture</p>
            </div>
            <svg
              class="project-article__svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32 44L40 35L32 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </article>
      </div>
      <div class="project-article-wrp">
        <article class="project-article" v-for="article in articles2" :key="article.id">
          <img :src="require(`../assets/img/${article.img}`)" :alt="article.alt" />
          <div class="project-article-content">
            <div>
              <h2 class="project-article__heading">Minimal Bedroom</h2>
              <p class="project-article__txt">Decor / Artchitecture</p>
            </div>
            <svg
              class="project-article__svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path
                d="M32 44L40 35L32 26"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BathroomCategory",

  data() {
    return {
      articles1: [
        {
          id: 1,
          img: "BathRoomPhoto1.png",
          title: "Minimal Bedroom",
          desc: "Decor / Artchitecture",
          alt: "BathRoomPhoto1",
        },
        {
          id: 2,
          img: "BathRoomPhoto2.png",
          title: "Minimal Bedroom",
          desc: "Decor / Artchitecture",
          alt: "BathRoomPhoto2",
        },
        {
          id: 3,
          img: "BathRoomPhoto1.png",
          title: "Minimal Bedroom",
          desc: "Decor / Artchitecture",
          alt: "BathRoomPhoto3",
        },
        {
          id: 4,
          img: "BathRoomPhoto2.png",
          title: "Minimal Bedroom",
          desc: "Decor / Artchitecture",
          alt: "BathRoomPhoto4",
        },
      ],
      articles2: [
        {
          id: 1,
          img: "BathRoomPhoto2.png",
          title: "Minimal Bedroom",
          desc: "Decor / Artchitecture",
          alt: "BathRoomPhoto2",
        },
        {
          id: 2,
          img: "BathRoomPhoto1.png",
          title: "Minimal Bedroom",
          desc: "Decor / Artchitecture",
          alt: "BathRoomPhoto1",
        },
        {
          id: 3,
          img: "BathRoomPhoto2.png",
          title: "Minimal Bedroom",
          desc: "Decor / Artchitecture",
          alt: "BathRoomPhoto2",
        },
        {
          id: 4,
          img: "BathRoomPhoto1.png",
          title: "Minimal Bedroom",
          desc: "Decor / Artchitecture",
          alt: "BathRoomPhoto1",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
$widthCenter: 1200px;
$fontText: "Jost", sans-serif;
$colorTitle: #292f36;
$colorTxt: #4d5053;
.project-content {
  display: flex;
  gap: 30px;
}
.project-article-wrp {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.project-article {
  width: 585px;
  &__heading {
    font-size: 25px;
    line-height: 31.25px;
    letter-spacing: 0.5px;
  }
  &__txt {
    color: $colorTxt;
    font-family: $fontText;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.22px;
  }
  &__svg {
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
}
.project-article-content {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
}
</style>
