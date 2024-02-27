Vue.component('blog-details', {
    template: `
        <div>
            <h2>Let&rsquo;s Get Solution for Building Construction Work</h2>
            <img src="Photo.png" alt="photo">
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
            Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
            <button v-for="tag in tags"
            v-bind:key="tag.id"
            @click="selectedTag(tag)">{{ tag.tag }}</button>
            <blogs-list 
            v-bind:bloglist="bloglist" 
            v-bind:currentTag="currentTag">
            </blogs-list>
        </div>
    `,
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
                    tag: ['Building','Kitchen', 'Bedroom'],
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 3,
                    tag: ['Kitchen Planning','Kitchen', 'Architecture'],
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 4,
                    tag: ['Building', 'Bedroom'],
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: 5,
                    tag: ['Building','Architecture', 'Bedroom'],
                    article: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
            ],
            currentTag: '',
        }
    },
    methods: {
        selectedTag(tag) {
            this.currentTag = tag;
        }
    },
});

Vue.component('blogs-list', {
    props: ['bloglist', 'currentTag'],
    data() {
        return {
            // currentTag: ''
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
    template: `
        <div>
            <h2>Design sprints are great</h2>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            <ul>
                <blog
                v-for="blog in filterArticle"
                v-bind:key="blog.id"
                v-bind:blog="blog"
                ></blog>
            </ul>
        </div>
    `,
});

Vue.component('blog', {
    props: ['blog'],    
    template: `
                <li>{{ blog.id }} {{ blog.article }}</li>
    `,
});