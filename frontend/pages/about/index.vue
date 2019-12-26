<template>
  <div class="container">
    <section class="section">
      <h4 class="subtitle is-4">I'd like to know more</h4>
      <div>
        {{age.years()}} years old software developer living in Austria, right in the middle of Europe.
        After living 11 years in Vienna - the capital city of Austria - I decided to trade the city life to nature and moved to a small town in the Austrian Alps.
      </div>
      <div>&nbsp;</div>
      <div class="columns is-vertical-center">
        <div class="column is-two-fifths">
          <figure class="image is-4by3">
            <img src="~/assets/img/wien.jpg" />
          </figure>
        </div>
        <div class="column has-text-centered"><span class="is-size-3">versus</span></div>
        <div class="column is-two-fifths">
            <figure class="image is-4by3">
            <img src="~/assets/img/aschach.jpg" />
          </figure>
        </div>
      </div>
      <div>&nbsp;</div>
      <div>

          <ImgModal v-bind:src="'test.jpg'"></ImgModal>

      </div>


    </section>
  </div>
</template>

<script>
import moment from "moment";
import ImgModal from '~/components/ImgModal';

export default {
    components:{
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


