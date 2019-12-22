<template>
  <div class="container">
    <section class="section">
      <h1 class="title">About</h1>
      <div>{{age.years()}} years old software developer living in Austria, right in the middle of Europe</div>
    </section>
  </div>
</template>

<script>
import moment from "moment";

export default {
  computed: {
    age: function() {
      let bday = moment("1987-09-25", "YYYY-MM-DD");
      let diffDuration = moment.duration(moment().diff(bday))
      return diffDuration;
    }
  }
};
</script>


