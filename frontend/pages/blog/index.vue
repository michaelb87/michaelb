<template>
  <div class="container">
    <section class="section test-theme">
      <h1 class="title">
        <span>Blog</span>
      </h1>
      <span v-for="category in categories" :key="category.name">{{category.name}}</span>
    </section>
  </div>
</template>

<script>
import categoriesQuery from "~/apollo/queries/category/categories.gql";

export default {
  data() {
    return {
      categories: []
    };
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    }
  }
};
</script>