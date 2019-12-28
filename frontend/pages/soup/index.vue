<template>
  <div class="container">
    <section class="section">
      <h3 class="title is-3">
        <span class="icon">
          <img src="~/assets/icons/noodles.svg" />
        </span>
        <span>Soup</span>
      </h3>
      <h6
        class="subtitle is-6 has-text-weight-light"
      >A random mix of hyperlinks to great content for entrepreneurs, consultants, and software developers.</h6>

      <div v-for="soup in soups" :key="soup.id" class="is-soup">
        <div>
          <a v-bind:href="''+soup.url+''" target="_blank">{{soup.title}}</a>
          <span class="has-text-weight-light is-pulled-right">{{soup.created_at | formatDate}}</span>
        </div>
        <a class="has-text-grey-dark" v-bind:href="''+soup.url+''" target="_blank">
          <div v-if="soup.description" v-html="$md.render(soup.description)"></div>
        </a>
        <div>
          <SoupTag
            v-for="souptag in soup.soup_tags"
            :key="souptag.name"
            class="soup-tag"
            :tag="souptag"
          ></SoupTag>
        </div>
      </div>
      <h6 class="subtitle is-6">
        Get latest soups via
        <a href="/soup.xml" class="tag"><i class="fa fa-rss"></i>&nbsp; RSS 2.0</a>
      </h6>
    </section>
  </div>
</template>

<script>
import soupsQuery from "~/apollo/queries/soup/soups.gql";
import SoupTag from "~/components/SoupTag.vue";
import moment from "moment";

export default {
  components: {
    SoupTag
  },
  filters: {
    formatDate(value) {
      return moment(value).format("MMM Do, YYYY");
    }
  },
  data() {
    return {
      soups: []
    };
  },
  apollo: {
    soups: {
      prefetch: true,
      query: soupsQuery
    }
  }
};
</script>

<style scoped>
.is-soup {
  padding-bottom: 2rem;
}
</style>