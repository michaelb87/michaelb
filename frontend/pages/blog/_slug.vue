<template>
  <div class="container">
    <section class="section" v-for="article in articles" :key="article.id">
      <h1 class="title">
        <span>{{article.title}}</span>
      </h1>
      
      <div v-if="article.content" id="editor" v-html="$md.render(article.content)"></div>

    </section>
  </div>
</template>

<script>
import articleQuery from "~/apollo/queries/article/article.gql";

export default {
  data() {
    return {
      articles: []
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