<template>
    <section class="banner center">
        <div class="banner__content">
            <h2 class="banner__title">Let Your Home Be&nbsp;Unique</h2>
            <p class="banner__text">There are many variations of&nbsp;the passages of&nbsp;lorem Ipsum fromavailable, majority.</p>
            <button class="banner__btn">Get Started
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>                    
            </button>
        </div>
    </section>
</template>

<script>
export default {
  name: 'HomeBunner',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .center {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }
    h2 {
        font-family: 'DM Serif Display', serif;
        font-weight: 400;
        color: #292F36;
    }
    .banner {
        margin-bottom: 96px;
        &__content {
            padding: 208px 715px 208px 52px;
            background: url(../assets/img/HomeBunner.png);
            background-repeat: no-repeat;
            border-radius: 70px;
        }
        &__title {
            margin: 0 0 18px 0;
            font-size: 65px;
            line-height: 81.25px;
        }
        &__text {
            margin: 0 0 21px 0;
            font-size: 22px;
            line-height: 33px;
            letter-spacing: 0.22px;
        }
        &__btn {
            display: flex;
            gap: 10px;
            padding: 26px 48px;
            border-radius: 18px;
            background: #292F36;
            color: #FFF;
            font-size: 18px;
            font-weight: 600;
            line-height: 22.5px;
            letter-spacing: 0.36px;
        }
        &__btn:hover {
            cursor: pointer;
            box-shadow: inset 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        }
        &__btn:active {
            transition: .3s;
            opacity: .8;
        }
    }
</style>