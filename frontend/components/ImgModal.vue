<template>
  <div>
    <img :src="src" @click="isActive = true" class="pointer-cursor" v-bind:class="clazz" role="button" />
    <div class="modal is-active" v-if="isActive">
      <div class="modal-background"></div>
      <div class="modal-content" v-on-clickaway="deActivate">
        <p class="image">
          <img :src="src" alt />
        </p>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="isActive = false"></button>
    </div>
  </div>
</template>
<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  props: ["src", "clazz"],
  mixins: [clickaway],
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {
    deActivate(){
      this.isActive = false
    }
  }
};
</script>