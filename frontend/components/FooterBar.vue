<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>michaelb.dev</strong> &copy; {{fromTo}} by
        <a href="/about">Michael Bierbaumer</a>.
      </p>
    </div>
  </footer>
</template>

<script>
import moment from 'moment'
export default {
  computed: {
    fromTo: () => {
      return moment().format('YYYY')
    }
  }
}
</script>