<template>
  <div class="container">
    <section class="section" v-for="article in articles" :key="article.id">
      <h1 class="title">
        <span>{{article.title}}</span>
      </h1>
      
      <div v-if="article.content" id="editor" v-html="md(article.content)"></div>

    </section>
  </div>
</template>

<script>
import articleQuery from "~/apollo/queries/article/article.gql";
import MarkdownIt from "markdown-it";
// initialize it manually to be able to have custom containers
const md = new MarkdownIt().use(require('markdown-it-container'), 'test'); 

export default {
  data() {
    return {
      articles: []
    }
  },
  computed: {
      md: function(){
          return function(content) {
              return md.render(content)
          }
      }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articleQuery,
      variables () {
        return { slug: this.$route.params.slug }
      }
 
    }
  }
};
</script>