<template>
  <div class="container">
    <section class="section">
      <div class="columns reverse-columns">
        <div class="column is-three-quarters">
          <h4 class="subtitle is-4">Hi, my name is Michael Bierbaumer</h4>
          <div>
            I'm a {{age.years()}} years old freelance software engineer, living in Austria right in the center of Europe
            <span class="icon icon-txt-align">
              <img class="icon-rounded" src="~/assets/icons/eu.svg" />
            </span>
          </div>
          <div>
            After living 11 years in Vienna - the capital city of Austria - I decided to trade the city life for nature, and moved
            to a small town in the Austrian Alps
            <span
              class="icon icon-txt-align"
            >
              <img class src="~/assets/icons/mountain.svg" />
            </span>
          </div>
        </div>
        <div class="column">
          <figure class="image is-128x128 h-center-content">
            <ImgModal clazz="is-rounded" src="/img/micha-profile.png" />
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="column">[[ tech details]]</div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from "moment";
import ImgModal from "~/components/ImgModal";

export default {
  components: {
    ImgModal
  },
  computed: {
    age: function() {
      let bday = moment("1987-09-25", "YYYY-MM-DD");
      let diffDuration = moment.duration(moment().diff(bday));
      return diffDuration;
    }
  }
};
</script>


