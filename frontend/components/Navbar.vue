<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <logo />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          v-on:click="isActive=!isActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu" v-bind:class="{'is-active':isActive}">
        <div class="navbar-start">
          <nuxt-link
            class="navbar-item"
            v-for="entry in entries"
            :key="entry.text"
            :to="entry.path"
          >{{entry.text}}</nuxt-link>
        </div>

        <div class="navbar-end"></div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo
  },
  data() {
    return {
      entries: [
        { text: "About", path: "/" },
        { text: "Soup", path: "/soup" },
        { text: "Blog", path: "/blog" }
      ],
      isActive: false,
    };
  }
};
</script>