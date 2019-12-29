<template>
  <div class="container">
    <section class="section article" v-for="article in articles" :key="article.id">
      <h1 class="title is-2">
        <span>{{article.title}}</span>
      </h1>

      <div v-if="article.content" id="editor" v-html="md(article.content)"></div>

      <div class="column has-text-centered m-t-30">
        <nuxt-link :to="{ name: 'blog'}" class="button is-small is-light">go back</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import articleQuery from "~/apollo/queries/article/article.gql";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
// initialize it manually to be able to have custom containers
const md = new MarkdownIt(
  { 
    breaks: false,
    html: true,
    highlight: function(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }

      return ""; // use external default escaping
    },
  }
);

export default {
  data() {
    return {
      articles: []
    };
  },
  computed: {
    md: function() {
      return function(content) {
        return md.render(content);
      };
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return { slug: this.$route.params.slug };
      }
    }
  }
};
</script>