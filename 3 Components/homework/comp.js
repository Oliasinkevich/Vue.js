Vue.component('blog-details', {
    props: ['currentArticle'],
    template: `
        <div>
            <h2> {{ currentArticle.id }}</h2>
            <img :src="currentArticle.source" alt="photo">
            <p> {{ currentArticle.article }}</p>
        </div>
    `,
});

Vue.component('blogs-list', {
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
                    source: 'img/article1.png',
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 2,
                    tag: ['Building','Kitchen', 'Bedroom'],
                    source: 'img/article2.png',
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 3,
                    tag: ['Kitchen Planning','Kitchen', 'Architecture'],
                    source: 'img/article3.png',
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 4,
                    tag: ['Building', 'Bedroom'],
                    source: 'img/article4.png',
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 5,
                    tag: ['Building','Architecture', 'Kitchen'],
                    source: 'img/article5.png',
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
            ],
            currentTag: '',
        };
    },
    methods: {
        selectedTag(tag) {
            this.currentTag = tag;
        },
        selectedArticle(blog) {
            this.$emit("selected-article", blog)
        }
    },
    computed: {
        filterArticle() {
            if(this.currentTag === '') {
                return this.bloglist;
            }
            return this.bloglist.filter((el) => el.tag.includes(this.currentTag.tag))
        }
    },
    template: `
        <div>
            <button v-for="tag in tags" @click="selectedTag(tag)">{{ tag.tag }}</button>
            <h2>Design sprints are great</h2>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <ul>
                <blog @selectedArticle="selectedArticle"
                v-for="blog in filterArticle"
                v-bind:key="blog.id"
                v-bind:blogItem="blog"
                ></blog>
            </ul>
        </div>
    `,
});
Vue.component('blog', {
    props: ['blogItem'], 
    methods: {
        selectedArticle(blog) {
           this.$emit('selectedArticle', blog); 
        }
    },
    template: `
                <li @click="selectedArticle(blogItem)">{{ blogItem.id }} {{ blogItem.article }}</li>
    `,
});