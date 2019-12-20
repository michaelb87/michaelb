<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <logo />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a
            class="navbar-item"
            v-for="entry in entries"
            v-bind:key="entry.text"
            :href="entry.path">
                {{entry.text}}
            </a>
        </div>

        <div class="navbar-end"></div>
      </div>
    </nav>
  </div>
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
      ]
    };
  }
};
</script>