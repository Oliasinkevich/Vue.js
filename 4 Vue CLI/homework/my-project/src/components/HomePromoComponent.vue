<template>
    <div class="promo center">
        <div class="promo-text">
            <h2 class="promo-text__heading">Let Your Home <br>Be Unique</h2>
            <p class="promo-text__paragraph">There are many variations of the passages of <br>lorem Ipsum fromavailable,
                majority</p>
            <a href="#" class="promo-text__btn">Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                    <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274"
                        stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                </svg>
            </a>

        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePromoComponent'
};
</script>

<style lang="scss" scoped>

.promo-text {
    background-image: url(../assets/homePromo.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 70px;
    padding: 208px 715px 208px 52px;
    display: flex;
    gap: 21px;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 208px;
    padding-left: 52px;

    &__heading {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 65px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }

    &_paragraph {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }

    &__btn {
        display: flex;
        padding: 26px 49px 26px 48px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 18px;
        background: #292F36;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        color: #FFF;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%;
        letter-spacing: 0.36px;
    }
}
</style>