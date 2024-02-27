<template>
    <div>
        <h2>Design sprints are great</h2>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <ul>
                <BlogItem
                v-for="blog in filterArticle"
                v-bind:key="blog.id"
                v-bind:blog="blog"
                ></BlogItem>
            </ul>
            <img src="../assets/BlogDetails2.png" alt="interier photo">
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    </div>
</template>

<script>
import BlogItem from './BlogItem.vue';

export default {
    name: 'BlogsList',
    props: ['bloglist', 'currentTag'],
    data() {
        return {

        };
    },
    computed: {
        filterArticle() {
            if (this.currentTag === '') {
                return this.bloglist;
            }
            return this.bloglist.filter((el) => el.tag.includes(this.currentTag.tag));
        },
    },
    components: { BlogItem }
};
</script>

<style lang="scss" scoped>

</style>