<template>
  <div class="container">
    <section class="section">
      <h4 class="subtitle is-4">If you'd like to know more</h4>
      <div>
        So my name is Michael Bierbaumer, a {{age.years()}} years old freelance software engineer, living in Austria right in the center of Europe 
        <span class="icon icon-txt-align">
          <img class="" src="~/assets/icons/eu.svg" />
        </span> 
      </div>
      <div>
        After living 11 years in Vienna - the capital city of Austria - I decided to <a>trade the city life</a> for nature and moved 
        to a small town in the Austrian Alps
        <span class="icon icon-txt-align">
          <img class="" src="~/assets/icons/mountain.svg" />
        </span> 
      </div>
      <div>&nbsp;</div>
      <div class="columns is-vertical-center">
        <div class="column is-two-fifths">
          <figure class="image is-4by3">
            <ImgModal v-bind:src="'/img/wien.jpg'"></ImgModal>
          </figure>
        </div>
        <div class="column has-text-centered"><span class="is-size-3">versus</span></div>
        <div class="column is-two-fifths">
            <figure class="image is-4by3">
            <ImgModal v-bind:src="'/img/aschach.jpg'"></ImgModal>
          </figure>
        </div>
      </div>
      <div>&nbsp;</div>
      <div>

          

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


