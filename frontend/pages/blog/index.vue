<template>
  <div class="container">
    <section class="section">
      <h1 class="title">
        <span>Blog</span>
      </h1>

      <div v-for="article in articles" :key="article.slug">
        <nuxt-link
          :to="{ name: 'blog-slug', params: {slug: article.slug} }"
        >{{article.title}}</nuxt-link>
      </div>

    </section>
    <section>
      <h6 class="subtitle is-6">
        Get latest blog articles via
        <a href="/blog.xml" class="tag"><i class="fa fa-rss"></i>&nbsp; RSS 2.0</a>
      </h6>
    </section>
  </div>
</template>

<script>
//import categoriesQuery from "~/apollo/queries/category/categories.gql";
import articlesQuery from "~/apollo/queries/article/articles.gql";

export default {
  data() {
    return {
      categories: [],
      articles: []
    };
  },
  apollo: {
    // categories: {
    //   prefetch: true,
    //   query: categoriesQuery
    // }
    articles: {
      prefetch: true,
      query: articlesQuery
    }
  }
};
</script>