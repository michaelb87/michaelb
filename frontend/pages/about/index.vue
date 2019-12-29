<template>
  <div class="container">
    <section class="section">
      <div class="columns reverse-columns has-text-justified">
        <div class="column is-three-quarters">
          <h4 class="subtitle is-4">Hi, my name is Michael Bierbaumer</h4>
          <p>
            I'm a {{age.years()}} years old freelance software engineer, living in Austria right in the center of Europe
            <span
              class="icon icon-txt-align"
            >
              <img class="icon-rounded" src="~/assets/icons/eu.svg" />
            </span>
          </p>
          <p>
            After living 11 years in Vienna - the capital city of Austria - I decided to trade the city life for nature, and moved
            to a small town in the Austrian Alps
            <span
              class="icon icon-txt-align"
            >
              <img class src="~/assets/icons/mountain.svg" />
            </span>
          </p>
        </div>
        <div class="column">
          <figure class="image is-128x128 h-center-content">
            <ImgModal clazz="is-rounded" src="/img/micha-profile.png" />
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="column has-text-justified">
          <p>
            My journey with web app development started {{age.years() - 13}} years ago back in {{year - age.years() + 13}}, when I built a webchat.
            It was the time were Perl was funky and PHP was the latest trend. During these days I ran a page-counter and guestbook service, as well
            as a online marketing services. All those early experiences sparked a passion for building things.
          </p>

          <p></p>
          <!-- 
             My mantra:
              - Standardize when possible
              - Automate early
              - Be open minded and honest
              - Never stop learning
              - Get work done
          -->
        </div>
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
    },
    year: function() {
      return moment().year();
    }
  }
};
</script>


