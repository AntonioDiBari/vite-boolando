<script>
import { store } from "../store/index.js";
export default {
  data() {
    return { store };
  },
  methods: {
    closeModal() {
      store.modal.show = false;
    },
  },
};
</script>

<template>
  <div class="layover">
    <div class="modale card">
      {{ store.modal.brand }}

      <font-awesome-icon
        @click="closeModal()"
        icon="fa-solid fa-xmark"
        class="close-win"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.layover {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.4);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .modale {
    position: relative;
    width: 200px;
    height: 200px;
    font-size: 2rem;
  }
  .close-win {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 1rem;
  }
}
</style>
