<template>
  <div class="site">
    <navbar />
    <div class="site-content">
      <nuxt />
    </div>
    <footer-bar />
  </div>
</template>

<style>
</style>

<script>
import Navbar from "~/components/Navbar.vue";
import FooterBar from "~/components/FooterBar.vue" ;

export default {
  components: {
    Navbar,
    FooterBar
  }
};
</script>

<style scoped>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site-content {
  flex: 1;
}
</style>