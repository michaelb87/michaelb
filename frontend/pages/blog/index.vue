<template>
  <div class="container">
    <section class="section test-theme">
      <h1 class="title">
        <span>Blog</span>
      </h1>

      <div v-for="article in articles" :key="article.slug">
        <nuxt-link
            class="navbar-item"
            v-on:click.native="isActive=false"
            :to="{ name: 'blog-slug', params: {slug: article.slug} }"
          >{{article.title}}</nuxt-link>
        </div>
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
      articles: [],
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