<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="layover">
    <h1 class="modale card">MODALE</h1>
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
    width: 500px;
    height: 400px;
    font-size: 2rem;
  }
}
</style>
