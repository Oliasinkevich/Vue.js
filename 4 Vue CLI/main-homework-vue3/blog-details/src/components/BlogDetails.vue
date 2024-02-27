<template>
    <div>
        <h2>Let&rsquo;s Get Solution for Building Construction Work</h2>
            <img src="../assets/BlogDetails1.png" alt="interior photo">
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
            <br>
            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
            <img src="../assets/BlogDetailsText.png" alt="Design text">
            <br>
            <button v-for="tag in tags" 
            v-bind:key="tag.id"  
            @click="selectedTag(tag)">{{ tag.tag }}</button>
            <BlogsList
            v-bind:bloglist="bloglist" 
            v-bind:currentTag="currentTag">
            </BlogsList>
            
    </div>
</template>

<script>
import BlogsList from './BlogsList.vue';

export default {
    name: 'BlogDetails',
    data() {
        return {
            tags: [
                {
                    id: 1,
                    tag: 'Kitchen',
                    select: false,
                },
                {
                    id: 2,
                    tag: 'Bedroom',
                    select: false,
                },
                {
                    id: 3,
                    tag: 'Building',
                    select: false,
                },
                {
                    id: 4,
                    tag: 'Architecture',
                    select: false,
                },
                {
                    id: 5,
                    tag: 'Kitchen Planning',
                    select: false,
                },
            ],
            bloglist: [
                {
                    id: 1,
                    tag: ['Kitchen', 'Bedroom'],
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 2,
                    tag: ['Building', 'Kitchen', 'Bedroom'],
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 3,
                    tag: ['Kitchen Planning', 'Kitchen', 'Architecture'],
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 4,
                    tag: ['Building', 'Bedroom'],
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 5,
                    tag: ['Building', 'Architecture', 'Bedroom'],
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
            ],
            currentTag: '',
        };
    },
    methods: {
        selectedTag(tag) {
            this.currentTag = tag;
        }
    },
    components: { BlogsList }
};
</script>

<style lang="scss" scoped>

</style>