<template>
  <div>
    <BlogBunner />
    <BlogArticles />
    <FooterComponent />
  </div>
</template>

<script>
import BlogBunner from '@/components/BlogBunner.vue';
import BlogArticles from '@/components/BlogArticles.vue';
import FooterComponent from '@/components/FooterComponent.vue';


export default {
  name: 'BlogPage',
  components: {
    BlogBunner,
    BlogArticles,
    FooterComponent
  },

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