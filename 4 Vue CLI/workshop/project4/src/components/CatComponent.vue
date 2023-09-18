<template>
    <div>
        <h2>cats</h2>
        <img class="big-image" :src="currentImageUrl" alt="currentImageUrl">
        <ul class="image-list">
            <li v-for="image in images" :key="image">
                <img class="image-list__size" :src="require(`@/assets/${image}`)" alt="Vue image"
                    @click="changeCurrentUrl(image)">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CatComponent',

    data() {
        return {
            currentImageUrl: '',
            images: [
                'image1.jpg',
                'image2.jpg',
                'image3.jpg'
            ]
        };
    },

    methods: {
        changeCurrentUrl(img) {
            this.currentImageUrl = require(`@/assets/${img}`);
        }
    }
}
</script>

<style lang="scss" scoped>
.big-image {
    height: 600px;
    width: 600px;
}

.image-list {
    display: flex;
    justify-content: center;
    gap: 20px;
    list-style: none;
}

.image-list__size {
    height: 300px;
    width: 300px;
}
</style>
