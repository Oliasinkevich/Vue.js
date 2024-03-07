<template>
  <div>
    <BlogDetailsBanner />
    <BlogDetailsContent />
    <FooterComponent />
  </div>
</template>

<script>
import BlogDetailsBanner from '@/components/BlogDetailsBanner.vue';
import BlogDetailsContent from '@/components/BlogDetailsContent.vue';
import FooterComponent from '@/components/FooterComponent.vue';


export default {
  name: 'BlogDetailsPage',
  components: {
    BlogDetailsBanner,
    BlogDetailsContent,
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