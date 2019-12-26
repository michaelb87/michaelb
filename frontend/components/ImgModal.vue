<template>
  <div>
    <img src="~/assets/img/aschach.jpg" @click="isActive = true" />
    <div class="modal" v-bind:class="{'is-active': isActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="image is-4by3">
          <img src="~/assets/img/aschach.jpg" alt />
        </p>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="isActive = false"></button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["src"],
  data: function() {
    return {
      isActive: false
    };
  }
};
</script>